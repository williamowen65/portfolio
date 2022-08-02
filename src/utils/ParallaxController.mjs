import gsap from "gsap";


export default class ParallaxController {
  constructor(CSSidentifier) {
    this.container = document.querySelector(`.${CSSidentifier}`);
    // console.log(document.querySelector(`.${CSSidentifier}`).children);
    this.items = Array.from(document.querySelector(`.${CSSidentifier}`).children)
    this.html = document.documentElement
    this.scrollAmt = this.html.scrollTop;
    this.scrollMax = this.html.scrollHeight - window.innerHeight

    this.input = {
      scrollY: {
        start: 0,
        end: this.html.scrollHeight - window.innerHeight,
        current: 0,
      },
      mouseX: {
        start: window.innerWidth / 2,
        //End === sensitivity
        end: 1,
        current: 0
      },
      // mouseX: {
      //   start: window.innerWidth / 2,
      //   //End === sensitivity
      //   end: window.innerWidth,
      //   current: 0
      // },
      mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0
      }
    }
    this.input.scrollY.range = this.input.scrollY.end - this.input.scrollY.start
    // this.input.mouseX.range = this.input.mouseX.end - this.input.mouseX.start
    this.input.mouseX.range = this.input.mouseX.end - this.input.mouseX.start
    this.input.mouseY.range = this.input.mouseY.end - this.input.mouseY.start

    this.constants = {
      fixedDim: 300
    }

    this.output = {
      x: {
        start: 0,
        end: 300,
        current: 0
      },
      y: {
        start: 0,
        end: this.constants.fixedDim,
        current: 0
      },
      zIndex: {
        range: 10000
      },
      scale: {
        start: 1,
        end: 0.3
      },
      blur: {
        startingDepth: 0.8,
        range: 20
      },
      rotate: {
        start: 0,
        end: 360
      }


    }
    this.output.scale.range = this.output.scale.end - this.output.scale.start
    this.output.x.range = this.output.x.end - this.output.x.start
    this.output.y.range = this.output.y.end - this.output.y.start

    this.mouse = {
      x: window.innerWidth / 2,
      // y: window.innerHeight / 2,
      // x: 0,
      y: 0,
    }

    this.updateInputs()
    const fn = this.updateOutputs()
    this.updateEachParallaxItem(fn)


    /// Event handler Set ups (scroll and mouse move)
    this.mouseMove = window.addEventListener('mousemove', this.handleMouseMove.bind(this))
    this.scroll = window.addEventListener('scroll', this.handleScroll.bind(this))
    this.resize = window.addEventListener('resize', this.handleResize.bind(this))
    window.addEventListener("keypress", (e) => {
      // console.log(e);
      if (e.code == 'Space') {
        alert('hi');
      }
    })
    console.log("ON LOAD", this.input.scrollY);
  }

  handleResize() {
    // update has to reflect handle mouse move line 1
    this.input.mouseX.end = window.innerWidth
    this.input.mouseX.start = window.innerWidth / 2
    this.input.mouseX.range = this.input.mouseX.end - this.input.mouseX.start


    this.input.mouseY.end = window.innerHeight
    this.input.mouseY.range = this.input.mouseY.end - this.input.mouseY.start
    this.input.scrollY.end = this.html.scrollHeight - window.innerHeight;
    this.input.scrollY.range = this.input.scrollY.end - this.input.scrollY.start

    this.updateInputs()
    const fn = this.updateOutputs()
    this.updateEachParallaxItem(fn)

    // console.log('RESIZE', this.input.scrollY);
    // this.mouse.y = 0
    // this.mouse.x = 0
  }

  updateInputs() {
    // console.log(this.input.mouseX);
    this.input.mouseX.current = this.mouse.x
    this.input.mouseX.fraction = (this.input.mouseX.current - this.input.mouseX.start) / this.input.mouseX.range

    this.input.mouseY.current = this.mouse.y
    this.input.mouseY.fraction = (this.input.mouseY.current - this.input.mouseY.start) / this.input.mouseY.range

    this.input.scrollY.current = this.html.scrollTop
    this.input.scrollY.fraction = (this.input.scrollY.current - this.input.scrollY.start) / this.input.scrollY.range

    // console.log("mouseX", this.input.mouseX.current);
    // console.log("mouseY", this.input.mouseY.current);
  }
  updateOutputs() {
    return function direction(dir) {
      switch (dir) {
        case "towards":
          this.output.x.current = this.output.x.start + (this.input.mouseX.fraction * this.output.x.range)
          this.output.y.current = this.output.y.start + (this.input.mouseY.fraction * this.output.y.range)
          break;
        case "away":
          this.output.x.current = this.output.x.end - (this.input.mouseX.fraction * this.output.x.range)
          this.output.y.current = this.output.y.end - (this.input.mouseY.fraction * this.output.y.range)
          break;
        case "scroll":
          this.output.y.current = this.output.y.start + (this.input.scrollY.fraction * this.output.y.range)
          break;
        default:
          break;
      }
      // console.log("this os
      // console.log(this.output.x.end, this.input.mouseX.fraction, this.output.x.range);

      return {
        x: this.output.x.current,
        y: this.output.y.current
      }

    }.bind(this)

    /* THIS CONTROLS DIRECTION OF EYES, to or away (REFACTORED ABOVE)*/
    // output.x.current = output.x.start + (input.mouseX.fraction * output.x.range)
    // output.y.current = output.y.start + (input.mouseY.fraction * output.y.range)
    // output.x.current = output.x.end - (input.mouseX.fraction * output.x.range)
    // output.y.current = output.y.end - (input.mouseY.fraction * output.y.range)


  }

  updateEachParallaxItem(fn) {
    this.items.forEach((item, i) => {
      const depth = parseFloat(item.dataset.depth, 10)

      // console.log('depth ', depth, item);

      const itemOutput = {
        xAway: fn('away').x - (fn('away').x * depth),
        yAway: fn('away').y - (fn('away').y * depth),
        // xTowards: fn('towards').x - (fn('towards').x * depth),
        xTowards: fn('towards').x - (fn('towards').x * depth),
        yTowards: 0 + (fn('towards').y * depth),
        // yTowards: fn('towards').y - (fn('towards').y * depth),
        scrollYUpward: fn("scroll").y - (fn('scroll').y * depth),
        zIndex: this.output.zIndex.range - (this.output.zIndex.range * depth),
        scale: this.output.scale.start + (this.output.scale.range * depth),
        // blur: this.output.blur.start + (this.output.blur.range * depth)
        blur: (+depth - this.output.blur.startingDepth + 0.1) * this.output.blur.range,

      }

      //APPLY STYLES

      item.style.zIndex = itemOutput.zIndex
      // item.style.transform = i % 2 == 0 ? ` scale(${itemOutput.scale}) translate(${itemOutput.xAway}px,${itemOutput.yAway}px)` : `scale(${itemOutput.scale}) translate(${itemOutput.xTowards}px,${itemOutput.yTowards}px)`;
      const mid = this.input.mouseX.range / 2
      // console.log("this.input.mouseX.current < mid", this.input.mouseX.current < mid);

      if (item.classList.contains('scrollDrift')) {
        const gsapXRange = gsap.utils.interpolate(-window.innerWidth, 700)
        const gsapYRange = gsap.utils.interpolate(-700, 100)
        // translate(-374px, -427px) 
        // console.log("SCROLLDRIFT ITEM", itemOutput.scrollYUpward, gsapRange(itemOutput.scrollYUpward));
        item.style.transform = ` translate(${itemOutput.xTowards}px,${(itemOutput.yTowards - (itemOutput.scrollYUpward * 0.4) / 2)}px)`;
        // console.log("GSAP interpolate", gsapRange((itemOutput.scrollYUpward / window.innerHeight)));
        gsap.to(item.firstChild, { rotate: fn('scroll').y, rotateX: fn('scroll').y, rotateY: fn('scroll').y, x: -gsapXRange((itemOutput.scrollYUpward / window.innerHeight)), y: -gsapYRange((itemOutput.scrollYUpward / window.innerHeight)) })
      } else {

        item.style.transform = ` translate(${itemOutput.xTowards}px,${(itemOutput.yTowards - (itemOutput.scrollYUpward * 0.4) / 2)}px)`;
      }

      item.style.filter = `blur(${itemOutput.blur}px)`
      // console.log('itemOutput: ', itemOutput);
    })

  }

  handleMouseMove(e) {
    // this.mouse.x = e.clientX
    // this.mouse.y = e.clientY

    // this.items
    this.mouse.x = e.clientX
    this.mouse.y = e.clientY

    // console.log("this mouse: ", this.mouse);

    this.updateInputs()
    const fn = this.updateOutputs()
    this.updateEachParallaxItem(fn)
    // console.log(this.input);
  }

  handleScroll(e) {
    this.updateInputs()
    const fn = this.updateOutputs()
    this.updateEachParallaxItem(fn)
  }

  cleanup() {
    console.log("RESIZE CLEAN UP");
    window.removeEventListener('mousemove', this.mouseMove)
    window.removeEventListener('scroll', this.scroll)
    window.removeEventListener('resize', this.resize)
  }
}
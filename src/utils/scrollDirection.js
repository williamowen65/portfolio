var lastScrollTop = 0;

export const captureScroll = (
  upFn,
  downFn,
  topMargin,
  condition,
  condition2,
  condition3
) => {
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  return window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....
      // console.log(
      //   "scrolling",
      //   condition(),
      //   condition2(),
      //   condition3()
      // );
      // alert(window.scrollY);
      if (
        (window.scrollY > topMargin &&
          condition() &&
          condition2()) ||
        (window.scrollY > topMargin &&
          condition() &&
          condition3() &&
          condition2())
      ) {
        var st =
          window.pageYOffset ||
          document.documentElement
            .scrollTop;

        if (st > lastScrollTop) {
          // downscroll code
          downFn();
        } else {
          upFn();
          // upscroll code
        }
        setTimeout(() => {
          lastScrollTop =
            st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, 500);
      }
    },
    false
  );
};

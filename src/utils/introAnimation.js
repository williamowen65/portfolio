import gsap from "gsap";

export default function introAnimation() {
  const tl = gsap.timeline();

  tl.set(".App > *", { opacity: 0 })
    .to("#pageContainer", {
      opacity: 1,
      delay: 2,
      duration: 5,
    })
    .to(".main-header", { opacity: 1 });
}

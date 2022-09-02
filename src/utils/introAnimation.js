import gsap from "gsap";

export default function introAnimation() {
  const tl = gsap.timeline();
  tl.to("#pageContainer", {
    opacity: 1,
    delay: 2,
    duration: 5,
  });
}

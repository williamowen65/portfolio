var lastScrollTop = 0;

export const captureScroll = (
  upFn,
  downFn,
  topMargin,
  condition
) => {
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  return window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....

      const bool = condition();
      if (
        window.scrollY > topMargin &&
        !bool
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

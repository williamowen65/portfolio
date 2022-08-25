var lastScrollTop = 0;

export const captureScroll = (
  upFn,
  downFn
) => {
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  return window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....
      var st =
        window.pageYOffset ||
        document.documentElement
          .scrollTop;

      console.log(
        st,
        lastScrollTop,
        st > lastScrollTop
      ); // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      console.log(
        st + 0.001,
        lastScrollTop,
        st - 0.001 > lastScrollTop
      ); // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
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
    },
    false
  );
};

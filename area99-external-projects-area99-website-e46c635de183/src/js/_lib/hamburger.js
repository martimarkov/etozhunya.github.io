

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {
  var btn = document.querySelector("[hamburger-js]"),
  headerElement2 = document.getElementById('uparrow'),
  headerElement3 = document.getElementById('specword'),
  headerElement4 = document.getElementById('header'),
  hideScrollContainer = document.querySelectorAll("html, body"),
  countScroll = window.pageYOffset,
  mobileContainer = document.querySelector("[mobile-block-js]");

    /**
     * @description
    */
    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;

      elem.classList.toggle("is-active");
      headerElement3.classList.toggle("blacked");
      headerElement2.classList.remove("visible");


      if (btn.classList.contains('is-active')) {
      }
      if (mobileContainer.classList.contains('is-open')) {
        headerElement2.classList.add("visible");
        mobileContainer.classList.add("is-hide");

        setTimeout(function () {
          mobileContainer.classList.remove("is-open");
          mobileContainer.classList.remove("is-hide");
        }, 500);
      } else {
        mobileContainer.classList.add("is-open");
        headerElement4.classList.add("header--fixed");
      }

      hideScrollContainer.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
      });
    });
};


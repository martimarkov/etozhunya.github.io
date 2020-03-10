

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var headerElement2 = document.getElementById('uparrow');
const initHeaderFixed = () => {

  let countScroll = window.pageYOffset,
    headerElement = document.getElementById('header');

	if (countScroll > 10) {
    headerElement.classList.add("header--fixed");
    headerElement2.classList.add("visible");
  } else {
    headerElement.classList.remove("header--fixed");
    headerElement2.classList.remove("visible");
  }

};


"use strict";

document.addEventListener("DOMContentLoaded", function () {
	var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

	if ("IntersectionObserver" in window) {
		var lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					lazyBackgroundObserver.unobserve(entry.target);
				}
			});
		});

		lazyBackgrounds.forEach(function (lazyBackground) {
			lazyBackgroundObserver.observe(lazyBackground);
		});
	}
});
window.onresize = resizer;

function resizer() {
	if (window.pageYOffset > 10) {
		console.log(window.pageYOffset);
	}
}

// let countScroll = window.pageY0ffset,
//  arrow = document.getElementById('up-arrow')

//  	if (countScroll > 150) {
//      arrow.classList.add("visible")
//    	} 
/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {
	var btn = document.querySelector("[hamburger-js]"),
	    headerElement3 = document.getElementById('specword'),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	btn.addEventListener("click", function (ev) {
		var elem = ev.currentTarget;

		elem.classList.toggle("is-active");
		mobileContainer.classList.toggle("is-open");
		headerElement3.classList.toggle("blacked");

		hideScrollContainer.forEach(function (val, idx) {
			val.classList.toggle("is-hideScroll");
		});
	});
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var headerElement2 = document.getElementById('uparrow');
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = window.pageYOffset,
	    headerElement = document.getElementById('header');

	if (countScroll > 10) {
		headerElement.classList.add("header--fixed");
		headerElement2.classList.add("visible");
	} else {
		headerElement.classList.remove("header--fixed");
		headerElement2.classList.remove("visible");
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	/**
  * @name bodyClick
  * @description
  */
	var bodyClick = function bodyClick() {
		document.addEventListener('click', function (ev) {
			var _el = ev.target,
			    _classNameStr = '.header__lang, .header__lang-message';

			if (!_el.closest(_classNameStr)) {
				document.querySelector('.header__lang-message').classList.remove('is-open');
			}
		});
	};

	/**
  * @name langMessage
  * @description
  */
	var langMessage = function langMessage() {
		var _langBtn = document.querySelector('.header__lang');

		_langBtn.addEventListener('click', function (ev) {
			var _el = ev.currentTarget;

			_el.nextElementSibling.classList.toggle('is-open');
		}, false);
	};

	/**
  * @name searchToggle
  * @description
  */
	var searchToggle = function searchToggle() {
		var _searchBtn = document.querySelector('.header__search-button');

		_searchBtn.addEventListener('click', function (ev) {
			var _el = ev.currentTarget;

			_el.parentNode.classList.toggle('is-open');
			document.querySelector('.header__search-box').focus();
		}, false);
	};

	/**
  * @name cookieMessage
  * @description
  */
	var cookieMessage = function cookieMessage() {
		var _cookieNode = document.getElementById('cookie');

		/**
   * @name cookiesToggle
   */
		var cookiesToggle = function cookiesToggle() {
			var _cookiesID = localStorage.getItem('cookiesMessage');

			if (!_cookiesID) {
				_cookieNode.classList.add('is-show');
			} else {
				_cookieNode.classList.add('is-hide');
			}
		};

		/**
   * @name cookiesAction
   */
		var cookiesAction = function cookiesAction() {
			var _btn = document.querySelector('[cookie-btn-js]'),
			    _btnClose = document.querySelector('[cookie-close-js]');

			[_btn, _btnClose].map(function (val, idx) {
				val.addEventListener('click', function (ev) {
					localStorage.setItem('cookiesMessage', '1');

					_cookieNode.classList.add('is-hide');

					setTimeout(function () {
						_cookieNode.setAttribute('style', 'display: none;');
					}, 1000);
				}, false);
			});
		};

		cookiesToggle();
		cookiesAction();
	};

	var whyToggleDescription = function whyToggleDescription() {
		var slideUp = function slideUp(target) {
			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

			target.style.transitionProperty = 'height, margin, padding';
			target.style.transitionDuration = duration + 'ms';
			target.style.boxSizing = 'border-box';
			target.style.height = target.offsetHeight + 'px';
			target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;

			window.setTimeout(function () {
				target.style.display = 'none';
				target.style.removeProperty('height');
				target.style.removeProperty('padding-top');
				target.style.removeProperty('padding-bottom');
				target.style.removeProperty('margin-top');
				target.style.removeProperty('margin-bottom');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
			}, duration);
		};

		var slideDown = function slideDown(target) {
			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

			target.style.removeProperty('display');
			var display = window.getComputedStyle(target).display;

			if (display === 'none') display = 'block';

			target.style.display = display;
			var height = target.offsetHeight;
			target.style.overflow = 'hidden';
			target.style.height = 0;
			target.style.paddingTop = 0;
			target.style.paddingBottom = 0;
			target.style.marginTop = 0;
			target.style.marginBottom = 0;
			target.offsetHeight;
			target.style.boxSizing = 'border-box';
			target.style.transitionProperty = "height, margin, padding";
			target.style.transitionDuration = duration + 'ms';
			target.style.height = height + 'px';
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');

			window.setTimeout(function () {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
			}, duration);
		};

		var slideToggle = function slideToggle(target) {
			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

			if (window.getComputedStyle(target).display === 'none') {
				return slideDown(target, duration);
			} else {
				return slideUp(target, duration);
			}
		};

		var _btn = document.querySelectorAll('[why-title-js]'),
		    _descArr = document.querySelectorAll('[why-desc-js]'),
		    _parentNodes = document.querySelectorAll('[why-parent-js]');

		var _loop = function _loop(i) {
			_btn[i].addEventListener('click', function (ev) {
				var _el = _btn[i].nextElementSibling.querySelector('[why-desc-js]'),
				    _elParent = _btn[i].parentNode;

				if (_elParent.classList.contains('is-open')) {
					_elParent.classList.remove('is-open');
					slideUp(_el, 350);
				} else {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = _parentNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var _parent = _step.value;

							_parent.classList.remove('is-open');
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = _descArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var _desc = _step2.value;

							if (_desc.style.display === 'block') {
								slideUp(_desc, 350);
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					_elParent.classList.add('is-open');
					slideDown(_el, 350);
				}
			});
		};

		for (var i = 0; i < _btn.length; i++) {
			_loop(i);
		}
	};

	/**
  * @name moveToAnimation
  */
	var moveToAnimation = function moveToAnimation() {
		new MoveTo({
			tolerance: 0,
			duration: 900,
			easing: 'easeOutQuart',
			container: window
		});
	};

	/**
  * @name videoPlayerAnimation
  */
	var videoPlayerAnimation = function videoPlayerAnimation() {
		var button = document.querySelector('[process-play-js]');

		TweenMax.set(".play-circle-01", {
			rotation: 90,
			transformOrigin: "center"
		});

		TweenMax.set(".play-circle-02", {
			rotation: -90,
			transformOrigin: "center"
		});

		var rotateTL = new TimelineMax({ paused: true }).to(".play-circle-01", .7, {
			opacity: .1,
			rotation: '+=360',
			strokeDasharray: "456 456",
			ease: Power1.easeInOut
		}, 0).to(".play-circle-02", .7, {
			opacity: .1,
			rotation: '-=360',
			strokeDasharray: "411 411",
			ease: Power1.easeInOut
		}, 0);

		button.addEventListener("mouseover", function () {
			return rotateTL.play();
		});
		button.addEventListener("mouseleave", function () {
			return rotateTL.reverse();
		});
	};

	/**
  * @name videoModal
  * @description
  */
	var videoModal = function videoModal() {
		var _vd = document.getElementById('video');

		var _videoBtn = document.querySelector('[process-play-js]'),
		    _modalClose = document.querySelector('[modal-close-js]'),
		    _overlay = document.getElementById('overlay'),
		    _modal = document.querySelector('[modal-video-js]'),
		    hideScrollContainer = document.querySelectorAll("html, body");
		/**
   *
   * @param callbackName
   * @param displayProp
   */
		function modalToggle(callbackName, displayProp) {
			_modal.style.display = displayProp;

			_overlay.classList[callbackName]('is-show');
			_modal.classList[callbackName]('is-open');

			hideScrollContainer.forEach(function (val, idx) {
				val.classList[callbackName]("is-hideScroll");
			});
		}

		/**
   *
   */
		function playVid() {
			_vd.play();
		}

		/**
   *
   */
		function pauseVid() {
			_vd.pause();
			_vd.currentTime = 0;
		}

		_videoBtn.addEventListener('click', function (ev) {
			modalToggle('add', 'block');
			playVid();
		}, false);

		_modalClose.addEventListener('click', function (ev) {
			modalToggle('remove', 'none');
			pauseVid();
		}, false);

		document.onkeydown = function (evt) {
			evt = evt || window.event;

			if (evt.keyCode === 27) {
				modalToggle('remove', 'none');
				pauseVid();
			}
		};
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initHamburger();
		// ==========================================

		// callback
		bodyClick();
		langMessage();
		searchToggle();
		cookieMessage();
		whyToggleDescription();
		moveToAnimation();
		videoPlayerAnimation();
		videoModal();
		// ==========================================
	};
	initNative();
})();
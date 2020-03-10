"use strict";

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
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	btn.addEventListener("click", function (ev) {
		var elem = ev.currentTarget;

		elem.classList.toggle("is-active");

		if (mobileContainer.classList.contains('is-open')) {
			mobileContainer.classList.add("is-hide");

			setTimeout(function () {
				mobileContainer.classList.remove("is-open");
				mobileContainer.classList.remove("is-hide");
			}, 500);
		} else {
			mobileContainer.classList.add("is-open");
		}

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
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = window.pageYOffset,
	    headerElement = document.getElementById('header');

	if (countScroll > 10) {
		headerElement.classList.add("header--fixed");
	} else {
		headerElement.classList.remove("header--fixed");
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

	var lazyLoad = function lazyLoad() {
		/*
  * Lazy background images
  * */
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
		var cookiesInit = function cookiesInit() {
			var _cookiesID = localStorage.getItem('cookiesMessage');

			if (!_cookiesID) {
				_cookieNode.classList.add('is-show');
			} else {
				_cookieNode.classList.add('is-hide');
			}
		};

		var cookieToggle = function cookieToggle() {
			var _toggle = document.querySelector('[cookie-toggle-js]'),
			    _btn = document.querySelector('[cookie-btn-js]'),
			    _btnClose = document.querySelector('[cookie-close-js]');

			[_btn, _btnClose, _toggle].map(function (val, idx) {
				val.addEventListener('click', function (ev) {
					var _el = ev.currentTarget;

					localStorage.setItem('cookiesMessage', '1');

					_toggle.classList.add('is-toggle');
					document.querySelector('[cookie-message-js]').classList.add('is-hide');

					setTimeout(function () {
						_cookieNode.classList.add('is-hide');
					}, 3000);
					setTimeout(function () {
						_cookieNode.setAttribute('style', 'display: none;');
					}, 4000);
				}, false);
			}, false);
		};

		cookiesInit();
		cookieToggle();
	};

	var whyToggleDescription = function whyToggleDescription() {
		var _btn = document.querySelectorAll('[why-title-js]'),
		    _descArr = document.querySelectorAll('[why-body-js]');

		function _helperSlideUp(el) {
			el.style.height = '0px';

			el.addEventListener('transitionend', function () {
				el.classList.remove('is-open');
			}, {
				once: true
			});
		}

		function _helperSlideDown(el) {
			el.classList.add('is-open');
			el.style.height = 'auto';

			var height = el.clientHeight + 'px';

			el.style.height = '0px';

			setTimeout(function () {
				el.style.height = height;
			}, 0);
		}

		var _loop = function _loop(i) {
			_btn[i].addEventListener('click', function (ev) {
				var _target = ev.currentTarget,
				    _el = _btn[i].nextElementSibling;

				_target.classList.toggle('is-toggle');

				if (_el.classList.contains('is-open')) {

					_helperSlideUp(_el);
				} else {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = _descArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var el = _step.value;

							if (el.classList.contains('is-open')) {
								_helperSlideUp(el);
							}
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
						for (var _iterator2 = _btn[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var _el2 = _step2.value;

							if (_el2.classList.contains('is-toggle')) {
								_el2.classList.remove('is-toggle');
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

					_target.classList.add('is-toggle');

					_helperSlideDown(_el);
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
			duration: 750,
			easing: 'easeOutQuart',
			container: window
		});
	};

	/**
  * @name videoPlayerAnimation
  */
	var videoPlayerAnimation = function videoPlayerAnimation() {
		var button = document.querySelector('[process-play-js]');

		if (!button) {
			return;
		}

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

		if (!_vd || !_videoBtn) {
			return;
		}

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
			var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

			var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
				entries.forEach(function (video) {
					if (video.isIntersecting) {
						for (var source in video.target.children) {
							var videoSource = video.target.children[source];
							if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
								videoSource.src = videoSource.dataset.src;
							}
						}

						video.target.load();
						video.target.classList.remove("lazy");
						lazyVideoObserver.unobserve(video.target);
					}
				});
			});

			lazyVideos.forEach(function (lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
			});

			modalToggle('add', 'block');
			setTimeout(function () {
				playVid();
			}, 150);
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

	/**
  *
  */
	var typedTextMainAnimation = function typedTextMainAnimation() {
		var aText = new Array(document.getElementById('typedtext').getAttribute('data-val'));

		var iSpeed = 65,
		    // time delay of print out
		iIndex = 0,
		    // start printing array at this position
		iArrLength = aText[0].length,
		    // the length of the text array
		iScrollAt = 20; // start scrolling up at this many lines

		var iTextPos = 0,
		    // initialise text position
		sContents = '',
		    // initialise contents variable
		iRow = void 0; // initialise current row

		/**
   *
   */
		function typewriter() {
			var destination = document.getElementById("typedtext");

			sContents = ' ';
			iRow = Math.max(0, iIndex - iScrollAt);

			while (iRow < iIndex) {
				sContents += aText[iRow++] + '<br/>';
			}

			destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "<span>|</span>";

			if (iTextPos++ === iArrLength) {
				iTextPos = 0;
				iIndex++;

				setTimeout(function () {
					destination.getElementsByTagName('span')[0].style.display = 'none';
					document.querySelector('[main-btn-js]').setAttribute('style', 'animation-name: fadeIn, slideInUp;');
				}, 450);

				if (iIndex !== aText.length) {
					iArrLength = aText[iIndex].length;

					setTimeout(function () {
						typewriter();
					}, 500);
				}
			} else {
				setTimeout(function () {
					typewriter();
				}, iSpeed);
			}
		}

		typewriter();
	};

	var initViewPortScroll = function initViewPortScroll() {
		var scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true
		});

		scroll.on('call', function (func) {
			if (func === 'typedTextAnimation') {
				setTimeout(function () {
					typedTextMainAnimation();
				}, 1250);
			}
		});

		scroll.on('scroll', function (obj) {
			var headerElement = document.getElementById('header');

			if (obj.delta.y > 10) {
				headerElement.classList.add("header--fixed");
			} else {
				headerElement.classList.remove("header--fixed");
			}
		});
	};

	var checkEndCSSAnimation = function checkEndCSSAnimation() {
		var arrow1 = document.getElementById('transformation-arrow1'),
		    transformationBody2 = document.querySelector('[transformation-body2-js]'),
		    transformationBody3 = document.querySelector('[transformation-body3-js]'),
		    processTitle = document.querySelector('[process-title-js]');

		function whichTransitionEvent() {
			var t = void 0;
			var el = document.createElement('fakeelement');
			var animations = {
				'animation': 'animationend',
				'OAnimation': 'oAnimationEnd',
				'MozAnimation': 'animationend',
				'WebkitAnimation': 'webkitAnimationEnd'
			};

			for (t in animations) {
				if (el.style[t] !== undefined) {
					return animations[t];
				}
			}
		}

		var animationEvent = whichTransitionEvent();

		if (!arrow1) {
			return;
		}

		animationEvent && transformationBody2.addEventListener(animationEvent, function () {
			document.querySelector('.transformation__box-col-1').classList.add('is-default-state');
		});
		animationEvent && transformationBody3.addEventListener(animationEvent, function () {
			document.querySelector('.transformation__box-col-2').classList.add('is-default-state');
			document.querySelector('.transformation__box-arrow-2').classList.add('is-default-state');
		});
		animationEvent && processTitle.addEventListener(animationEvent, function () {
			document.querySelector('.transformation__box-col-3').classList.add('is-default-state');
		});
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
		lazyLoad();
		langMessage();
		// searchToggle();
		cookieMessage();
		whyToggleDescription();
		moveToAnimation();
		videoPlayerAnimation();
		videoModal();
		// checkEndCSSAnimation();
		// ==========================================

		// document.onreadystatechange = function () {
		// 	if (document.readyState === "interactive") {
		// 		initViewPortScroll();
		// 	}
		// };
	};
	initNative();
})();
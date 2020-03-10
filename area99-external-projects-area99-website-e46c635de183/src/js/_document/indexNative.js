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
	const bodyClick = () => {
		document.addEventListener('click', (ev) => {
			const _el = ev.target,
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
	const langMessage = () => {
		const _langBtn = document.querySelector('.header__lang');

		_langBtn.addEventListener('click', (ev) => {
			const _el = ev.currentTarget;

			_el.nextElementSibling.classList.toggle('is-open');
		}, false);
	};


	/**
	 * @name searchToggle
	 * @description
	 */
	const searchToggle = () => {
		const _searchBtn = document.querySelector('.header__search-button');

		_searchBtn.addEventListener('click', (ev) => {
			const _el = ev.currentTarget;

			_el.parentNode.classList.toggle('is-open');
			document.querySelector('.header__search-box').focus();
		}, false);
	};


	/**
	 * @name cookieMessage
	 * @description
	 */
	const cookieMessage = () => {
		const _cookieNode = document.getElementById('cookie');

		/**
		 * @name cookiesToggle
		 */
		const cookiesToggle = () => {
			const _cookiesID = localStorage.getItem('cookiesMessage');

			if (!_cookiesID) {
				_cookieNode.classList.add('is-show')
			} else {
				_cookieNode.classList.add('is-hide');
			}
		};

		/**
		 * @name cookiesAction
		 */
		const cookiesAction = () => {
			const _btn = document.querySelector('[cookie-btn-js]'),
				_btnClose = document.querySelector('[cookie-close-js]');

			[_btn, _btnClose].map((val, idx) => {
				val.addEventListener('click', (ev) => {
					localStorage.setItem('cookiesMessage', '1');

					_cookieNode.classList.add('is-hide');

					setTimeout(() => {
						_cookieNode.setAttribute('style', 'display: none;');
					}, 1000);

				}, false);
			});
		};

		cookiesToggle();
		cookiesAction();
	};


	const whyToggleDescription = () => {
		const slideUp = (target, duration=500) => {
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

			window.setTimeout( () => {
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

		const slideDown = (target, duration=500) => {
			target.style.removeProperty('display');
			let display = window.getComputedStyle(target).display;

			if (display === 'none') display = 'block';

			target.style.display = display;
			let height = target.offsetHeight;
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

			window.setTimeout( () => {
				target.style.removeProperty('height');
				target.style.removeProperty('overflow');
				target.style.removeProperty('transition-duration');
				target.style.removeProperty('transition-property');
			}, duration);
		};

		const slideToggle = (target, duration = 500) => {
			if (window.getComputedStyle(target).display === 'none') {
				return slideDown(target, duration);
			} else {
				return slideUp(target, duration);
			}
		};

		const _btn = document.querySelectorAll('[why-title-js]'),
			_descArr = document.querySelectorAll('[why-desc-js]'),
			_parentNodes = document.querySelectorAll('[why-parent-js]');

		for(let i = 0; i < _btn.length; i++) {
			_btn[i].addEventListener('click', (ev) => {
				const _el = _btn[i].nextElementSibling.querySelector('[why-desc-js]'),
					_elParent = _btn[i].parentNode;

				if(_elParent.classList.contains('is-open')) {
					_elParent.classList.remove('is-open');
					slideUp(_el, 350);
				} else {
					for(let _parent of _parentNodes) {
						_parent.classList.remove('is-open');
					}
					for(let _desc of _descArr) {
						if(_desc.style.display === 'block') {
							slideUp(_desc, 350);
						}
					}

					_elParent.classList.add('is-open');
					slideDown(_el, 350);
				}
			});
		}
	};


	/**
	 * @name moveToAnimation
	 */
	const moveToAnimation = () => {
		new MoveTo({
			tolerance: 0,
			duration: 900,
			easing: 'easeOutQuart',
			container: window
		})
	};


	/**
	 * @name videoPlayerAnimation
	 */
	const videoPlayerAnimation = () => {
		const button = document.querySelector('[process-play-js]');

		TweenMax.set(".play-circle-01", {
			rotation: 90,
			transformOrigin: "center"
		});

		TweenMax.set(".play-circle-02", {
			rotation: -90,
			transformOrigin: "center"
		});

		const rotateTL = new TimelineMax({ paused: true })
			.to(".play-circle-01", .7, {
				opacity: .1,
				rotation: '+=360',
				strokeDasharray: "456 456",
				ease: Power1.easeInOut
			}, 0)
			.to(".play-circle-02", .7, {
				opacity: .1,
				rotation: '-=360',
				strokeDasharray: "411 411",
				ease: Power1.easeInOut
			}, 0);

		button.addEventListener("mouseover", () => rotateTL.play());
		button.addEventListener("mouseleave", () => rotateTL.reverse());
	};


	/**
	 * @name videoModal
	 * @description
	 */
	const videoModal = () => {
		const _vd = document.getElementById('video');

		const _videoBtn = document.querySelector('[process-play-js]'),
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

			hideScrollContainer.forEach((val, idx) => {
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

		_videoBtn.addEventListener('click', (ev) => {
			modalToggle('add', 'block');
			playVid();
		}, false);

		_modalClose.addEventListener('click', (ev) => {
			modalToggle('remove', 'none');
			pauseVid();
		}, false);

		document.onkeydown = function(evt) {
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
	const initNative = () => {
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

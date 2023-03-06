
(function ($) {
	$(document).ready(function () {
		$('.preloader').fadeOut(1000);
		// menu();
		// initSLiders();

		// dropDownMobile();
		// dropDown();
	});
	$(window).on('scroll', function () {

	});

	$(window).on('resize', function () {

	});


	let scrollPrev;

	function fixedHeaderActions() {
		let header = $('.header');
		let scrolled = $(window).scrollTop();
		if (scrolled > 50) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
		if (scrolled > 100 && scrolled > scrollPrev) {
			header.addClass('anim');
		} else {
			header.removeClass('anim');
		}
		scrollPrev = scrolled;
	}


	function anchorDetect() {
		$('a').on('click', function (e) {
			let link = $(this).attr('href');
			let symbol = link.substr(0, 1);
			if ($(this).hasClass('modal-init')) {
				return false;
			}
			if (symbol == '#') {
				e.preventDefault();
				let top = $(link).offset().top - 100;
				$('body,html').animate({
					scrollTop: top
				}, 1000);
			}
		});
	};




	function toUpBtn(elem) {
		$(elem).on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		});
	}
	//*******************<Accordion>*********************/
	function accordionInit() {
		let elem = $('.faq-item');
		let btn = $('.faq-title');

		btn.on('click', function () {
			if ($(this).hasClass('isActive')) {
				$(this).removeClass('isActive');
				$(this).next().slideUp();
			} else {
				elem.removeClass('isActive');
				btn.removeClass('isActive');
				btn.next().slideUp();
				$(this).addClass('isActive');
				$(this).next().slideDown();
			}
		});
	}
	//*******************<Accordion>*********************/

	//*******************<Dropdown>*********************/
	function dropDown() {
		let btn = $('.faq-title')
		btn.on('click', function () {
			if ($(this).hasClass('isActive')) {
				$(this).removeClass('isActive');
				$(this).next().slideUp();
			} else {
				$(this).next().slideDown();
				$(this).addClass('isActive');
			}
		})
	}

	function dropDownMobile() {
		if (window.innerWidth < 1200 && flsFunction.isMobile.any()) {
			accordionInit();
		}
	}
	//*******************</Dropdown>*********************/

	//*******************<Menu>*********************/
	function menu() {
		const iconMenu = document.querySelector(".icon-menu");
		iconMenu.addEventListener("click", openCloseMenu);

		function openCloseMenu(event) {
			const menuBody = document.querySelector(".menu__body");
			const headerBody = document.querySelector('.header');

			if (iconMenu && open) {
				open = false;
				document.body.classList.toggle('fixed');
				iconMenu.classList.toggle("active");
				menuBody.classList.toggle("active");
				headerBody.classList.toggle("active");
				delay(500, true);
			}
		}

		//*******************</Menu>*********************/

		//*******************<Delay>*********************/
		function delay(time, status) {
			setTimeout(() => {
				open = status;
			}, time);
		}
	}
	//*******************</Delay>*********************/

	//*******************<isMobile>*********************/
	let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	function addTouchClass() {
		//add class : touch to HTML if mobile exist
		if (isMobile.any()) document.documentElement.classList.add('touch');
	}
	//*******************</isMobile>*********************/

	//*******************<Full-screen-on-mobile>****************** */
	//add to css fullscreen-block : min-height: 100vh;  height: calc(var(--vh, 1vh) * 100);
	function fullScreenOnMobile() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		window.addEventListener('resize', () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});
	}
	//*******************</Full-screen-on-mobile>****************** */


	//*******************<Sliders>****************** */
	function initSLiders() {
		if (document.querySelector('.swiper')) {
			new Swiper('.security__slider', {
				observer: true,
				observeParents: true,
				// watchOverflow: true,
				slidesPerView: 1,
				spaceBetween: 10,
				speed: 1000,
				// autoHeight: true,

				// loop: true,
				// loopedSlides: 6,
				//touchRatio: 0,
				//simulateTouch: false,
				// slideToClickedSlide: true,
				// preloadImages: false,
				// parallax: true,

				// effect: 'fade',
				// autoplay: {
				// 	delay: 3000,
				// 	disableOnInteraction: false,
				// },

				navigation: {
					nextEl: '.swiper-button-prev',
					prevEl: '.swiper-button-next',
				},
				// pagination: {
				// 	el: '.swiper-pagination',
				// 	clickable: true,
				// 	type: 'progressbar',
				// },
				// scrollbar: {
				// 	el: '.swiper-scrollbar',
				// 	draggable: true,
				// },

				// breakpoints: {
				// 	320: {
				// 		slidesPerView: 1,
				// 		spaceBetween: 0,
				// 		autoHeight: true,
				// 	},
				// 	768: {
				// 		slidesPerView: 2,
				// 		spaceBetween: 20,
				// 	},
				// 	992: {
				// 		slidesPerView: 3,
				// 		spaceBetween: 20,
				// 	},
				// 	1268: {
				// 		slidesPerView: 4,
				// 		spaceBetween: 30,
				// 	},
				// },

				on: {
					// init: function (swiper) {
					// 	const allSlides = document.querySelector('.fraction-controll__all');
					// 	const allSlidesItems = document.querySelectorAll('.slide-main-block:not(.swiper-slide-duplicate)');
					// 	allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;
					// },
					// slideChange: function (swiper) {
					// 	const currentSlide = document.querySelector('.fraction-controll__current');
					// 	currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
					// }
				}
			})


		}
	}
	//*******************</Sliders>****************** */
})(jQuery);


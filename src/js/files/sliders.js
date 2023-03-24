/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
   // Перечень слайдеров
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector('.swiper')) {
      // Указываем скласс нужного слайдера
      // Создаем слайдер
      var swiper = new Swiper('.testimonials__swiper', {
         loop: false,
         slidesPerView: 1,
         spaceBetween: 30,
         pagination: {
            el: '.swiper-pagination',
            clickable: true,
         },
         thumbs: {
            swiper: swiper,
         },
         breakpoints: {
            776: {
               slidesPerView: 2.5,
            },
         },
         navigation: {
            nextEl: '.testimonials-button-next',
            prevEl: '.testimonials-button-prev',
         },
      });

      var swiper = new Swiper('.our_partner', {
         loop: false,

         slidesPerView: 2,
         autoHeight: false,
         slidesPerGroup: 1,
         breakpoints: {
            776: {
               slidesPerView: 3,
            },
            991: {
               slidesPerView: 4,
            },
         },

         autoplay: {
            // Пауза между прокруткой
            delay: 1000,
            // Закончить на последнем слайде
            stopOnLastSlide: false,
            // Отключить после ручного переключения
            disableOnInteraction: false,
         },
         speed: 800,
      });
      var swiper = new Swiper('.case__swiper-vertical', {
         direction: 'vertical',
         loop: true,
         spaceBetween: 20,
         slidesPerView: 4,
         autoHeight: true,
         slidesPerGroup: 1,
         //  freeMode: true,
         //  watchSlidesProgress: true,
      });
      var swiper = new Swiper('.case__swiper-horizontal', {
         loop: true,
         spaceBetween: 10,

         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         thumbs: {
            swiper: swiper,
         },
      });
   }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',

            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false,
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener('load', function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});

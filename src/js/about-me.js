import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const aboutmeAccordion = document.querySelector('.aboutme-accordion-container');
const nextSlideBtn = document.querySelector('.btn-aboutswiper-next');

function createAccordion({
  containerClass,
  elementClass,
  triggerClass,
  panelClass,
  openOnInit = [],
  duration = 400,
}) {
  return new Accordion(containerClass, {
    elementClass,
    triggerClass,
    panelClass,
    showMultiple: true,
    openOnInit: openOnInit,
    duration: duration,
  });
}

function handleAccordionClick(event, { btnClass, iconClass }) {
  const arrowBtn =
    event.currentTarget.querySelector(btnClass) ||
    event.target.closest(btnClass);
  const arrowIcon = event.currentTarget.querySelector(iconClass);
  if (!arrowBtn) return;

  const isRotated = arrowBtn.classList.contains('rotated');

  if (isRotated) {
    arrowIcon.style.transform = 'rotate(0deg)';
    arrowBtn.classList.remove('rotated');
  } else {
    arrowIcon.style.transform = 'rotate(180deg)';
    arrowBtn.classList.add('rotated');
  }
}

const options = {
  containerClass: '.aboutme-accordion-container',
  elementClass: 'aboutme-accordion-list',
  triggerClass: 'about-me-subtitle',
  panelClass: 'aboutme-accordion-text',
  openOnInit: [0],
};

const clickOptions = {
  btnClass: '.aboutme-accordion-btn',
  iconClass: '.aboutme-item-icon',
};

const aboutmeAccordionTriggers =
  aboutmeAccordion.querySelectorAll('.about-me-subtitle');

aboutmeAccordionTriggers.forEach(accordionTrigger => {
  accordionTrigger.addEventListener('click', event => {
    handleAccordionClick(event, clickOptions);
  });
});

createAccordion(options);

Swiper.use([Navigation, Keyboard]);

const aboutmeSwiper = new Swiper('.about-me-swiper', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

nextSlideBtn.addEventListener('click', e => {
  aboutmeSwiper.slideNext();
});

// new Swiper('.about-me-swiper', {
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   direction: 'horizontal',
//   slidesPerView: 1,
//   spaceBetween: 280,
//   navigation: {
//     nextEl: nextSlideBtn,
//   },
// });

// const aboutmeSwiper = new Swiper('.about-me-swiper', {
//   modules: [Navigation, Keyboard],
//   slidesPerView: 4,
//   spaceBetween: 10,
//   loop: true,
//   loopAdditionalSlides: 4,
//   grabCursor: true,
//   speed: 4000,
//   autoplay: {
//     delay: 0,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//   },
//   navigation: {
//     nextEl: '.aboutme-next',
//   },
// });

// nextSlideBtn.addEventListener('click', () => aboutSwiper.slideNext());

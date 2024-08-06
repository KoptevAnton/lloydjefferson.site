import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { aboutmeAccordion, nextSlideBtn } from './elements.js';

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

// Ініціалізація акордеону
createAccordion(options);

// Видалення атрибута role="button" з елементів h3
const headers = document.querySelectorAll('.aboutme-accordion-container h3');
headers.forEach(header => {
  header.removeAttribute('role');
});

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

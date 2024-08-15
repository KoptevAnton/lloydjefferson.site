import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { prevButtonEl, nextButtonEl } from './elements.js';

Swiper.use([Navigation, Keyboard]);
new Swiper('.projects__swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 280,
  navigation: {
    nextEl: nextButtonEl,
    prevEl: prevButtonEl,
  },
});

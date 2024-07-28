import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {prevButtonEL, nextButtonEL} from './elements.js'

Swiper.use([Navigation, Keyboard]);
new Swiper('.projects__swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 280,
  navigation: {
    nextEl: nextButtonEL,
    prevEl: prevButtonEL,
  },
});

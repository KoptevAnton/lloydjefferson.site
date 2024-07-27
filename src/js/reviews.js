import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';

const swiperOptions = {
    modules: [Navigation, Keyboard],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.rewiews-btn-next',
    prevEl: '.rewiews-btn-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1439: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
};
const swiperReviews = new Swiper('.swiper-reviews', swiperOptions);

const refs = {
  slideWrapper: document.querySelector('.reviews-list-swiper-wrapper'),
  prevBtn: document.querySelector('.reviews-btn-prev'),
  nextBtn: document.querySelector('.reviews-btn-next'),
};

async function getReviews() {
  const res = await axios.get('https://portfolio-js.b.goit.study/api/reviews', {
    headers: {
      accept: 'application/json',
    },
  });

  refs.slideWrapper.insertAdjacentHTML('afterbegin', slidesTemplate(res.data));
}

getReviews();

function slideTemplate(slide) {
  return `<li class="swiper-slide reviews-list-item">
          <img
            class="reviews-img"
            src="${slide.avatar_url}"
            alt="${slide.author}"
          />
          <div class="reviews-desc">
            <p class="reviews-item-subtitle">${slide.author}</p>
            <p class="reviews-text">${slide.review}</p>
          </div>
        </li>`;
}

function slidesTemplate(slides) {
  return slides.map(slideTemplate).join('');
}

refs.nextBtn.addEventListener('click', () => {
  refs.prevBtn.classList.remove('reviews-btn-prev-off');
});

refs.prevBtn.addEventListener('click', () => {
  refs.nextBtn.classList.remove('reviews-btn-prev-off');
});
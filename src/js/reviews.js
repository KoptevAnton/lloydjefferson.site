import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';

import { listEl, revBtnPrevEl, revBtnNextEl } from './elements';

async function getReviewsData() {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function renderReviews() {
  try {
    const reviewsData = await getReviewsData();
    if (!reviewsData) {
      listEl.innerHTML = '<li>Not Found</li>';
      return;
    }
    const reviewsList = reviewsData
      .map(
        review => `
        
      <li class="swiper-slide reviews-swiper-slide">
          <img src="${review.avatar_url}" 
          loading="lazy" alt="${review.author}" 
          class="reviews-img" 
          width="48" height="48">
          <div class = "reviews-desc">
          <h3 class="reviews-item-subtitle">${review.author}</h3>
        <div class="reviews-text">${review.review}</div>
        </div>
      </li>
    `
      )
      .join('');
    listEl.innerHTML = reviewsList;
  } catch (error) {
    console.error(error);
  }
}

async function initSwiper() {
  await renderReviews();

  const swiper = new Swiper('.reviews-section .swiper-reviews', {
    modules: [Navigation, Keyboard],
    // direction: 'horizontal',
    spaceBetween: 16,
    pageUpDown: true,
    mousewheel: true,
    navigation: {
      prevEl: revBtnPrevEl ? revBtnPrevEl : undefined,
      nextEl: revBtnNextEl ? revBtnNextEl : undefined,
    },
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
}

initSwiper();

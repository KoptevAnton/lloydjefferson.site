import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import axios from 'axios';

import elements from './elements'



// const listEl = document.querySelector('.reviews-swiper-wrapper');

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
      elements.listEl.innerHTML = '<li>Not Found</li>';
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
    elements.listEl.innerHTML = reviewsList;
  } catch (error) {
    console.error(error);
  }
}

async function initSwiper() {
  await renderReviews();
  let btnPrev = document.querySelector(
    '.reviews-section .swiper-reviews .reviews-prev-btn'
  );
  let btnNext = document.querySelector(
    '.reviews-section .swiper-reviews .reviews-next-btn'
  );

  const swiper = new Swiper('.reviews-section .swiper-reviews', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    spaceBetween: 16,
    pageUpDown: true,
    mousewheel: true,
    navigation: {
      prevEl: btnPrev ? btnPrev : undefined,
      nextEl: btnNext ? btnNext : undefined,
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
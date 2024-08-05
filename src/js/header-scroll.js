import { headerEl, logoWrapperEl, menuEl, menuList } from './elements.js';

window.onscroll = function () {
  if (window.screen.width >= 768) {
    if (scrollY <= 40) {
      headerEl.classList.remove('header-bg');
      logoWrapperEl.classList.remove('is-hide');
      menuList.classList.remove('menu-list-scroll');
      menuEl.classList.remove('menu-scroll');
    } else {
      headerEl.classList.add('header-bg'),
      logoWrapperEl.classList.add('is-hide');
      menuList.classList.add('menu-list-scroll');
      menuEl.classList.add('menu-scroll');
    }
  } else {
    if (scrollY <= 120) {
      headerEl.classList.remove('header-bg');
      logoWrapperEl.classList.remove('is-hide');
      menuList.classList.remove('menu-list-scroll');
      menuEl.classList.remove('menu-scroll');
    } else {
      headerEl.classList.add('header-bg'),
      logoWrapperEl.classList.add('is-hide');
      menuList.classList.add('menu-list-scroll');
      menuEl.classList.add('menu-scroll');
    }
  }
};

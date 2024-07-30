import { btnTop } from './elements.js';

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    btnTop.classList.add('show');
  } else {
    btnTop.classList.remove('show');
  }
});

btnTop.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import { faqItems } from './elements.js';

document.addEventListener('DOMContentLoaded', () => {
  faqItems.forEach(item => {
    const question = item.querySelector('.title-list');
    const toggleBtn = item.querySelector('.toggle-btn');
    const answer = item.querySelector('.text-faq');
    const iconOpen = toggleBtn.querySelector('.icon-open');
    const iconClose = toggleBtn.querySelector('.icon-close');

    answer.style.display = 'none';
    item.setAttribute('aria-expanded', 'false');
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';

    question.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';

      if (!isOpen) {
        answer.style.display = 'block';
        item.setAttribute('aria-expanded', 'true');
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
      } else {
        answer.style.display = 'none';
        item.setAttribute('aria-expanded', 'false');
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
      }
    });
  });
});

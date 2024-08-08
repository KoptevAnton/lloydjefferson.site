import { faqItems } from './elements.js';

document.addEventListener('DOMContentLoaded', () => {
  faqItems.forEach(item => {
    const question = item.querySelector('.title-list');
    const toggleBtn = item.querySelector('.toggle-btn');
    const answer = item.querySelector('.text-faq');
    const iconOpen = toggleBtn.querySelector('.icon-open');
    const iconClose = toggleBtn.querySelector('.icon-close');

    // Initial setup
    item.setAttribute('aria-expanded', 'false');
    iconOpen.style.display = 'block';
    iconClose.style.display = 'none';

    question.addEventListener('click', () => {
      const isOpen = item.getAttribute('aria-expanded') === 'true';

      if (!isOpen) {
        item.setAttribute('aria-expanded', 'true');
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
      } else {
        item.setAttribute('aria-expanded', 'false');
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
      }
    });
  });
});

import { fixedElements } from './elements.js';

function getScrollbarWidth() {
  // Створюємо тимчасовий елемент для вимірювання ширини смуги прокрутки
  const scrollDiv = document.createElement('div');
  scrollDiv.style.overflowY = 'scroll';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  ``;
  document.body.appendChild(scrollDiv);

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function adjustBodyPadding() {
  const scrollbarWidth = getScrollbarWidth();
  const hasScroll = document.body.classList.contains('no-scroll');

  // Налаштування відступу для body
  if (hasScroll) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    document.body.style.paddingRight = '';
  }

  // Налаштування відступів для фіксованих елементів
  fixedElements.forEach(element => {
    if (hasScroll) {
      const currentPaddingRight = parseInt(
        window.getComputedStyle(element).paddingRight,
        10
      );
      element.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
    } else {
      element.style.paddingRight = '';
    }
  });
}

// Створення інстанції MutationObserver
const observer = new MutationObserver(mutationsList => {
  for (let mutation of mutationsList) {
    if (mutation.attributeName === 'class') {
      adjustBodyPadding();
    }
  }
});

// Налаштування спостерігача на зміни атрибутів елемента body
observer.observe(document.body, {
  attributes: true, // Спостерігати за змінами атрибутів
});

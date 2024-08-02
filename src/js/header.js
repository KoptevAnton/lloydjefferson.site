import {
  mobileModalBtn,
  modal,
  closeModalBtn,
  menuBtn,
  menuList,
  changeColorBtn,
  changeColorModal,
  rootStyle,
  body,
  menuItems,
} from './elements.js';
let isMenuOpen = false;

mobileModalBtn.addEventListener('click', () => {
  modal.classList.toggle('is-open');
  body.classList.toggle('no-scroll');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
  body.classList.toggle('no-scroll');
});

modal.addEventListener('click', evt => {
  if (evt.target.nodeName !== 'A') {
    return;
  }
  modal.classList.remove('is-open');
  body.classList.toggle('no-scroll');
});

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menuList.classList.toggle('is-open');

  if (isMenuOpen) {
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 100);
    });
  } else {
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove('visible');
      }, index * 100);
    });
  }
});

menuList.addEventListener('click', evt => {
  if (evt.target.nodeName !== 'A') {
    return;
  }
  menuItems.forEach(item => {
    item.classList.remove('visible');
  });
  isMenuOpen = !isMenuOpen;
  menuList.classList.remove('is-open');
});

const themes = {
  red: {
    mainColor: '#ed3b44',
    hoverColor: '#e0373f',
    middleColor: '#69292d',
  },
  lime: {
    mainColor: '#c6e327',
    hoverColor: '#b3d11f',
    middleColor: '#596808',
  },
  blue: {
    mainColor: '#0041e8',
    hoverColor: '#0a3dca',
    middleColor: '#001958',
  },
  pink: {
    mainColor: '#e6533c',
    hoverColor: '#d24e39',
    middleColor: '#9f3626',
  },
  aquamarine: {
    mainColor: '#2b4441',
    hoverColor: '#31524f',
    middleColor: '#1e3633',
  },
  orange: {
    mainColor: '#ff7f08',
    hoverColor: '#e87809',
    middleColor: '#ac5300',
  },
};

const savedTheme = JSON.parse(localStorage.getItem('savedTheme'));
if (savedTheme && savedTheme !== 'red') {
  // If we have some saved theme, but not Red, because
  // Red theme is set by default, so no need to rewrite colors
  const newMainColor = themes[savedTheme].mainColor;
  const newHoverColor = themes[savedTheme].hoverColor;
  const newMiddleColor = themes[savedTheme].middleColor;

  rootStyle.setProperty('--main-color', newMainColor);
  rootStyle.setProperty('--hover-color', newHoverColor);
  rootStyle.setProperty('--middle-color', newMiddleColor);
}

changeColorBtn.addEventListener('click', showChangeColorModal);

function showChangeColorModal(event) {
  event.preventDefault();
  changeColorModal.classList.add('is-open');
  changeColorModal.addEventListener('click', changeTheme);
}

function changeTheme(event) {
  event.preventDefault();
  if (event.target.nodeName === 'LI') {
    // If user clicked on color, change theme, save in
    // LocalStorage, remove listener and close the Modal
    const selectedTheme = event.target.dataset.theme;
    const newMainColor = themes[selectedTheme].mainColor;
    const newHoverColor = themes[selectedTheme].hoverColor;
    const newMiddleColor = themes[selectedTheme].middleColor;
    localStorage.setItem('savedTheme', JSON.stringify(selectedTheme));
    rootStyle.setProperty('--main-color', newMainColor);
    rootStyle.setProperty('--hover-color', newHoverColor);
    rootStyle.setProperty('--middle-color', newMiddleColor);
    changeColorModal.removeEventListener('click', changeTheme);
    changeColorModal.classList.remove('is-open');
  } else {
    // If user clicked somewhere else, but not on color, just
    // close this modal and remove listener
    changeColorModal.removeEventListener('click', changeTheme);
    changeColorModal.classList.remove('is-open');
  }
}

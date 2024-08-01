import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { postData } from './swagger-api.js';
import {
  formEL,
  emailEL,
  commentEL,
  buttonEL,
  wrongEmailEL,
  wrongCommentEL,
} from './elements.js';

document.addEventListener('DOMContentLoaded', () => {
  if (emailEL && commentEL && formEL && buttonEL) {
    emailEL.addEventListener('input', onInputEmail);
    commentEL.addEventListener('input', onInputComment);
    formEL.addEventListener('submit', onFormSubmit);

    const savedUserInput = JSON.parse(localStorage.getItem('savedUserInput'));
    if (savedUserInput) {
      emailEL.value = savedUserInput.email;
      commentEL.value = savedUserInput.comment;
    }
    checkFormValidity();
  } else {
    console.error('One or more elements are not found in the DOM.');
  }
});

function onInputEmail() {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?(\.[a-zA-Z]{2,3})+$/;
  if (!emailPattern.test(emailEL.value) || emailEL.value.trim().length <= 0) {
    wrongEmailEL.classList.add('error-message');

    emailEL.style.borderBottomColor = '#E74A3B';
    wrongEmailEL.style.color = '#E74A3B';
    wrongEmailEL.textContent = 'Invalid email, try again';
  } else {
    emailEL.style.borderBottomColor = '#3CBC81';
    wrongEmailEL.style.color = '#3CBC81';
    wrongEmailEL.textContent = 'Success!';
  }
  checkFormValidity();
}

function onInputComment() {
  if (commentEL.value.trim().length <= 0) {
    commentEL.style.borderBottomColor = '#E74A3B';
    wrongCommentEL.style.color = '#E74A3B';
    wrongCommentEL.textContent = 'Please, fill the field';
  } else {
    commentEL.style.borderBottomColor = '#3CBC81';
    wrongCommentEL.style.color = '#3CBC81';
    wrongCommentEL.textContent = 'Success!';
  }
  checkFormValidity();
}

function checkFormValidity() {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?(\.[a-zA-Z]{2,3})+$/;
  const isEmailValid =
    emailPattern.test(emailEL.value) && emailEL.value.trim().length > 0;
  const isCommentValid = commentEL.value.trim().length > 0;

  if (isEmailValid && isCommentValid) {
    buttonEL.disabled = false;
    buttonEL.style.backgroundColor = '';
  } else {
    buttonEL.disabled = true;
    buttonEL.style.backgroundColor = '#3B3B3B';
  }

  saveFormData();
}

function saveFormData() {
  const userInput = {
    email: emailEL.value.trim(),
    comment: commentEL.value.trim(),
  };
  localStorage.setItem('savedUserInput', JSON.stringify(userInput));
}

async function onFormSubmit(evt) {
  evt.preventDefault();
  const userInfo = JSON.parse(localStorage.getItem('savedUserInput'));

  try {
    await postData(userInfo);

    iziToast.show({
      theme: 'dark',
      class: 'toastStyle',
      title: 'Thank you for your interest in cooperation!',
      message:
        'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
      position: 'center',
      timeout: 0,
      close: true,
      backgroundColor: 'rgba(28,29,32,1)',
      overlay: true,
      overlayColor: 'rgba(0, 0, 0, 0.6)',
      progressBar: false,
      closeOnEscape: true,
      closeOnClick: false,
      overlayClose: true,
    });

    formEL.reset();
    // Видалення зеленого підсвічування та повідомлень про помилки після успішного відправлення
    emailEL.style.borderBottomColor = '';
    wrongEmailEL.textContent = '';
    wrongEmailEL.style.color = '';
    commentEL.style.borderBottomColor = '';
    wrongCommentEL.textContent = '';
    wrongCommentEL.style.color = '';
    localStorage.removeItem('savedUserInput');
    checkFormValidity();
  } catch (error) {
    iziToast.show({
      class: 'izi',
      title: 'Error',
      message: `Error: ${error.message}`,
      position: 'center',
      progressBar: false,
      closeOnEscape: true,
      closeOnClick: true,
      timeout: 0,
    });
  }
}

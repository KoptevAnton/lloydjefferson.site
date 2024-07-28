import elements from './elements';

elements.email.addEventListener('input', onInputEmail);
elements.comment.addEventListener('input', onInputComment);

function onInputEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !emailPattern.test(elements.email.value) ||
    elements.email.value.trim().length <= 0
  ) {
    elements.email.style.borderBottomColor = '#E74A3B';
    elements.wrongEmail.style.color = '#E74A3B';
    elements.wrongEmail.textContent = 'Invalid email, try again';
  } else {
    elements.email.style.borderBottomColor = '#3CBC81';
    elements.wrongEmail.style.color = '#3CBC81';
    elements.wrongEmail.textContent = 'Success!';
  }
  checkFormValidity();
}

function onInputComment() {
  if (elements.comment.value.trim().length <= 0) {
    elements.comment.style.borderBottomColor = '#E74A3B';
    elements.wrongComment.style.color = '#E74A3B';
    elements.wrongComment.textContent = 'Please, fill the field';
  } else {
    elements.comment.style.borderBottomColor = '#3CBC81';
    elements.wrongComment.style.color = '#3CBC81';
    elements.wrongComment.textContent = 'Success!';
  }
}

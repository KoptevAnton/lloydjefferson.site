/**
 * Import to your file:
 * import elements from './elements'
 *
 * Example usage:
 * elements.form.addEventListener('submit', (event) => {
 *   event.preventDefault();
 * });
 */

export default {
  form: document.querySelector('.form'),
  email: document.querySelector('.footer-input-email'),
  comment: document.querySelector('.footer-input-comment'),
  button: document.querySelector('.footer-btn'),
  wrongEmail: document.querySelector('.wrongEmail'),
  wrongComment: document.querySelector('.wrongComment'),
};

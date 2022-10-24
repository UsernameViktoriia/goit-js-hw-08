import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

populateInput();

function onInput(e) {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const formData = JSON.parse(savedFormData) || {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({
    email: evt.currentTarget.elements.email.value,
    message: evt.currentTarget.elements.message.value,
  });
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateInput() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  const parsedFormData = JSON.parse(savedFormData);
  if (parsedFormData) {
    refs.email.value = parsedFormData.email || '';
    refs.textarea.value = parsedFormData.message || '';
  }
}

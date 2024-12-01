const inputElement = document.querySelector('#validation-input');
const dataLength = parseInt(inputElement.getAttribute('data-length'), 10);

inputElement.addEventListener('blur', () => {
  if (inputElement.value.length === dataLength) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
});

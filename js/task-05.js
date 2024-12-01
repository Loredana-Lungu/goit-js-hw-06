const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const currentValue = event.target.value;
  nameOutput.textContent = currentValue ? currentValue : 'Anonymous';
});

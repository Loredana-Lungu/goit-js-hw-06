let counterValue = 0;

const valueElement = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const updateCounter = () => {
    valueElement.textContent = counterValue;
};

decrementButton.addEventListener('click', () => {
    counterValue -= 1; updateCounter();
});

incrementButton.addEventListener('click', () => {
    counterValue += 1; updateCounter();
});

updateCounter();
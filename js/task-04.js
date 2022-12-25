let counterValue = 0;

let value = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', event => {
    counterValue -= 1;
    value.innerHTML = `${counterValue}`;
});

incrementBtn.addEventListener('click', event => {
    counterValue += 1;
    value.innerHTML = `${counterValue}`;
});



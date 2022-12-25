const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputInput);

function onInputInput (event) {
    // console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
};
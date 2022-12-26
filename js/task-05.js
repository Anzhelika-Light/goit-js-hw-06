const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputInput);

function onInputInput (event) {
    if (event.currentTarget.value === '') {
        refs.nameLabel.textContent = 'Anonymous';
    } else {
        refs.nameLabel.textContent = event.currentTarget.value;
    }
    // console.log(event.currentTarget.value);
};
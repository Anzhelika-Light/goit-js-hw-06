const inputRef = document.querySelector('#font-size-control');
const nameLabel = document.querySelector('#text');

inputRef.addEventListener('input', onInputInput);

function onInputInput (event) {
    // console.log(inputRef.value);
    nameLabel.style.fontSize = inputRef.value + 'px';
}

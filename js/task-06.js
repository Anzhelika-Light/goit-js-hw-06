(() => {
const inputRef = document.querySelector('#validation-input');

const onInputRefBlur = (event) => {
   const eventTarget = event.currentTarget;
   eventTarget.classList.remove('valid', 'invalid');
   const addedClass = 
    eventTarget.value.length === Number.parseInt(eventTarget.dataset.length)
        ? 'valid'
        : 'invalid';
    eventTarget.classList.add(addedClass);
};

inputRef.addEventListener('blur', onInputRefBlur);
})();

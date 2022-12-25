(() => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  let numberInput = null;
  let elementNumber = 1;
  let divWidth = 30;
  let divHeight = 30;

  // list of DOM elements to work with
  const boxesRef = document.querySelector('#boxes');
  const createBtnRef = document.querySelector('[data-create]');
  const destroyBtnRef = document.querySelector('[data-destroy]');
  const inputRef = document.querySelector('#controls input[type="number"]');

  const createBoxes = (amount) => {
    let addedHTMLArray = [];
    for (let i = 0; i < amount; i += 1) {
      addedHTMLArray.push(
        `<div style = 'background-color:${getRandomHexColor()}; width:${divWidth}px; height:${divHeight}px};'>${elementNumber}</div>` 
      );
      divWidth += 10;
      divHeight += 10;
      elementNumber += 1;
    }
    boxesRef.insertAdjacentHTML('beforeend', addedHTMLArray.join(''));
  };

  const onInputRefChange = (event) => {
    numberInput = event.currentTarget.value;
  };

  const onCreateBtnRefClick = () => {
    if (!numberInput) {
      //checking for no input
      return alert('Enter some value!');
    }
    // activate button[data-destroy] only if the elements are created
    destroyBtnRef.removeAttribute('disabled');
    createBoxes(numberInput);
  };

  const onDestroyBtnRefClick = () => {
    boxesRef.innerHTML = '';
    divWidth = 30;
    divHeight = 30;

    //deactivate button[data-destroy] after destroying all the added elements
    destroyBtnRef.setAttribute('disabled', '');
    inputRef.value = '';
    numberInput = null;
    elementNumber = 1;
  };

  inputRef.addEventListener('input', onInputRefChange);
  createBtnRef.addEventListener('click', onCreateBtnRefClick);
  destroyBtnRef.addEventListener('click', onDestroyBtnRefClick);

})();
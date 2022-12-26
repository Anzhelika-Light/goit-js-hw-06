function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const bodyRef = document.body;

btnRef.addEventListener('click', onBtnClick);

function onBtnClick (event) {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}

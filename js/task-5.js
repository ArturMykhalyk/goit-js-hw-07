function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click", setColor);
function setColor() {
  const colorBody = document.querySelector("body");
  const colorSpan = document.querySelector(".color");
  colorBody.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = colorBody.style.backgroundColor;
}

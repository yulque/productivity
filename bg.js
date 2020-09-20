const body = document.querySelector("body");

function loadImage(randomNumber) {
  const img = new Image();
  //   img.src = `images/bg${
  //     randomNumber < 10 ? `0${randomNumber}` : randomNumber
  //   }.jpg`;
  img.src = `https://source.unsplash.com/random/?workplace,white?q=10`;
  img.classList.add("bgImage");
  body.appendChild(img);
}
function genNumber() {
  const number = Math.floor(Math.random() * 5) + 1;
  return number;
}
function init() {
  const randomNumber = genNumber();
  loadImage(randomNumber);
}

init();

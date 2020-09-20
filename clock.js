// const clockContainer = document.querySelector(".js-clock");
// const clockTitle = clockContainer.querySelector("h1");

// function getTime() {
//   const date = new Date();
//   const minutes = date.getMinutes();
//   const hours = date.getHours();
//   const seconds = date.getSeconds();
//   clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
// }
// function init() {
//   getTime();
// }

// init();

const clockContainer = document.querySelector(".js-clock"); // returns first class element from all.
const clockContents = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockContents.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangecolor = function () {
    if(!intervalId){
    intervalId = setInterval(changebgcolor, 1000);
    }
}
function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
};

const stopchangecolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangecolor);

document.querySelector("#stop").addEventListener("click", stopchangecolor);

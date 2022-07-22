const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let hexColor = "#";

btn.addEventListener("click", function () {
  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }

  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;

  hexColor = "#";
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

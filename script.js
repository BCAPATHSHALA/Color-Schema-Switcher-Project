const buttons = document.querySelectorAll(".buttons");
const body = document.body;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let color = e.target.id;
    switch (color) {
      case "red":
        body.style.backgroundColor = color;
        break;
      case "blue":
        body.style.backgroundColor = color;
        break;
      case "grey":
        body.style.backgroundColor = color;
        break;
      case "yellow":
        body.style.backgroundColor = color;
        break;
    }
  });
});

// Random Background Switcher
const randomBTN = document.querySelector(".random-background-btn");

// Create function to generate the random color and return rgb
const randomColor = () => {
  const min = 0;
  const max = 255;
  const red = Math.floor(Math.random() * (max - min + 1)) + min;
  const green = Math.floor(Math.random() * (max - min + 1)) + min;
  const blue = Math.floor(Math.random() * (max - min + 1)) + min;
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
};

randomBTN.addEventListener("click", () => {
  const bg_color = randomColor();
  body.style.backgroundColor = bg_color;
});

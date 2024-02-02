# Color Schema Switcher Project

This simple JavaScript project allows users to switch between predefined color schemes and generate a random background color. Below are the three main files for this project:

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/BCAPATHSHALA/Color-Schema-Switcher-Project/master/Random%20Color%20Switcher%20Project.png)

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Schema Switcher</title>
    <link rel="stylesheet" href="style.css" />
    <script src="./script.js" defer></script>
  </head>

  <body>
    <section class="container">
      <h1>COLOR SCHEMA SWITCHER</h1>
      <div class="buttons-container">
        <span class="buttons" id="red">Red</span>
        <span class="buttons" id="blue">Blue</span>
        <span class="buttons" id="grey">Grey</span>
        <span class="buttons" id="yellow">Yellow</span>
      </div>
      <div class="random-background-btn">Random<br />Background</div>
    </section>
  </body>
</html>
```

## CSS Code

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container {
  min-width: 80%;
  border: 1px solid #1d3557;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  box-shadow: #00000059 0px 5px 15px;
  padding: 5px;
  background-color: #ffffff;
}

.container h1 {
  color: #1d3557;
  width: 100%;
  text-align: center;
}
.buttons-container {
  padding: 10px;
  box-shadow: #00000059 0px 5px 15px;
}
.buttons-container > span {
  display: inline-block;
  width: 100px;
  padding: 5px;
  margin: 10px;
  text-align: center;
  box-shadow: #00000059 0px 5px 15px;
  cursor: pointer;
}
#red {
  background-color: red;
}
#blue {
  background-color: blue;
}
#grey {
  background-color: grey;
}
#yellow {
  background-color: yellow;
}

.random-background-btn {
  background: #ffffff;
  border: 1px solid greenyellow;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  background-color: #1d3557;
  color: #ffb703;
  cursor: pointer;
}
```

## JavaScript Code

```javascript
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
```

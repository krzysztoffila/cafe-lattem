"use strict";
const slideList = [{
    img: "images/restaurant-inside.jpg",
    text: "Warszawa",
  },
  {
    img: "images/garden.jpg",
    text: "Wrocław",
  },
  {
    img: "images/restaurant-outside.jpg",
    text: "Poznań",
  },
];
const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
// Zamiana z nodeList na tablice + ...rest
// const dots = [...document.querySelectorAll('.dots span')];
/* Interfejs */
const time = 3000;
let active = 0;
/* Implementacje */

const changeSlide = () => {
  active++;
  // Sprawdzanie czy indexy active są równe długości obiektu slideList - jeśli tak to zerujemy aby leciało od początku
  if (active === slideList.length) {
    active = 0;
  }
  // Iterujemy po slideList[iteracja]
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
};
let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    indexInterval = setInterval(changeSlide, time);
  }
};
window.addEventListener("keydown", keyChangeSlide);

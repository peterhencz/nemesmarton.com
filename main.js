function doSomething() {
    console.info("🍰");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", doSomething);
  console.log('🛫');
} else {
  doSomething();
}

window.addEventListener("load", function(event) {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

const gradients = [
  'linear-gradient(121deg, rgb(87, 0, 255), rgb(226, 105, 33))',
  'linear-gradient(121deg, rgb(255, 0, 145), rgb(22, 66, 98))',
  'linear-gradient(121deg, rgb(192, 255, 0), rgb(232, 41, 91))',
  'linear-gradient(121deg, rgb(248, 94, 94), rgb(154, 211, 173))',
  'linear-gradient(121deg, rgb(147, 181, 183), rgb(243, 182, 129))'
]

const colors = [
  '#e0aa3e',
  '#c3b6d8',
  '#ea4d7c',
  '#e54837',
  '#43efbe',
  '#5d3993'
]

const enter = document.getElementById('sign');

function animationSetTime() {
  enter.addEventListener("transitionend", function(event) {
    enter.style.display = "none";
      console.log('enter');
  }, false);
}

function enterPage() {
  const menu = document.getElementById('menu');
  
  animationSetTime();

  enter.style.transition = "0.5s ease-in-out";
  enter.id = 'sign_a';
  menu.style.transition = "0.5s ease-in-out";  
  menu.id = 'menu_a';
}

function fullPageWhite() {
  enter.style.display = "initial";
  document.body.style.backgroundColor = 'white';
}


let lastGradient = 0;

function fullPageGradient() {

  const enter = document.getElementById('sign');
  let newGradient = Math.floor(Math.random() * colors.length);
  
  if (newGradient != lastGradient) {
    let randomGradient = colors[newGradient];

    document.body.style.backgroundColor = randomGradient;
    document.body.style.backgroundSize = '300%';

    lastGradient = newGradient;

  } else {
    fullPageGradient();
  }
}

function cica() {
  
  if (enter.style.display == 'initial') {
    fullPageGradient();
    console.log(enter.style.display);
  } else {
    console.log('cica');
    console.log(enter.style.display);
  }
}

function works() {
  console.log(enter.style)
}

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

const enter = document.querySelector('#sign');
const mainMenu = document.querySelector('#mainMenu');
const workMenu = document.querySelector('.workMenu');
const content = document.querySelector('.content');
function animationSetTime() {
  enter.addEventListener("transitionend", function(event) {
    enter.style.display = "none";
      console.log('enter');
  }, true);
}

function enterPage() {
  
  animationSetTime();

  content.style.opacity = '0';
  enter.style.transition = "0.5s ease-in-out";
  enter.id = 'sign_a';
  mainMenu.style.transition = "0.5s ease-in-out";  
  mainMenu.id = 'mainMenu_a';
}

function fullPageWhite() {
  enter.style.display = "initial";
  document.body.style.backgroundColor = 'white';
}

let lastGradient = 0;


function fullPageGradient() {
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
    console.log(enter.style.display);
  }
}

function hideWorkMenu() {
  console.log(workMenu);
  workMenu.classList.remove('visible');
  mainMenu.classList.remove('setScale');
  content.style.opacity = '1';
}

function works() {

  workMenu.classList.toggle('visible');
  mainMenu.classList.toggle('setScale');
  console.log(workMenu);
}

function contact() {
  hideWorkMenu();
  console.log('contact');
  content.classList.toggle('contentText');
  content.style.textAlign = 'center';
  content.innerHTML = 'nemesmarton@gmail.com<br><br><br><br>instagram.com/martonnemes<br><br><br><br>+44 7727737433'
}

function bio() {
  hideWorkMenu();
  console.log('bio');
  content.classList.toggle('contentText');
  content.innerHTML = 'bio';
}

function statement() {
  hideWorkMenu();
  console.log('artist statement');
  content.classList.toggle('contentText');
  content.innerHTML = 'After spending one year in London, I realised that my work is about techno. In a wider context the atmosphere and the aspiration I would like to capture is very similar to the phenomenon and experience of rave culture. I would like to create a disintegration and rearrangement of the pictorial state to bring the upheaval of some kind of newness.<br><br><br><br>I am involving techno music, dj lights, police vinyl foils, metal, chain and mirrored Perspex to deepen the perception of a 2 dimensional painting. I am expanding and bending the surfaces, and with using sounds and lights I try to refer to the escapist counter cultural aspect of rave, and create some kind of multisensory experience. For this I look to the exhibition space to a party place and create a temporary autonomous zone like atmosphere in the gallery show.<br><br><br><br>My work can be the manifest of escapism, depicting a constant tension, effort, desire to the impossible break out from the frame. Never ending need of seeking pleasure and freedom that we try to reach every day.'
}

function police() {
  console.log('police');
}

function temporary() {
  console.log('temporary');
}

function pipo() {
  console.log('pipo');
}

function degree() {
  console.log('degree');
}



function openWorks() {
  mainMenu.style.transform = 'scale(0.9)';
    console.log(workMenu);
}

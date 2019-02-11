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

const pipoImgs = [
  'PourInPourOut-detail.JPG',
  'PourInPourOut01-official.JPG',
]


const enter = document.querySelector('#sign');
const mainMenu = document.querySelector('#mainMenu');
const workMenu = document.querySelector('.workMenu');
const content = document.querySelector('.content');

function animationSetTime() {
  enter.addEventListener("transitionend", function(event) {
    document.body.style.backgroundColor = 'white';
    enter.style.display = "none";
    content.innerHTML = '<img class="introImg" src="assets/img/degree/degree1.jpg" alt="">'
      console.log('enter');
  }, true);
}

function enterPage() {

  animationSetTime();

  enter.style.transition = "0.3s ease-in-out";
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
  content.classList.remove('contentWork');
  content.style.transition = "0.3s ease-in-out";
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
  content.style.textAlign = 'left';
  content.classList.toggle('contentBio');
  content.innerHTML = '<p><img class="imgBio" src="assets/nemes_bio.jpg"></p><p><b>Nemes Márton</b><br><br><br><br>born in 1986. Székesfehérvár, Hungary<br>currently lives and works in London, United Kingdom<br><br><br><br><i>Studies:</i><br>2005 – 2008 Technical University Budapest, faculty of industrial design<br>2008 – 2013 Hungarian University of Fine Arts, faculty of painting<br>2017 – 2018 MFA Chelsea College of Arts, London University of Arts<br><br><br><br><i>Memberships:</i><br>2009 Studio of Young Artists Association<br><br><br><br><i>Prizes, Scolarships:</i><br>2015 Residency at Westport Art Center – Westport, US<br>2014 Residency Salzburg, Austria – Land Salzburg<br>2012 Ludwig Prize<br>2011 Erasmus Scolarship Leipzig, Uni Leipzig<br><br><br><i>Solo Shows:</i><br>2017 Shaping Realities – Deak Erika Gallery - Budapest<br>2016 UnderCovered – Kunstklag Gallery - München<br>2015 OverColored – Deák Erika Gallery - Budapest<br>2015 Everyone Has Right – IcaD - Dunaújváros<br>2015 EastMeetsWest – Wesport Arts Center – Westport, US<br>2014 Painted Paint – Paksi Képtár - Paks<br>2014 Out of Order – Contemporary Architecture Center Project Gallery - Budapest<br>2013 Temporary Closed – Deák Erika Gallery, Budapest<br>2013 When Time Speeks - Chimera Proyect Gallery, Budapest<br><br><br><br><i>Selected Group Shows:</i><br>2017 Abstract Hungary – Halle für Kunst und Medien – Graz, Austria<br>2015 Don’t bring me flowers – 68 Projects - Berlin<br>2014 Abstract Variations – curator: Imre Bak – Trapéz Gallery, Budapest<br>2014 Haunting Monumentality – curator: Áron Fenyvesi – MSU Zagreb, HR<br>2013 Eszterházy Prize – Museum of Fine Arts , Budapest<br>2013 X-Ray Texture Pack – Ulrike Hrobsky Gallery - Vienna<br>2012 Loop – Virág Judit Gallery, Budapest<br>2011 Wir Waren Leipziger - Labor Gallery, Budapest<br>2011 Budapest Áramlat - Virág Judit Gallery, Budapest<br><br><br><br><br><i>Publications:</i><br>2015 Balkon – Dávid Fehér<br>2015 ArtPortal – Julia Kegyes<br>2015 Connecticut Post – Boros Phyllis<br>2015 Balkon – Ébli Gábor<br>2015 Műértő – Sinkó istván<br>2014 Mozgó Világ – Gárdonyi László<br><br><br><br><br><i>Represented by:</i><br>Deák Erika Gallery, Budapest</p><br><br>';
}

function statement() {
  hideWorkMenu();
  console.log('artist statement');
  content.classList.add('contentText');
  content.innerHTML = 'After spending one year in London, I realised that my work is about techno. In a wider context the atmosphere and the aspiration I would like to capture is very similar to the phenomenon and experience of rave culture. I would like to create a disintegration and rearrangement of the pictorial state to bring the upheaval of some kind of newness.<br><br><br><br>I am involving techno music, dj lights, police vinyl foils, metal, chain and mirrored Perspex to deepen the perception of a 2 dimensional painting. I am expanding and bending the surfaces, and with using sounds and lights I try to refer to the escapist counter cultural aspect of rave, and create some kind of multisensory experience. For this I look to the exhibition space to a party place and create a temporary autonomous zone like atmosphere in the gallery show.<br><br><br><br>My work can be the manifest of escapism, depicting a constant tension, effort, desire to the impossible break out from the frame. Never ending need of seeking pleasure and freedom that we try to reach every day.'
}

function police() {
  content.classList.add('contentWork');
    content.innerHTML = 
    '<img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp1.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp2.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp3.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp4.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp5.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp6.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" ssrc="assets/img/police/pp7.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp8.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp9.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp10.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp11.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/police/pp12.jpg" alt=""><br>';
  console.log('police');
}

function temporary() {
    content.innerHTML = '<img class="introImg0" src="assets/img/pipo/PourInPourOut01.JPG" alt="">';
  console.log('temporary');
}

function pipo() {
  content.classList.add('contentWork');
    content.innerHTML = 
    '<img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut02.JPG" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut-detail.JPG" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut01-official.JPG" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut01.JPG" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut001.JPG" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut02-official.JPG" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut002.JPG" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/pipo/PourInPourOut03.JPG"alt=""><br>';
  console.log('pipo');
}

function degree() {
  content.classList.add('contentWork');
    content.innerHTML = 
    '<img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree1.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree2.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree3.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree4.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree6.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree7.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree8.jpg" alt=""><br><img onclick="nextPicture()" class="introImg0" src="assets/img/degree/degree9.jpg"alt=""><br>';
  console.log('degree');
}

function nextPicture() {

  console.log('next');
}

function openWorks() {
  mainMenu.style.transform = 'scale(0.9)';
    console.log(workMenu);
}

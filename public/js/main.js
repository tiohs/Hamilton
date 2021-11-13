const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('header');
const settingShow = document.querySelector('#show');
const bSettings = document.querySelector('#aboutMy');

const texts = ['Hi, I\'m Hamilton Silva','I\'m a programmer','Full Stack ', 'I Like Design'];


var count = 0;
var index = 0;
var decrement = 0;
var currentText = '';
var letter = '';

function sleep(delay){
    return new Promise(resolve => setTimeout(resolve,delay));
}

const typeWrite = async() =>{
  if(!!document.querySelector("#typing")) {
    if (count == texts.length)
    {
      count = 0;
    }
    currentWord = texts[count];
    currentLetter = currentWord.slice(0,++index);
    document.querySelector("#typing").textContent = currentLetter;
    if(index == currentWord.length)
    {
      await sleep(1500);
      while(index > 0)
      {
        console.log('estou');
        currentLetter = currentWord.slice(0,--index);
        document.querySelector("#typing").textContent = currentLetter;
        await sleep(50);
      }
      count++;
      index = 0;
      await sleep(500);
    }
    return setTimeout(typeWrite,Math.random()*200+50);
  }
  
}

typeWrite();



ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 800,
  reset: true
}).reveal(
  `
    section#about .info div.date,
    section#about .info .conct,
    section#skills .content .header,
    section#skills .content .desc,
    section#skills .content .desc h4,
    section#skills .content .desc ul li,
    section#skills .content .desc ul div.content div.nivel
  `,
  { interval: 100 }
);

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true
}).reveal(
  ` section#redesSocias ul li
  `,
  { interval: 100 }
);


function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if(!!document.querySelector('nav ul li a[href*=' + sectionId + ']')) {
       if (checkpointStart && checkpointEnd) {
     document
       .querySelector('nav ul li a[href*=' + sectionId + ']').parentElement
         .classList.add('ative')
     } else {
       document
         .querySelector('nav ul li a[href*=' + sectionId + ']').parentElement
         .classList.remove('ative')
     }
    }
   
  }
}

function changeHeaderWhenScroll() {
  if(window.scrollY > 20){
    header.style.display = 'flex';
    typ();
  } else {
    header.style.display = 'none';
  }
  
}

function settingsFunction (){
  settingShow.innerHTML = `   <div class="menu">
    <h3>Settings</h3>
    <div class="group">
       <span>Modo</span>  <i class="fas fa-toggle-off"></i>
    </div>
    <div class="group">
        <span>Languages</span> 
        <select name="lang" id="lang">
            <option value="en">En</option>
            <option value="pt">Pt</option>
        </select>
    </div>
</div>`;
}

function typ() {
  settingShow.innerHTML = '<h1 style="text-align: start;"> <span class="tep">></span> <span id="typing"></span>|</h1>';
}

let state = 0;
bSettings.addEventListener('click', () => {
  if(state) {
    typ();
    state = 0;
    typeWrite();
  } else {
    settingsFunction();
    state = 1;
  }

});

window.addEventListener('scroll', () => {
  activateMenuAtCurrentSection();
  changeHeaderWhenScroll();
});
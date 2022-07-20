const sections = document.querySelectorAll('section[id]');
const header = document.querySelector('header');
const settingShow = document.querySelector('#show');
const bSettings = document.querySelector('#aboutMy');
const formControl = document.querySelectorAll('.form-control');
const form = document.querySelector('form');
const email = document.querySelector('.email');
const avatar = document.querySelector('.single');
const model = document.querySelector('#model');

const texts = ['Hi, I\'m Hamilton Silva ','I\'m a programmer','Full Stack ', 'I Like Design'];

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
  duration: 700,
  reset: true
}).reveal(
  `
    section#about .info div.date,
   
    section#skills .content .desc ul div.content div.nivel
  `,
  { interval: 100 }
);
ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 1000,
  reset: true
}).reveal(
  `
  #experence .content,
  section#about .info .conct,
  section#project .content .card
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
       <span>Modo</span>  <strong id="theme"></strong>
    </div>
    <div class="group">
        <span>Languages</span> 
        <select name="lang" id="lang">
            <option value="en">En</option>
            <option value="pt">Pt</option>
        </select>
    </div>
</div>`;
  document.querySelector('#theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
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



// Validation of form


function showError(input) {
  input.classList.add('ative');
}

function showSuccess(input) {
  input.classList.remove('ative');
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input);
      
    } else {
      showSuccess(input);
    }
  });
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    
  } else {
    showError(input);
    
  }
}

// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  checkEmail(email);
  checkRequired(formControl);
  if(!document.querySelectorAll('form .ative')[0]) {
    alert('Sorry ! Error send message ^_^. Use Whatsapp - 943732999');
  
  }
});

// Model 

avatar.addEventListener('click', ()=> {
  model.style.display = 'block';
});

model.addEventListener('click', ()=> {
  model.style.display = 'none';
});
window.addEventListener('scroll', () => {
  activateMenuAtCurrentSection();
  changeHeaderWhenScroll();
});
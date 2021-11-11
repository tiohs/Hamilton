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




const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  ` section#redesSocias ul li,
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
  } else {
    header.style.display = 'none';
  }
  
}

window.addEventListener('scroll', () => {
  activateMenuAtCurrentSection();
  changeHeaderWhenScroll();
});
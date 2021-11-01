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
  setTimeout(typeWrite,Math.random()*200+50);
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
    section#about .info .conct
  `,
  { interval: 100 }
);

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
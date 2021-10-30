const texts = ['HTML','Tailwind Css','JavaScript','React Js','django','Bootstrap','jQuery'];
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








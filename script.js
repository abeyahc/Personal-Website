// hidden fade thing
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// name animation
const text = document.querySelector('.name');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++){
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  const span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return; 
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

// mouse animation
let mouseCursor = document.querySelector('.cursor');
let hover = document.querySelectorAll('span');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

hover.forEach(span => {
  span.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow');
    span.classList.remove('hovered-name');
  })
  span.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow');
    span.classList.add('hovered-name');
  })
})
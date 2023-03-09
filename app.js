const observer = new IntersectionObserver((entries)  => {
    entries.forEach((entry) =>{
        console.log(entry)

        if(entry.isIntersecting){
            entry.target.classList.add('show');
             
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll(' .hidden');
hiddenElements.forEach((el) => observer.observe(el));

var textEl = document.getElementById('text')

var text = "I am a bird and a programmer, I have a unique talent, i build  nests and software , though I have to constantly deal with distractions  such as bugs ....."

var wordIndex = 0;
var textToDisplay = ""
var interval;

function nextWord () {
    textToDisplay += text.split(" ")[wordIndex] + " ";
    textEl.innerHTML = textToDisplay
    wordIndex ++;

    if(wordIndex === text.split(" ").length){
        clearInterval(interval);
        text.innerHTML = text
    }
}

interval = setInterval(nextWord, 200)

const squares = document.querySelector('.squares');
for (var i = 1; i < 230; i++) {
  const level = Math.floor(Math.random() * 3);  
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}


const  imageContainer = document.querySelector('.my-technlogies')
const imagePath = './assets/';

const imageNames =  ['nodejs.png', 'flask.png', 'git-logo.png', 'react.png', 'github.png', 'express.png', 'html.png', 'js.png', 'python.png', 'next.png', 'postman.png', 'css.png', 'typescript.png', 'sass.png', 'sql.jpg', 'redux.png', 'vscode.jpeg', 'dj.png'];

const images = imageNames.map(name =>{
    const img = document.createElement('img')
    
    img.src = `${imagePath}${name}`;
    img.alt = '';
    img.classList.add('logo')
    return img
})

images.forEach(img => imageContainer.appendChild(img))


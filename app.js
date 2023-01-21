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
var textToDisplay = "";
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
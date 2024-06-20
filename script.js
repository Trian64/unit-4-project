let stayButton = document.querySelector('#stay-home');
let results = document.querySelector('.results');
let goButton = document.querySelector('#go-out');
let gunButton = document.querySelector('#gun');
let swordButton = document.querySelector('#sword');
let axeButton = document.querySelector('#axe');
let noneButton = document.querySelector('#none');
let submitButton  = document.querySelector('.submit');
let questions = document.querySelector(".questions");
let kratos = document.querySelector('.kratos');
let zelda = document.querySelector('.zelda');
let master = document.querySelector('.master');
let tom = document.querySelector('.tom');
let masterImg = document.querySelector('#master-img');
let kratosImg = document.querySelector('#kratos-img');
let zeldaImg = document.querySelector('#zelda-img');
let tomImg = document.querySelector('#tom-img');
let questionFour = document.querySelector('.question-4')

stayButton.addEventListener('click', function(){
    goButton.style.opacity = ".5"
    stayButton.style.opacity = "1"
});

goButton.addEventListener('click', function(){
    goButton.style.opacity = "1"
    stayButton.style.opacity = ".5"
});

gunButton.addEventListener("click", function(){

    gunButton.style.opacity = "1"
    swordButton.style.opacity = ".5"
    axeButton.style.opacity = ".5"
    noneButton.style.opacity = ".5"
   
    master.style.display="block"
    masterImg.style.display="block"
    zelda.style.display="none"
    zeldaImg.style.display="none"
    kratos.style.display="none"
    kratosImg.style.display="none"
    tom.style.display="none"
    tomImg.style.display="none"
});
swordButton.addEventListener("click", function(){

    gunButton.style.opacity = ".5";
    swordButton.style.opacity = "1";
    axeButton.style.opacity = ".5";
    noneButton.style.opacity = ".5";
    zelda.style.display="block"
    zeldaImg.style.display="block"
    kratos.style.display="none"
    kratosImg.style.display="none"
    tom.style.display="none"
    tomImg.style.display="none"
    master.style.display="none"
    masterImg.style.display="none"
});
axeButton.addEventListener("click", function(){

    gunButton.style.opacity = ".5"
    swordButton.style.opacity = ".5"
    axeButton.style.opacity = "1"
    noneButton.style.opacity = ".5"
    kratos.style.display="block"
    kratosImg.style.display="block"
    zelda.style.display="none"
    zeldaImg.style.display="none"
    tom.style.display="none"
    tomImg.style.display="none"
    master.style.display="none"
    masterImg.style.display="none"
    
});
noneButton.addEventListener("click", function(){

    gunButton.style.opacity = ".5"
    swordButton.style.opacity = ".5"
    axeButton.style.opacity = ".5"
    noneButton.style.opacity = "1"
    tom.style.display="block"
    tomImg.style.display="block"
    zelda.style.display="none"
    zeldaImg.style.display="none"
    kratos.style.display="none"
    kratosImg.style.display="none"
    master.style.display="none"
    masterImg.style.display="none"
});

submitButton.addEventListener('click', function(){
 
    questions.remove()
    results.style.visibility="visible"
      
   
   
});
 
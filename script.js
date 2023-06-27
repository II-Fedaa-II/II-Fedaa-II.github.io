let animals = ['cat','dog','monkey','cow','horse']
let cars = ['bmw','ferrari','porsche','lambo','mercedes']
let pLanguages = ['python','cpp','csharp','java','kotlin']
let word = document.getElementById("word");
let select = document.getElementById("choosing")
let answer = document.getElementById("answer");
let checking = document.getElementById("checking");
let heart1 = document.getElementById("h1")
let heart2 = document.getElementById("h2")
let heart3 = document.getElementById("h3")
let star = document.getElementById("start");


word.disabled = true;
checking.disabled = true;
let randWord = "";
let i = 0;

function start(){
      word.focus();
      word.disabled = false;
      checking.disabled = false;
      switch(select.value){
        case "Animals":
            randWord = animals[Math.floor((Math.random() * (animals.length)))];
            break;
        case "Cars":
            randWord = cars[Math.floor((Math.random() * (cars.length)))];
            break;
        case "pLanguages":
            randWord = pLanguages[Math.floor((Math.random() * (pLanguages.length)))];
            break;
      }
      answer.innerHTML = null;
      a = 0;
      answer.style.color = "rgb(49, 0, 0)"
      answer.style.fontWeight = 'bolder'
      word.value = null;
      heart1.style.display = "block"
      heart2.style.display = "block"
      heart3.style.display = "block"
      console.log(randWord);
      i++;
      console.log(i)
      switch(i){
        case 0:
            star.style.backgroundColor = "grey";
            break;
        case 1:
                star.style.backgroundColor = "orange";
                break;    
        case 2:
            star.style.backgroundColor = "red";
            break;
        case 3:
            star.style.backgroundColor = "green";
            i = 0;
            break;
        
      }
}
console.log(randWord)
//generated (word)
let a = 0;
function check(){
    
    if(word.value == randWord){
        answer.innerHTML = "You got it right... Congrats!!!"
        a = 2;
        word.disabled = true;
        //checking.disabled = true;
    }
    else if(word.value != randWord && a<1){
        answer.innerHTML = "Wrong! Try Again";
       
    }
    else if(word.value != randWord && a<2){
        answer.innerHTML = "Wrong! Try Again"
       
    }
    else{
        answer.innerHTML = "You lost";
       
    }
    if(a == 0 && word.value != randWord){
        heart1.style.display = "none";
    }
    if(a == 1 && word.value != randWord){
        heart2.style.display = "none";
    }
    else if(a == 2 && word.value != randWord){
        heart3.style.display = "none";
    }
    if(a == 2){
        word.disabled = true;
        checking.disabled = true;
        answer.style.color = 'blue'
    }
    a++;
    console.log(a);
}

/*
if(word.value == randWord){
            answer.innerHTML = "You got it right!"
            i = 3;
         }
         if(word.value != randWord && i == 0)
         {
            answer.innerHTML = "Try again";
         }
         if(word.value != randWord && i == 1)
         {
            answer.innerHTML = "Try again";
         }
        if(word.value != randWord && i == 2){
            answer.innerHTML = "Oooops...You lost!";
            word.disabled = true;
         }
*/
/*switch(word.value){
    case "animals":
        randWord = animals[Math.floor((Math.random() * (animals.length)))];
        break;
    case "cars":
        randWord = cars[Math.floor((Math.random() * (cars.length)))];
        break;
    case "pLanguages":
        randWord = pLanguages[Math.floor((Math.random() * (pLanguages.length)))];
        break;
    default:
        console.log("wrong choice");
        chosen = prompt("Choose again");
        break;
    }*/
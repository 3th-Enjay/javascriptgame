
//interactivity
let chances = document.getElementById("chancesleft");
let result = document.getElementById("result");
//user guess
// let userGuess= document.getElementById("guess").value;

let answer = 10;
let numberOfGuesses = 0;
let no_of_chances= 3;
let guessedNums=[];

function play(){
  
    if
    (numberOfGuesses==no_of_chances){
        alert ("you have reached the maximum trials");
        document.getElementById("my_btn").disabled = true
    }

    let userGuess= document.getElementById("guess").value;

    if(userGuess > 20){
        result.textContent ="please add a number between 1 to 20";
        numberOfGuesses++;
        chances.textContent = "you have" + ' ' + (no_of_chances- numberOfGuesses) +' ' + "chances left";   

    }
    else{
        guessedNums.push(userGuess);    

        if(userGuess < answer){
         chances.textContent = "you have" + ' ' + (no_of_chances- numberOfGuesses) +' ' + "chances left";   
         result.textContent ="your guess is too low! ^_^"
         ;
         numberOfGuesses++
        }
        else if(userGuess > answer){
         result.textContent="your guess is too high ! (@-@)";
         chances.textContent= "you have" + " " + (no_of_chances-numberOfGuesses) + " " + "chances left";
         numberOfGuesses++
         
        }
        else if(userGuess == answer){
            alert("you have won");
            chances.textContent= "you have no chances left";
            document.getElementById("my_btn").disabled = true;
        }
        return;

        }
        }
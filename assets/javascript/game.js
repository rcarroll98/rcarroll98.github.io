 var words = [
    "javascript",
    "css", 
    "jquery",
    "bootstrap"
];

var currentWord = "";

var letters = [];

var empty = 0;

var wrong = [];

var guess = "";

var wins = 0;

var losses = 0;

var guessNumber = 12;

var output = [];



var imageWin = document.getElementById("image-win"); 


function startGame() {
    guessNumber = 12;

    currentWord = words[Math.floor(Math.random() * words.length)];

    letters = currentWord.split("");
    
    empty = letters.length;
    
    output = [];

    wrong = [];

    for (var i = 0; i < empty; i++) {
        output.push("_");
    }

    document.getElementById("remaining-guesses").innerHTML = guessNumber;

    document.getElementById("output").innerHTML = output.join(" ");

    document.getElementById("wrong").innerHTML = wrong.join(" ");
}

function matches(letter) {

    var matchingLetter = false;

    for (var i = 0; i < empty; i++) {

        if (currentWord[i] === letter) {

            matchingLetter = true;
        }
    }

    if (matchingLetter) {
        
        for (var g = 0; g < empty; g++) {
            
            if (currentWord[g] === letter) {

                output[g] = letter;
            }
        }
    }

    else {

        wrong.push(letter);

        guessNumber--;
    }
}



function gameOver() {

    document.getElementById("wrong").innerHTML = wrong.join(" ");
    
    document.getElementById("output").innerHTML = output.join(" ");

    document.getElementById("remaining-guesses").innerHTML = guessNumber;

    if (letters.toString() === output.toString()) {
        
        
        wins++;

        document.getElementById("wins").innerHTML = wins;

        startGame();


    }

    else if (guessNumber === 0) {

        losses++;

        document.getElementById("losses").innerHTML = losses;

        startGame();
    }
}

startGame();

document.onkeyup = function(event) {

    guess = String.fromCharCode(event.which).toLowerCase();

    matches(guess);

    gameOver();
};

if (wins < 1) {
    document.getElementById("image-win").src = "jquery.jpg";
}
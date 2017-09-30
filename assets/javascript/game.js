//Variable to hold possible inputs
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Array from which word will be randomly chosen
var wordBank=[
	"turtle", "shark", "otter", "seahorse", "lobster", 
	"crab", "whale", "dolphin", "eel", "octopus", 
	"barracuda", "conch", "coral", "elephant seal", 
	"squid", "jellyfish", "lamprey", "manatee"];
//Guess
var guess
//Variable to hold letters the user has already guessed
var lettersGuessed = [];
//Variable to hold word randomly selected
var selectedWord;
//Variable to hold the letters of the selectedWord split up
var selectedWordLetters = [];
//Variable to represent the "_" for each letter in a word
var placeholders =[];
// Number of wins
var wins;
// Number of losses
var losses;
//Variable to represent the remaining number of guesses a user has left
var guessesLeft = 9;

//--------------------This Works---------------------
//Generate random word 
var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];

function createWord(){
	return wordBank[Math.floor(Math.random() * wordBank.length)];
}

createWord(wordBank);
console.log("This is where gameWord will show up:");
console.log(gameWord);
//---------------------------------------------------
//Create underscore placeholders for the gameWord
//for (var i = 0; i < wordBank.length; i++) {
		//Inside loop


//Recognize user input 
//document.onkeyup = function (event)

//For loop to compare user input to randomWord selected

//If input matches letter from gameWord, replace placeholder with correct letter

//Else place userGuess in lettersGuessed and reduce geussesLeft by one

//If input userGuess is repeated, ignore

//If gameWord letters remaining = 0 alert "You win" and update wins by one
//	if (gameWord == 0 ) {alert("You win!")}

//If guessesLeft = 0 and gameWord placeholders still exist alert "You lost" and update losses by one
//	if(guessesLeft == 0) {alert("You lose!");
//	newGame();
	
//	}



//Populate letters already guessed, do not allow for repeats. Use prepend?
//for (var j = 0; j < gameWord.length; j++) {
//    if (gameWord.charAt(j) === guess)
//    }

//Letters guessed are the argument that will be passed into the function with if/else
//Use if/else for if-letter is in the word, else-letter should be placecd as a guess


//Populate number of wins

//Variable for possible guesses
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
//Variable to hold letters the user has already guessed
var wrongLetters = [];
//Array from which word will be randomly chosen
var wordBank=[
	"turtle", "shark", "otter", "seahorse", "lobster", 
	"crab", "whale", "dolphin", "eel", "octopus", 
	"barracuda", "conch", "coral", "elephant seal", 
	"squid", "jellyfish", "lamprey", "manatee"];
//Variable to hold word randomly selected
var selectedWord = "";
//Variable to represent the "_" for each letter in a word
var answerArray =[];
// Number of wins
var winNum;
// Number of losses
var lossNum;
//Variable to represent the remaining number of guesses a user has left
var guesses = 9;

//-------------------------------------------------------

//Generate random word 
var gameWord = wordBank[Math.floor(Math.random() * wordBank.length)];

function createWord(array){
	array[Math.floor(Math.random() * wordBank.length)];
	document.getElementById("gameWord")
}

//createWord(wordBank);
//console.log("This is where game word will show up:")
//console.log(gameWord);

//Allows me to see word is actually selected:
//document.getElementById('createWord').innerHTML = word

//Generate corresponding dashes
    for (var i = 0; i < gameWord.Length; i++) {
        answerArray[i] += ["_"];
        document.getElementById('gameWord').innerHTML = "gameWord"
}

//Recognize user input 

//If input is correct what happens, if input is incorrect what happens

//(If/Else) Generate countdown for number of guesses remaining

//For loop to compare user input to randomWord selected


//Populate letters already guessed, do not allow for repeats. Use prepend?
//Letters guessed are the argument that will be passed into the function with if/else
//Use if/else for if-letter is in the word, else-letter should be placecd as a guess


//Populate number of wins


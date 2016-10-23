console.log("JS file is connected to HTML! Woo!")
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*
if (cardTwo === cardFour) {
	alert("You have found a match!");
} else {
	alert("Sorry, try again!")
}
*/

var gameBoard = document.getElementById("#game-board");

var createCards = function() {
	for (i = 0; i < 4; i++) {
		var card = document.createElement('div');
		card.className = 'card';
		gameBoard.appendChild(card);
	}
}

createCards();
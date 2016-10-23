var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

/*
if (cardTwo === cardFour) {
	alert("You have found a match!");
} else {
	alert("Sorry, try again!")
}
*/
var gameBoard = document.getElementById("#game-board");

var createCards = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
		cardElement.addEventListener('click', isTwoCards);
	};
};

var isMatch = function (cards) {
	if (cards[0] === cards[1]) {
	alert("You have found a match!");
	} else {
		alert("Sorry, try again!")
	};
};

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="king.png">';
	} else {
		this.innerHTML = '<img src="queen.png">';
	};
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	};
}
createCards();


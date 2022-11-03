function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
var playerMove;
playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// losowanie liczby od 1-3
var randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

// losowanie liczby od 11-19
var randomNumber;
randomNumber = Math.floor(Math.random() * 9 + 10);
printMessage('Wylosowana liczba to: ' + randomNumber);

//losowanuie
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
} else if (randomNumber == '2') {
	computerMove = 'papier';
} else if (randomNumber == '3') {
	computerMove = 'nożyce';
}
printMessage('Mój ruch: ' + computerMove);
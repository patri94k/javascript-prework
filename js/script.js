function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// losowanie liczby od 1-3

let randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

// losowanie liczby od 11-19
let randomNumber = Math.floor(Math.random() * 9 + 10);
printMessage('Wylosowana liczba to: ' + randomNumber);

//losowanie

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  let computerMove = 'kamień';
} else if (randomNumber == '2') {
	let computerMove = 'papier';
} else if (randomNumber == '3') {
	let computerMove = 'nożyce';
} else {
	let computerMove = 'nieznany ruch';
  }
printMessage('Mój ruch: ' + computerMove);

//add prompt
if ( equal ) {
} else {
}
if ( equal ) {
} else {
}
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  let playerMove = 'kamień';
} else if (playerInput == '2') {
	let playerMove = 'papier';
} else if (playerInput == '3') {
	let playerMove = 'nożyce';
} else {
	let playerMove = 'nieznany ruch';
  }
printMessage('Twój ruch: ' + playerMove);

//display result

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
	return 'papier';
  } else if (argMoveId == 3){
	return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
	printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
	printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
let playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

//zmienne guziki

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
} 

const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Guzik Kamień'); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik Papier'); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik Nożyce'); });

//finalne ćwiczenie
function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');
  } 
  
  var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	if (argMoveId == 1) {
	  return 'kamień';
	} else if (argMoveId == 2) {
	  return 'papier';
	} else if (argMoveId == 3){
	  return 'nożyce';
	} else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
	  return 'kamień';
	}
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
	  printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
	  printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	  printMessage('Wygrywasz!');
	} else if (argPlayerMove == argComputerMove) {
	  printMessage('Remis!');
	} else {
	  printMessage('Przegrywasz :(');
	}
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  let playerMove = argButtonName;
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

	var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  function getMoveName(argMoveId) {
	console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
	if (argMoveId == 1) {
	  return 'kamień';
	} else if (argMoveId == 2) {
	  return 'papier';
	} else if (argMoveId == 3){
	  return 'nożyce';
	} else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
	  return 'kamień';
	}
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
	  printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
	  printMessage('Wygrywasz!');
	} else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
	  printMessage('Wygrywasz!');
	} else if (argPlayerMove == argComputerMove) {
	  printMessage('Remis!');
	} else {
	  printMessage('Przegrywasz :(');
	}
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonTest.addEventListener('click', function(){
    buttonClicked('Test button')
});

// tu będą kolejne powiązania guzików z funkcją buttonClicked
// (każda z innym argumentem)



// FINAL VERSION

//BUTTON ROCK

function buttonClicked(argButtonName) {
}
const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Kamień'); }

//BUTTON PAPER

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Papier'); });

//BUTTON SCISSORS


function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
}
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Nożyce'); });


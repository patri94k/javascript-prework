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
} else if (randomNumber == '2') {
	computerMove = 'papier';
} else if (randomNumber == '3') {
	computerMove = 'nożyce';
} else {
	computerMove = 'nieznany ruch';
  }
printMessage('Mój ruch: ' + computerMove);

//add prompt
var playerInput, playerMove;
if ( equal ) {
} else {
}
if ( equal ) {
} else {
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier';
} else if (playerInput == '3') {
	playerMove = 'nożyce';
} else {
	playerMove = 'nieznany ruch';
  }
printMessage('Twój ruch: ' + playerMove);

//display result

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
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
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);

//zmienne guziki
var argButtonName, buttonTest;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
} 

buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Guzik Kamień'); });

buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik Papier'); });

buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik Nożyce'); });

//finalne ćwiczenie
function buttonClicked(argButtonName) {
	clearMessages();
	console.log(argButtonName + ' został kliknięty');
  } var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  /**
   * Describe this function...
   */
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
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  
  buttonTest = document.getElementById('button-test');
  buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
  
  buttonRock = document.getElementById('button-rock');
  buttonRock.addEventListener('click', function(){ buttonClicked('Guzik Kamień'); });
  
  buttonPaper = document.getElementById('button-paper');
  buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik Papier'); });
  
  buttonScissors = document.getElementById('button-scissors');
  buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik Nożyce'); });

  //ostateczna wersja

  var buttonTest, buttonPaper, buttonRock, buttonScissors

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
// tu będą kolejne linie kodu, w których do zmiennych będą przypisane elementy znalezione po id

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty");

    // tu znajdzie się cała dotychczasowa zawartość pliku js/script.js
    // czyli efekt ćwiczenia z poprzedniego submodułu
    // z drobną zmianą dot. zmiennej playerMove (wspomnieliśmy o tym powyżej)
	var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  /**
   * Describe this function...
   */
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
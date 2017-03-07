// @Matt - Reset game after win or tie.



/*** Tic Tac Toe Javascript ***/
var playerToken;
var computerToken;
var playerCells = [];
var computerCells = [];
var randomCell;
var availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var removeIndex;
var playerWins = 0;
var computerWins = 0;
var cell1Click = 0;
var cell2Click = 0;
var cell3Click = 0;
var cell4Click = 0;
var cell5Click = 0;
var cell6Click = 0;
var cell7Click = 0;
var cell8Click = 0;
var cell9Click = 0;
var totalMoves = 0;

function gameReset() {
  playerCells = [];
  computerCells = [];
  availableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  totalMoves = 0;
  cell1Click = 0;
  cell2Click = 0;
  cell3Click = 0;
  cell4Click = 0;
  cell5Click = 0;
  cell6Click = 0;
  cell7Click = 0;
  cell8Click = 0;
  cell9Click = 0;
  document.getElementById("cell-1").innerHTML = "&nbsp;";
  document.getElementById("cell-2").innerHTML = "&nbsp;";
  document.getElementById("cell-3").innerHTML = "&nbsp;";
  document.getElementById("cell-4").innerHTML = "&nbsp;";
  document.getElementById("cell-5").innerHTML = "&nbsp;";
  document.getElementById("cell-6").innerHTML = "&nbsp;";
  document.getElementById("cell-7").innerHTML = "&nbsp;";
  document.getElementById("cell-8").innerHTML = "&nbsp;";
  document.getElementById("cell-9").innerHTML = "&nbsp;";
  document.getElementById("gameResults").innerHTML = "";
  getPlayerToken();
}

/***** Function that checks if player has won after each play *****/
function checkPlayerWin() {
  if (playerCells.indexOf(1) !== -1 && playerCells.indexOf(2) !== -1 && playerCells.indexOf(3) !== -1 ||
      playerCells.indexOf(4) !== -1 && playerCells.indexOf(5) !== -1 && playerCells.indexOf(6) !== -1 ||
      playerCells.indexOf(7) !== -1 && playerCells.indexOf(8) !== -1 && playerCells.indexOf(9) !== -1 ||
      playerCells.indexOf(1) !== -1 && playerCells.indexOf(4) !== -1 && playerCells.indexOf(7) !== -1 ||
      playerCells.indexOf(2) !== -1 && playerCells.indexOf(5) !== -1 && playerCells.indexOf(8) !== -1 ||
      playerCells.indexOf(3) !== -1 && playerCells.indexOf(6) !== -1 && playerCells.indexOf(9) !== -1 ||
      playerCells.indexOf(1) !== -1 && playerCells.indexOf(5) !== -1 && playerCells.indexOf(9) !== -1 ||
      playerCells.indexOf(3) !== -1 && playerCells.indexOf(5) !== -1 && playerCells.indexOf(7) !== -1) {
        playerWins += 1;
        document.getElementById("playerScore").innerHTML = playerWins;
        document.getElementById("gameResults").innerHTML = "Player Wins!"
        window.setTimeout(gameReset, 2000);
        return true;
  }
  if (totalMoves === 9) {
    document.getElementById("gameResults").innerHTML = "It's a Draw!"
    window.setTimeout(gameReset, 2000);
  }
}

/***** Function that checks if computer has won after each play *****/

function checkComputerWin() {
  if (computerCells.indexOf(1) !== -1 && computerCells.indexOf(2) !== -1 && computerCells.indexOf(3) !== -1 ||
      computerCells.indexOf(4) !== -1 && computerCells.indexOf(5) !== -1 && computerCells.indexOf(6) !== -1 ||
      computerCells.indexOf(7) !== -1 && computerCells.indexOf(8) !== -1 && computerCells.indexOf(9) !== -1 ||
      computerCells.indexOf(1) !== -1 && computerCells.indexOf(4) !== -1 && computerCells.indexOf(7) !== -1 ||
      computerCells.indexOf(2) !== -1 && computerCells.indexOf(5) !== -1 && computerCells.indexOf(8) !== -1 ||
      computerCells.indexOf(3) !== -1 && computerCells.indexOf(6) !== -1 && computerCells.indexOf(9) !== -1 ||
      computerCells.indexOf(1) !== -1 && computerCells.indexOf(5) !== -1 && computerCells.indexOf(9) !== -1 ||
      computerCells.indexOf(3) !== -1 && computerCells.indexOf(5) !== -1 && computerCells.indexOf(7) !== -1) {
        computerWins += 1;
        document.getElementById("computerScore").innerHTML = computerWins;
        document.getElementById("gameResults").innerHTML = "Computer Wins!"
        window.setTimeout(gameReset, 2000);
  }
  if (totalMoves === 9) {
    document.getElementById("gameResults").innerHTML = "It's a Draw!"
    window.setTimeout(gameReset, 2000);
  }
}

/***** Function contains logic for how the computer determines where to play on its turn *****/
function computerTurn() {
  /***** Computer will play to win if it has 2 cells in a row *****/
  if (computerCells.indexOf(1) !== -1 && computerCells.indexOf(2) !== -1 && availableCells.indexOf(3) !== -1) {
    document.getElementById("cell-3").innerHTML = computerToken;
    computerCells.push(3);
    removeIndex = availableCells.indexOf(3);
    availableCells.splice(removeIndex, 1);
    cell3Click++;
    totalMoves++;
    checkComputerWin();
  } else if (computerCells.indexOf(2) !== -1 && computerCells.indexOf(3) !== -1 && availableCells.indexOf(1) !== -1) {
    document.getElementById("cell-1").innerHTML = computerToken;
    computerCells.push(1);
    removeIndex = availableCells.indexOf(1);
    availableCells.splice(removeIndex, 1);
    cell1Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(1) !== -1 && computerCells.indexOf(3) !== -1 && availableCells.indexOf(2) !== -1) {
    document.getElementById("cell-2").innerHTML = computerToken;
    computerCells.push(2);
    removeIndex = availableCells.indexOf(2);
    availableCells.splice(removeIndex, 1);
    cell2Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(4) !== -1 && computerCells.indexOf(5) !== -1 && availableCells.indexOf(6) !== -1) {
    document.getElementById("cell-6").innerHTML = computerToken;
    computerCells.push(6);
    removeIndex = availableCells.indexOf(6);
    availableCells.splice(removeIndex, 1);
    cell6Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(5) !== -1 && computerCells.indexOf(6) !== -1 && availableCells.indexOf(4) !== -1) {
    document.getElementById("cell-4").innerHTML = computerToken;
    computerCells.push(4);
    removeIndex = availableCells.indexOf(4);
    availableCells.splice(removeIndex, 1);
    cell4Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(4) !== -1 && computerCells.indexOf(6) !== -1 && availableCells.indexOf(5) !== -1) {
    document.getElementById("cell-5").innerHTML = computerToken;
    computerCells.push(5);
    removeIndex = availableCells.indexOf(5);
    availableCells.splice(removeIndex, 1);
    cell5Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(7) !== -1 && computerCells.indexOf(8) !== -1 && availableCells.indexOf(9) !== -1) {
    document.getElementById("cell-9").innerHTML = computerToken;
    computerCells.push(9);
    removeIndex = availableCells.indexOf(9);
    availableCells.splice(removeIndex, 1);
    cell9Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(8) !== -1 && computerCells.indexOf(9) !== -1 && availableCells.indexOf(7) !== -1) {
    document.getElementById("cell-7").innerHTML = computerToken;
    computerCells.push(7);
    removeIndex = availableCells.indexOf(7);
    availableCells.splice(removeIndex, 1);
    cell7Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(7) !== -1 && computerCells.indexOf(9) !== -1 && availableCells.indexOf(8) !== -1) {
    document.getElementById("cell-8").innerHTML = computerToken;
    computerCells.push(8);
    removeIndex = availableCells.indexOf(8);
    availableCells.splice(removeIndex, 1);
    cell8Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(1) !== -1 && computerCells.indexOf(4) !== -1 && availableCells.indexOf(7) !== -1) {
    document.getElementById("cell-7").innerHTML = computerToken;
    computerCells.push(7);
    removeIndex = availableCells.indexOf(7);
    availableCells.splice(removeIndex, 1);
    cell7Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(4) !== -1 && computerCells.indexOf(7) !== -1 && availableCells.indexOf(1) !== -1) {
    document.getElementById("cell-1").innerHTML = computerToken;
    computerCells.push(1);
    removeIndex = availableCells.indexOf(1);
    availableCells.splice(removeIndex, 1);
    cell1Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(1) !== -1 && computerCells.indexOf(7) !== -1 && availableCells.indexOf(4) !== -1) {
    document.getElementById("cell-4").innerHTML = computerToken;
    computerCells.push(4);
    removeIndex = availableCells.indexOf(4);
    availableCells.splice(removeIndex, 1);
    cell4Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(2) !== -1 && computerCells.indexOf(5) !== -1 && availableCells.indexOf(8) !== -1) {
    document.getElementById("cell-8").innerHTML = computerToken;
    computerCells.push(8);
    removeIndex = availableCells.indexOf(8);
    availableCells.splice(removeIndex, 1);
    cell8Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(5) !== -1 && computerCells.indexOf(8) !== -1 && availableCells.indexOf(2) !== -1) {
    document.getElementById("cell-2").innerHTML = computerToken;
    computerCells.push(2);
    removeIndex = availableCells.indexOf(2);
    availableCells.splice(removeIndex, 1);
    cell2Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(2) !== -1 && computerCells.indexOf(8) !== -1 && availableCells.indexOf(5) !== -1) {
    document.getElementById("cell-5").innerHTML = computerToken;
    computerCells.push(5);
    removeIndex = availableCells.indexOf(5);
    availableCells.splice(removeIndex, 1);
    cell5Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(3) !== -1 && computerCells.indexOf(6) !== -1 && availableCells.indexOf(9) !== -1) {
    document.getElementById("cell-9").innerHTML = computerToken;
    computerCells.push(9);
    removeIndex = availableCells.indexOf(9);
    availableCells.splice(removeIndex, 1);
    cell9Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(6) !== -1 && computerCells.indexOf(9) !== -1 && availableCells.indexOf(3) !== -1) {
    document.getElementById("cell-3").innerHTML = computerToken;
    computerCells.push(3);
    removeIndex = availableCells.indexOf(3);
    availableCells.splice(removeIndex, 1);
    cell3Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(3) !== -1 && computerCells.indexOf(9) !== -1 && availableCells.indexOf(6) !== -1) {
    document.getElementById("cell-6").innerHTML = computerToken;
    computerCells.push(6);
    removeIndex = availableCells.indexOf(6);
    availableCells.splice(removeIndex, 1);
    cell6Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(1) !== -1 && computerCells.indexOf(5) !== -1 && availableCells.indexOf(9) !== -1) {
    document.getElementById("cell-9").innerHTML = computerToken;
    computerCells.push(9);
    removeIndex = availableCells.indexOf(9);
    availableCells.splice(removeIndex, 1);
    cell9Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(5) !== -1 && computerCells.indexOf(9) !== -1 && availableCells.indexOf(1) !== -1) {
    document.getElementById("cell-1").innerHTML = computerToken;
    computerCells.push(1);
    removeIndex = availableCells.indexOf(1);
    availableCells.splice(removeIndex, 1);
    cell1Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(1) !== -1 && computerCells.indexOf(9) !== -1 && availableCells.indexOf(5) !== -1) {
    document.getElementById("cell-5").innerHTML = computerToken;
    computerCells.push(5);
    removeIndex = availableCells.indexOf(5);
    availableCells.splice(removeIndex, 1);
    cell5Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(3) !== -1 && computerCells.indexOf(5) !== -1 && availableCells.indexOf(7) !== -1) {
    document.getElementById("cell-7").innerHTML = computerToken;
    computerCells.push(7);
    removeIndex = availableCells.indexOf(7);
    availableCells.splice(removeIndex, 1);
    cell7Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(5) !== -1 && computerCells.indexOf(7) !== -1 && availableCells.indexOf(3) !== -1) {
    document.getElementById("cell-3").innerHTML = computerToken;
    computerCells.push(3);
    removeIndex = availableCells.indexOf(3);
    availableCells.splice(removeIndex, 1);
    cell3Click++;
    totalMoves++;
    checkComputerWin();
  }
  else if (computerCells.indexOf(3) !== -1 && computerCells.indexOf(7) !== -1 && availableCells.indexOf(5) !== -1) {
    document.getElementById("cell-5").innerHTML = computerToken;
    computerCells.push(5);
    removeIndex = availableCells.indexOf(5);
    availableCells.splice(removeIndex, 1);
    cell5Click++;
    totalMoves++;
    checkComputerWin();
  }
  /***** End of gamewinning plays *****/

/***** Computer will block if player has two cells in a row *****/
  else if (playerCells.indexOf(1) !== -1 && playerCells.indexOf(2) !== -1 && availableCells.indexOf(3) !== -1) {
      document.getElementById("cell-3").innerHTML = computerToken;
      computerCells.push(3);
      removeIndex = availableCells.indexOf(3);
      availableCells.splice(removeIndex, 1);
      cell3Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(2) !== -1 && playerCells.indexOf(3) !== -1 && availableCells.indexOf(1) !== -1) {
      document.getElementById("cell-1").innerHTML = computerToken;
      computerCells.push(1);
      removeIndex = availableCells.indexOf(1);
      availableCells.splice(removeIndex, 1);
      cell1Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(1) !== -1 && playerCells.indexOf(3) !== -1 && availableCells.indexOf(2) !== -1) {
      document.getElementById("cell-2").innerHTML = computerToken;
      computerCells.push(2);
      removeIndex = availableCells.indexOf(2);
      availableCells.splice(removeIndex, 1);
      cell2Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(1) !== -1 && playerCells.indexOf(4) !== -1 && availableCells.indexOf(7) !== -1) {
      document.getElementById("cell-7").innerHTML = computerToken;
      computerCells.push(7);
      removeIndex = availableCells.indexOf(7);
      availableCells.splice(removeIndex, 1);
      cell7Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(4) !== -1 && playerCells.indexOf(7) !== -1 && availableCells.indexOf(1) !== -1) {
      document.getElementById("cell-1").innerHTML = computerToken;
      computerCells.push(1);
      removeIndex = availableCells.indexOf(1);
      availableCells.splice(removeIndex, 1);
      cell1Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(1) !== -1 && playerCells.indexOf(7) !== -1 && availableCells.indexOf(4) !== -1) {
      document.getElementById("cell-4").innerHTML = computerToken;
      computerCells.push(4);
      removeIndex = availableCells.indexOf(4);
      availableCells.splice(removeIndex, 1);
      cell4Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(4) !== -1 && playerCells.indexOf(5) !== -1 && availableCells.indexOf(6) !== -1) {
      document.getElementById("cell-6").innerHTML = computerToken;
      computerCells.push(6);
      removeIndex = availableCells.indexOf(6);
      availableCells.splice(removeIndex, 1);
      cell6Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(5) !== -1 && playerCells.indexOf(6) !== -1 && availableCells.indexOf(4) !== -1) {
      document.getElementById("cell-4").innerHTML = computerToken;
      computerCells.push(4);
      removeIndex = availableCells.indexOf(4);
      availableCells.splice(removeIndex, 1);
      cell4Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(4) !== -1 && playerCells.indexOf(6) !== -1 && availableCells.indexOf(5) !== -1) {
      document.getElementById("cell-5").innerHTML = computerToken;
      computerCells.push(5);
      removeIndex = availableCells.indexOf(5);
      availableCells.splice(removeIndex, 1);
      cell5Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(7) !== -1 && playerCells.indexOf(8) !== -1 && availableCells.indexOf(9) !== -1) {
      document.getElementById("cell-9").innerHTML = computerToken;
      computerCells.push(9);
      removeIndex = availableCells.indexOf(9);
      availableCells.splice(removeIndex, 1);
      cell9Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(8) !== -1 && playerCells.indexOf(9) !== -1 && availableCells.indexOf(7) !== -1) {
      document.getElementById("cell-7").innerHTML = computerToken;
      computerCells.push(7);
      removeIndex = availableCells.indexOf(7);
      availableCells.splice(removeIndex, 1);
      cell7Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(7) !== -1 && playerCells.indexOf(9) !== -1 && availableCells.indexOf(8) !== -1) {
      document.getElementById("cell-8").innerHTML = computerToken;
      computerCells.push(8);
      removeIndex = availableCells.indexOf(8);
      availableCells.splice(removeIndex, 1);
      cell8Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(2) !== -1 && playerCells.indexOf(5) !== -1 && availableCells.indexOf(8) !== -1) {
      document.getElementById("cell-8").innerHTML = computerToken;
      computerCells.push(8);
      removeIndex = availableCells.indexOf(8);
      availableCells.splice(removeIndex, 1);
      cell8Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(5) !== -1 && playerCells.indexOf(8) !== -1 && availableCells.indexOf(2) !== -1) {
      document.getElementById("cell-2").innerHTML = computerToken;
      computerCells.push(2);
      removeIndex = availableCells.indexOf(2);
      availableCells.splice(removeIndex, 1);
      cell2Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(2) !== -1 && playerCells.indexOf(8) !== -1 && availableCells.indexOf(5) !== -1) {
      document.getElementById("cell-5").innerHTML = computerToken;
      computerCells.push(5);
      removeIndex = availableCells.indexOf(5);
      availableCells.splice(removeIndex, 1);
      cell5Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(3) !== -1 && playerCells.indexOf(6) !== -1 && availableCells.indexOf(9) !== -1) {
      document.getElementById("cell-9").innerHTML = computerToken;
      computerCells.push(9);
      removeIndex = availableCells.indexOf(9);
      availableCells.splice(removeIndex, 1);
      cell9Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(6) !== -1 && playerCells.indexOf(9) !== -1 && availableCells.indexOf(3) !== -1) {
      document.getElementById("cell-3").innerHTML = computerToken;
      computerCells.push(3);
      removeIndex = availableCells.indexOf(3);
      availableCells.splice(removeIndex, 1);
      cell3Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(3) !== -1 && playerCells.indexOf(9) !== -1 && availableCells.indexOf(6) !== -1) {
      document.getElementById("cell-6").innerHTML = computerToken;
      computerCells.push(6);
      removeIndex = availableCells.indexOf(6);
      availableCells.splice(removeIndex, 1);
      cell6Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(1) !== -1 && playerCells.indexOf(5) !== -1 && availableCells.indexOf(9) !== -1) {
      document.getElementById("cell-9").innerHTML = computerToken;
      computerCells.push(9);
      removeIndex = availableCells.indexOf(9);
      availableCells.splice(removeIndex, 1);
      cell9Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(5) !== -1 && playerCells.indexOf(9) !== -1 && availableCells.indexOf(1) !== -1) {
      document.getElementById("cell-1").innerHTML = computerToken;
      computerCells.push(1);
      removeIndex = availableCells.indexOf(1);
      availableCells.splice(removeIndex, 1);
      cell1Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(1) !== -1 && playerCells.indexOf(9) !== -1 && availableCells.indexOf(5) !== -1) {
      document.getElementById("cell-5").innerHTML = computerToken;
      computerCells.push(5);
      removeIndex = availableCells.indexOf(5);
      availableCells.splice(removeIndex, 1);
      cell5Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(3) !== -1 && playerCells.indexOf(5) !== -1 && availableCells.indexOf(7) !== -1) {
      document.getElementById("cell-7").innerHTML = computerToken;
      computerCells.push(7);
      removeIndex = availableCells.indexOf(7);
      availableCells.splice(removeIndex, 1);
      cell7Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(5) !== -1 && playerCells.indexOf(7) !== -1 && availableCells.indexOf(3) !== -1) {
      document.getElementById("cell-3").innerHTML = computerToken;
      computerCells.push(3);
      removeIndex = availableCells.indexOf(3);
      availableCells.splice(removeIndex, 1);
      cell3Click++;
      totalMoves++;
      checkComputerWin();
  } else if (playerCells.indexOf(3) !== -1 && playerCells.indexOf(7) !== -1 && availableCells.indexOf(5) !== -1) {
      document.getElementById("cell-5").innerHTML = computerToken;
      computerCells.push(5);
      removeIndex = availableCells.indexOf(5);
      availableCells.splice(removeIndex, 1);
      cell5Click++;
      totalMoves++;
      checkComputerWin();
  }

/***** End of computer defensive plays *****/

/***** If neither computer nor player has two cells in a row, computer will choose random cell to play *****/
    else {
      randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
      document.getElementById("cell-" + randomCell).innerHTML = computerToken;
      computerCells.push(randomCell);
      removeIndex = availableCells.indexOf(randomCell);
      availableCells.splice(removeIndex, 1);
      switch (randomCell) {
        case 1:
          cell1Click++;
          break;
        case 2:
          cell2Click++;
          break;
        case 3:
          cell3Click++;
          break;
        case 4:
          cell4Click++;
          break;
        case 5:
          cell5Click++;
          break;
        case 6:
          cell6Click++;
          break;
        case 7:
          cell7Click++;
          break;
        case 8:
          cell8Click++;
          break;
        case 9:
          cell9Click++;
          break;
      }
      totalMoves++;
      checkComputerWin();
    }

}



//Function asks player to choose their token and sets computer to the other token
function getPlayerToken() {
  var token = prompt("Do you want to be X or O?");
  if (token !== "X" && token !== "x" && token !== "O" && token !== "o") {
    token = prompt("Invalid choice. Please choose X or O!");
  }
  playerToken = token.toUpperCase();
  if (playerToken === "X") {
    computerToken = "O";
  } else {
    computerToken = "X";
  }

  if (computerToken === "X") {
    computerTurn();
  }
}


//Click handlers for player cell selection
$("#cell-1").click(function(){
  if (cell1Click === 0) {
    document.getElementById("cell-1").innerHTML = playerToken;
    playerCells.push(1);
    removeIndex = availableCells.indexOf(1);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell1Click++;

  }
});

$("#cell-2").click(function(){
  if (cell2Click === 0) {
    document.getElementById("cell-2").innerHTML = playerToken;
    playerCells.push(2);
    removeIndex = availableCells.indexOf(2);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell2Click++;
  }
});
$("#cell-3").click(function(){
  if (cell3Click === 0) {
    document.getElementById("cell-3").innerHTML = playerToken;
    playerCells.push(3);
    removeIndex = availableCells.indexOf(3);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell3Click++;
  }
});
$("#cell-4").click(function(){
  if (cell4Click === 0) {
    document.getElementById("cell-4").innerHTML = playerToken;
    playerCells.push(4);
    removeIndex = availableCells.indexOf(4);
    availableCells.splice(removeIndex, 1);
    totalMoves++
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell4Click++;
  }
});
$("#cell-5").click(function(){
  if (cell5Click === 0) {
    document.getElementById("cell-5").innerHTML = playerToken;
    playerCells.push(5);
    removeIndex = availableCells.indexOf(5);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell5Click++;
  }
});
$("#cell-6").click(function(){
  if (cell6Click === 0) {
    document.getElementById("cell-6").innerHTML = playerToken;
    playerCells.push(6);
    removeIndex = availableCells.indexOf(6);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell6Click++;
  }
});
$("#cell-7").click(function(){
  if (cell7Click === 0) {
    document.getElementById("cell-7").innerHTML = playerToken;
    playerCells.push(7);
    removeIndex = availableCells.indexOf(7);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell7Click++;
  }
});
$("#cell-8").click(function(){
  if (cell8Click === 0) {
    document.getElementById("cell-8").innerHTML = playerToken;
    playerCells.push(8);
    removeIndex = availableCells.indexOf(8);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell8Click++;
  }
});
$("#cell-9").click(function(){
  if (cell9Click === 0) {
    document.getElementById("cell-9").innerHTML = playerToken;
    playerCells.push(9);
    removeIndex = availableCells.indexOf(9);
    availableCells.splice(removeIndex, 1);
    totalMoves++;
    if (!checkPlayerWin()) {
      computerTurn();
    }
    cell9Click++;
  }
});

// Calls getPlayerToken function on page load to determine if player is X or O
$(document).ready(function(){
  getPlayerToken();
});

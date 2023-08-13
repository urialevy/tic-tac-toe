"use strict"
// factory function for players
function Player(name, marker) {
    this.name = name;
    this.marker = marker;

  }
  let player1 = new Player("Player 1", 'X');
  let player2 = new Player("Player 2", 'O');
  
const gameBoard = (() => {
    
    const gridItems = document.querySelectorAll('.gridItem')
    const form = document.querySelector('#topForm');
    const submitBtn = document.querySelector('#submitBtn')
    const player1Name = document.querySelector('#player1Name');
    const player2Name = document.querySelector('#player2Name');
    const toggleDisplay = () => {
    document.querySelector('#grid').style.visibility = 'hidden'

        }
    const addClick = () => {
        gridItems.forEach(square => {square.addEventListener('click', function(e) {
            e.preventDefault()
            playMove(square)
        })})
        
    }
    const playMove = (move) => {
        if (move.innerHTML == '') {
            addMarker(move)
        }
        
    }
    const setPlayerNames = () => {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        player1.name = player1Name.value == '' ? 'Player 1' : player1Name.value
        player2.name = player2Name.value == '' ? 'Player 2' : player2Name.value
        document.querySelector('#active').innerHTML = `<h2>${currentPlayer.name}'s turn </h2>`
        document.querySelector('#grid').style.visibility = 'visible'
        form.style.visibility='hidden'
      })
    }
    let currentPlayer = player1;
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
    const addMarker = (square) => {
        square.innerHTML = `${currentPlayer.marker}`
        game.reduceSpaces()
        game.checkWinningPosition(currentPlayer)
        switchPlayer()
        displayController.toggleActive(currentPlayer)
    }
    const switchPlayer = () =>{
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1;
    }
    const resetBoard = () => {
        gameBoard.gridItems.forEach(item => item.innerHTML = '')
        addClick()
        currentPlayer = player1;
        player1.name = '';
        player2.name = '';
        document.querySelector('#grid').style.visibility = 'hidden'
        form.style.visibility='visible';
        
    }

    return {
        addClick,
        addMarker,
        gridItems,
        currentPlayer,
        switchPlayer,
        setPlayerNames,
        toggleDisplay,
        resetBoard,
        playMove
    
    }
})();

const game = (() => {
    let remainingSpaces = 9
    const reduceSpaces =() => {
        remainingSpaces--
    }
    const winningPositions = [[0,1,2], [3,4,5], [6,7,8],[0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]]
    const checkWinningPosition = (player) =>{ 
        winningPositions.forEach(winningArray => winningArray.every(entry => gameBoard.gridItems[entry].innerHTML ==player.marker) ? winnerFound(player) : checkStalemate(remainingSpaces))}
    const winnerFound = (player) => {
        document.querySelector('#winner').innerHTML = `<h1>Winner - ${player.name}!</h1><button id='newGameBtn'>New game</button>`
        gameBoard.gridItems.forEach(square => square.innerHTML=`${player.marker}`)
        newGame()
        }
    const checkStalemate = (count) => {
        if (count < 1) {document.querySelector('#winner').innerHTML = `<h1>Tie!</h1></div><div><button id='newGameBtn'>New game</button></div>`
        newGame()
        }
}
const newGame =() => {
    document.querySelector('#newGameBtn').addEventListener('click', function(e) {
    e.preventDefault()
    displayController.resetAnnounce();
    gameBoard.resetBoard()
    remainingSpaces = 9;
    document.querySelector('#winner').innerHTML = ''
})}
    return {
        remainingSpaces,
        reduceSpaces,
        winningPositions,
        checkWinningPosition,
        winnerFound,
        newGame

    }

    
})()

const displayController = (() => {
    const activeAnnounce = document.querySelector('#active')
    const resetAnnounce = () => {
        activeAnnounce.innerHTML='';
    }
    const toggleActive = (player) => {
    activeAnnounce.innerHTML = `<h2>${player.name}'s turn</h2>`}
    return {
        toggleActive,
        resetAnnounce
    }
})()

gameBoard.addClick()
gameBoard.setPlayerNames()
gameBoard.toggleDisplay()
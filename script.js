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
        let vis = false
        vis == false ? document.querySelector('#grid').style.visibility = 'hidden' : document.querySelector('#grid').style.visibility = 'visible'
        vis == true? vis === false : vis === true;
        }
    const addClick = () => {
        gridItems.forEach(square => {
            square.addEventListener('click', function(e){
                e.preventDefault()
                if (square.innerHTML == '') {
                addMarker(square)
                }
            })
        })
    }
    const setPlayerNames = () => {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        player1.name = player1Name.value == '' ? 'Player 1' : player1Name.value
        player2.name = player2Name.value == '' ? 'Player 2' : player2Name.value
        document.querySelector('#active').innerHTML = `<h2>Active player: ${currentPlayer.name}. Click anywhere in the UI to start.</h2>`
        
        toggleDisplay()
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
    return {
        addClick,
        addMarker,
        gridItems,
        currentPlayer,
        switchPlayer,
        setPlayerNames,
        toggleDisplay
    
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
        document.querySelector('#active').innerHTML = ``;
        document.querySelector('#winner').innerHTML = `<div><h1>Winner - ${player.name}! Reload the page to start a new game.</h1></div><div><button>New game</button></div>`
        gameBoard.gridItems.forEach(item => item.innerHTML = '-')}
const checkStalemate = (count) => {if (count < 1) document.querySelector('#winner').innerHTML = `<h1>Tie! Reload the page to try again.</h1>`}
    return {
        remainingSpaces,
        reduceSpaces,
        winningPositions,
        checkWinningPosition,
        winnerFound,
    }

    
})()

const displayController = (() => {
    const activeAnnounce = document.querySelector('#active')
    const toggleActive = (player) => {
    activeAnnounce.innerHTML = `<h2>Active player: ${player.name}.</h2>`}
    return {
        toggleActive,
    }
})()

gameBoard.addClick()
gameBoard.setPlayerNames()
gameBoard.toggleDisplay()
"use strict"
// factory function for players
function Player(name, marker) {
    this.name = name;
    this.marker = marker;

  }
  const player1 = new Player("Player 1", 'X', );
  const player2 = new Player("Player 2", 'O', );

const gameBoard = (() => {
    const gridItems = document.querySelectorAll('.gridItem')
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
    let currentPlayer = player1;
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
    const addMarker = (square) => {
        square.innerHTML = `${currentPlayer.marker}`
        currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
        game.reduceSpaces()
        game.checkWinningPosition()
    }
    return {
        addClick,
        addMarker,
        gridItems,
        currentPlayer
    
    }
})();

const game = (() => {
    let remainingSpaces = 9
    let winner = false;

    const reduceSpaces =() => {
        remainingSpaces--
    }
    const winningPositions = [[0,1,2], [3,4,5], [6,7,8],[0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]]
    const checkWinningPosition = () => winningPositions.forEach(winningArray => winningArray.every(entry => gameBoard.gridItems[entry].innerHTML ==gameBoard.currentPlayer.marker) ? console.log('winner') : console.log('nothing yet'))
    return {
        remainingSpaces,
        reduceSpaces,
        winningPositions,
        checkWinningPosition
    }

    
})()

const displayController = (() => {
    const activeAnnounce = document.querySelector('#active')
    const toggleActive = (first, second) => {
    activeAnnounce.innerHTML = `<h2>Active player: ${gameBoard.currentPlayer.name}.</h2>`}
    
    return {
        toggleActive,
        
    }

})()

gameBoard.addClick()
"use strict"
// factory function for players
function Player(name, marker, active) {
    this.name = name;
    this.marker = marker;
    this.active = active;
    
  }
  
  const player1 = new Player("Player 1", 'X', true);
  const player2 = new Player("Player 2", 'O', false);
  


const gameBoard = (() => {
    const gridItems = document.querySelectorAll('.gridItem')
    console.log(gridItems)
    const addClick = () => {
        gridItems.forEach(square => {
            square.addEventListener('click', function(e){
                e.preventDefault()
                if (square.innerHTML == '') {
                addMarker(square)
                displayController.toggleActive(player1, player2)}
            })
        })
    }
    
    let board = [];
    for (let i = 0; i < 9; i++) {
        board.push('');
    }
    const addMarker = (square) => {
        player1.active? square.innerHTML = `X` : square.innerHTML = 'O';
        game.reduceSpaces()
    }
    return {
        addClick,
        addMarker
    }
})();

const game = (() => {
    let remainingSpaces = 9
    let winner = false;
    const reduceSpaces =() => {
        console.log(remainingSpaces)
    }
    return {
        remainingSpaces,
        reduceSpaces
    }
})()

const displayController = (() => {
    const activeAnnounce = document.querySelector('#active')
    const toggleActive = (first, second) => {
    first.active ? first.active = false : first.active = true
    second.active ? second.active = false : second.active = true
    activeAnnounce.innerHTML = `<h2>Active player: ${first.active ? first.name : second.name}.</h2>`}
    
    return {
        toggleActive,
        
    }

})()

gameBoard.addClick()
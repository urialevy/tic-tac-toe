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
                displayController.toggleActive(player1, player2)
            })
        })
    }
    return {
        addClick,
    }
})();

const displayController = (() => {
    const activeAnnounce = document.querySelector('#active')
    const toggleActive = (first, second) => {
    first.active ? first.active = false : first.active = true
    second.active ? second.active = false : second.active = true
    activeAnnounce.innerHTML = `<h2>Active player: ${first.active ? first.name : second.name}.</h2>`}
    toggleActive(player1, player2)
    return {
        activeAnnounce,
        toggleActive
    }

})()

gameBoard.addClick()
// factory function for players
function Player(name, symbol, active) {
    this.name = name;
    this.symbol = symbol;
    this.active = active;
    
  }
  
  const player1 = new Player("Player 1", 'X', true);
  const player2 = new Player("Player 2", 'O', false);
  console.log(player1, player2);
  
const toggleActive = (first, second) => {
    const activeAnnounce = document.getElementById('active')
    first.active ? first.active = false : first.active = true
    second.active ? second.active = false : second.active = true
    activeAnnounce.innerHTML = `<h2>Active player: ${first.active ? first.name : second.name}.</h2>`
}


  // module function example
  /*
  const moduleCalc = (() => {
    const add = (a,b) => a+b;
    return {
      a,b
    }
  })
  */
  
  const gameBoard = () => {};
  const displayController = () => {};
  

const player1 = new Player("Player 1", 20);
const player2 = new Player("Player 2", 10);
console.log(player1, player2);

// module function example
/*
const moduleCalc = (() => {
  const add = (a,b) => a+b;
  return {
    a,b
  }
})
*/

const gameBoard = () => {};
const displayController = () => {};

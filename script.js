// factory function for players
function Player(name, level, health) {
  this.name = name;
  this.level = level;
  this.health = level * 3;
}

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

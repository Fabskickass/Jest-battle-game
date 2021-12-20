const inquirer = require('inquirer')

const Player = require('./Player')
const Enemy = require('./Enemy')


function Game(){
this.roundNumber = 0
this.isPlayerTurn = false
this.enemies = [
        this.enemies.push(new Enemy('goblin', 'sword')),
        this.enemies.push(new Enemy('orc', 'baseball bat')),
        this.enemies.push(new Enemy('skeleton', 'axe')),
]
this.currentEnemy;
this.player
}

this.prototype.initializeGame() = function(){
    this.currentEnemy = this.enemies[0]
}
inquirer
.prompt({
  type: 'text',
  name: 'name',
  message: 'What is your name?',
})
  // destructure name from the prompt object
  .then(({ name }) => {
    this.player = new Player(name);

    // test the object creation
   this.startNewBattle()
  });

  Game.prototype.startNewBattle = function() {
    if (this.player.agility > this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }

    console.log('Your stats are as follows:');
console.table(this.player.getStats());
  };



module.exports = Game;
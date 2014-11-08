var TicTacToe = require("./ticTacToe")
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = new TicTacToe.Game(reader);

game.run(function(winner){
  reader.close();
})
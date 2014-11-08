var Board = require("./board")

function Game (reader){
  this.board = new Board();
  this.turn = "o";
  this.reader = reader;
}

Game.prototype.switchTurn = function(){
  this.turn = this.turn == "o" ? "x" : "o"
}

Game.prototype.promptMove = function(placeMark, closeReader){
  this.board.printBoard()
  var that = this
  this.reader.question("Make your move", function(str){
    var parsedArr = JSON.parse(str);
    if (placeMark.call(that.board, parsedArr, that.turn)){
      that.switchTurn();
    }
    that.run(closeReader)
  })
}


Game.prototype.run = function(closeReader){
  if (!this.board.isWon() && !this.board.isFull()){
    this.promptMove(this.board.placeMark, closeReader)
  } else if (this.board.isFull()){
    this.board.printBoard();
    console.log("Game is a tie!")
    closeReader();
  } else {
    this.board.printBoard();
    this.switchTurn();
    console.log("Winner is " + this.turn + "!")
    closeReader();
  }
}

module.exports = Game;

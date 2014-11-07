function Board(){
  this.rows = [[null, null, null],
               [null, null, null],
               [null, null, null]]
  
}


Board.prototype.isWon = function(){
  
}

Board.prototype.winner = function(){
  
}

Board.prototype.isEmpty = function(pos){
  return !this.rows[pos[0], pos[1]]
}

Board.prototype.placeMark = function(pos, mark){
  if (!isEmpty(pos)){
    console.log("Position not empty")
  } else {
    this.rows[pos[0], pos[1]] = mark
  }
}


Board.prototype.horizontalWon = function(){
  for (i = 0; i < rows.length; i ++){
    if (""+rows[i] == ["o", "o", "o"] || ""+rows[i] == ["x", "x", "x"]){
      return true
    }   
  }
}

module.exports = Board
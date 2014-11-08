Board.CIRCLES = ["o", "o", "o"];
Board.CROSSES = ["x", "x", "x"];
function Board (){
  this.rows = [[null, null, null],
               [null, null, null],
               [null, null, null]];
  
}


Board.prototype.isWon = function(){
  return !!this.winner();
};

Board.prototype.isTie = function(){
  return this.isFull() && !this.isWon();
}

Board.prototype.isFull = function(){
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      if (!this.rows[i][j]) {
        return false;
      }
    }
  }
  return true;
}

Board.prototype.winner = function(){
  return this.diagnalWon() || this.horizontalWon() || this.verticalWon();
};

Board.prototype.isEmpty = function(pos){
  return !this.rows[pos[0]][pos[1]];
};

Board.prototype.placeMark = function(pos, mark){
  if (!this.isEmpty(pos)){
    console.log("Position not empty");
    return false;
  } else {
    this.rows[pos[0]][pos[1]] = mark;
    return true;
  }
};


Board.prototype.printBoard = function(){
  for (var i = 0; i < 3; i++){
    console.log(this.rows[i])
  }
}

Board.prototype.verticalWon = function(){
  var tRows = [[],[],[]]
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      tRows[j][i] = this.rows[i][j];
    }
  }
  
  return this.arrWon(tRows);

};

Board.prototype.arrWon = function(rows){
  for (var i = 0; i < rows.length; i ++){
    if (""+rows[i] == ["o", "o", "o"]){
      return "o";
    } else if (""+rows[i] == ["x", "x", "x"]) {
      return "x";
    }
  }
  return null;
}

Board.prototype.horizontalWon = function(){
  return this.arrWon(this.rows);
};



Board.prototype.diagnalWon = function(){
  var diag1 = [this.rows[0][0], this.rows[1][1], this.rows[2][2]];
  var diag2 = [this.rows[0][2], this.rows[1][1], this.rows[2][0]];
  if ( '' + diag1 == Board.CIRCLES || '' + diag2 == Board.CIRCLES ){
    return "o";
  } else if ('' + diag1 == Board.CROSSES || '' + diag2 == Board.CROSSES){
    return "x";
  }
  return null;
};

module.exports = Board;

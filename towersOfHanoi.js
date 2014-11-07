Array.prototype.equals = function(otherArr){
  
}
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function HanoiGame(){
  this.stacks = [[3, 2, 1], [], []];
}

HanoiGame.prototype.isWon = function(){  
  return '' + this.stacks[1] == [3, 2, 1] || '' + this.stacks[2] == [3, 2, 1];
}

HanoiGame.prototype.isValidMove = function(startTowerIdx, endTowerIdx){
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];
  if (startTower.length === 0){
    return false;
  }
  if (endTower.length === 0){
    return true;
  }
  if (startTower[startTower.length - 1] > endTower[endTower.length - 1]){
    return false;
  }
  
  return true;
}

HanoiGame.prototype.move = function(startIdx, endIdx, completionCB){
  if(this.isValidMove(startIdx, endIdx)){
    this.stacks[endIdx].push(this.stacks[startIdx].pop())
    if(this.isWon()){
      completionCB();
    }
    return true; //why?
  }
  console.log("Invalid move");
  return false;
}

HanoiGame.prototype.print = function(){
  for(var i = 0; i < this.stacks.length; i++){
    console.log(JSON.stringify(this.stacks[i]));
  }
}

HanoiGame.prototype.promptMove = function(callback, completionCB){
  this.print()
  var that = this //why?
  reader.question("Where would you like to move? [start, end]", function(str){
    var parsedArr = JSON.parse(str);
    var start = parsedArr[0];
    var end = parsedArr[1];
    callback.call(that, start, end, completionCB);
    // callback.bind(that, start, end, completionCB);
    if(!that.isWon()){
      that.run(completionCB)
    }
  })
}

HanoiGame.prototype.run = function(completionCB){
  this.promptMove(this.move, completionCB);
}

var game = new HanoiGame();
game.run(function(){
  
  console.log("Game is over!, you won!");
  reader.close();
})
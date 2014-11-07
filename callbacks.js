function Clock () {

}

Clock.TICK = 5000;

Clock.prototype.printTime = function (time) {
  // Format the time in HH:MM:SS
  var timeString = this.hours + ":" + this.minutes + ":" + this.seconds;
  return timeString;
};

Clock.prototype.run = function () {
  this.startTime = new Date();
  this.seconds = this.startTime.getSeconds();
  this.minutes = this.startTime.getMinutes();
  this.hours = this.startTime.getHours();
  // 1. Set the currentTime.
  // 2. Call printTime.
  console.log(this.printTime());
  // 3. Schedule the tick interval.
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  // 1. Increment the currentTime.
  this.seconds += 5
  if (this.seconds >= 60){
    this.seconds = this.seconds % 60;
    this.minutes += 1;
  }
  if (this.minutes >= 60){
    this.minutes = this.minutes % 60;
    this.hours += 1;
  }
  if (this.hours >= 24){
    this.hours = 0;
  }
  // 2. Call printTime.
  console.log(this.printTime());
};

// clock = new Clock();
// clock.run();


//addNumber
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){

  if (numsLeft > 0){
    reader.question("Give me a number", function(str1){
      var num = parseInt(str1)
      sum += num
      console.log(sum)
      addNumbers(sum, numsLeft-1, completionCallback)
    }
  )
  } else {
    completionCallback(sum)
  }
}

// addNumbers(0, 3, function (sum)  {
//   console.log("Total Sum: " + sum);
//   reader.close()
// });

//absurdBubbleSort

function askIfLessThan (el1, el2, callback) {
  reader.question("Is" + el1 + "<" + el2 + "?", function(str){
    if (str === 'y'){
      callback(false);
    } else {
      callback(true);
    }
  })
}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps)
  } else {
    askIfLessThan(arr[i], arr[i + 1], function(swap){
      if (swap){
        var temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        madeAnySwaps = true;
        
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
    }
  )
    
  }
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfLessThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1, 5, 6], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });




//Function calls

//myBind


Function.prototype.myBind = function(context){
  var fn = this 
  return function(){
    fn.apply(context)
  }
}

//meow.myBind(cat)();






















function squareNum(num) {
  var squared = num * num;
  return squared;
  console.log('this should not show');
}


var two = squareNum(2);
console.log(two);
console.log('Squared Outside', squared);

var seven = squareNum(7);
console.log(seven);

var numbers = [2,7,9,15,156];
for( var i=0; i<numbers.length; i++) {
  let square = squareNum( numbers[i] );
  console.log(i, numbers[i], square);
}



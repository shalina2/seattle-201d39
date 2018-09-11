// JavaScript source code
var myBool = false;

// Comparison operators
// equals // strict and nonstrict
// greater than 
// less than
// greater than equal too
// less than equal too
// not equal too

var nonStrict = 1 == '1';

var strict = 1 === 1 // true
var strictString = "cAt" === "cat"; // true

var greaterThan = 10 > 5;
var lessThan = 5 < 10;

var greaterThanEqual = 10 >= 5

// if(condition){
//     //do the thing
// }

var myNumber = false;

var foo = 10;
var bar = 5
var result = foo > bar; // true

if (foo > bar) {
    console.log('this is true!');
}

// AND &&
if ((10 > 11) && (10 < 20)) {
    console.log('I am true');
}

// OR ||

if ((10 > 11) || (10 < 20)) {
    console.log('do the thing');
}

var color = prompt("Favorite color");

if (color.toLowerCase() === "red") {
    console.log('your favorite color is red')
} else if (color.toLowerCase() === "blue") {
    console.log('blue is cool')
} else if (color.toLowerCase() === "yellow") {
    console.log('yellow');
} else {
    console.log('the color you picked is not my favorite');
}

if (color === "red") {
    console.log('that is my favorite color');
} else {
    console.log('that is not my favorite color');
}
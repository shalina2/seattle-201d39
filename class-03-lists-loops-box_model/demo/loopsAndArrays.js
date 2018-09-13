// HElp Amanda take her shoes off

//1. What type shoes (laces, velcrow, buckle....)
//2. Are there shoes?
//3. Safety first! Sit down!
//4. Left ankle of left leg up on the right knee
//5. Pull pant leg up away from shoe
//6. Pinch both aglets
//7. Pull the aglet with enough force to undo the knot but not cause pain
//8. Release the Krrrrraken!
//9. Pull tongue away from top of foot
//10. Release the tongue
//11. Wrap your hand around the bottom of the shoe on the back
//12. Pull it off

// if(standing up){
//     // sit down
// }

// if(tied){
//     // untie
// }


// var color = prompt('what is your favorite color');

// if(condition){
//     // do the thing
// }

// if(color === 'red') // iif color is equal to in value and data 'red'
// {
//     // red is the best
// } else if(color === 'blue'){
//     // blue is pretty cool
// } else{
//     // your color is ok
// }

// switch(color){
//     case 'red': // is it red (it referring to color)
//         // do the code here 
//         console.log('it\'s red');
//         break;

//     case 'blue': // is it blue
//         console.log('it is blue!');
//         break;
//     default:
//         // everything else goes here
//         break;
// }


var myArray = [1,4,11,67,44,54];
var secondArray = [];
var thirdArray = new Array();

secondArray.push('Josie');
secondArray.push('Belle');

console.log(secondArray);
console.log(myArray);

var lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem)

myArray.push('mildred');
console.log(myArray);

console.log(myArray.length);

// loops:

// for loop
// run a for loop for as many times as you specify

//for(define a variable; time the loop will run; incriment variable){


//} // when the increment varaibe gets activated

// for(var i = 0; i < myArray.length; i--) // myArray.legnth is equal to 6
// {
//     // console.log('array index: ' + myArray[i])
// }

// for(var i = 0; i <= myArray.length -1; i++)
// {

// }

// while loop
// while(condition is met)
// {
        // do the thing
        // modify the condition
// }

var number =11;

while(number <= 10)
{
    console.log(number);
    number++
}
// do..while loop

 do{
    console.log(number);
} while(number <= 10)

var answer = prompt('what is your fav color');

number = 0;
while(number <= 10)
{
    if(answer === 'red'){
        break;
    }
}

// break - use this keyword to leave a loop without any consequences

//very easy challenge 
var a = 20;
var b = 10;
var c = a - b


console.log (`The difference between ${a} and ${b} is ${a-b}`);

// coding challenge Easy
let perName1 = "drew"
let perName2 = "frank"
let name1Length = perName1.length
let name2Length = perName2.length
let stringDifference = Math.abs(name1Length - name2Length)

if(name1Length > name2Length){
    console.log( `The name ${perName1} is longer than ${perName2} by ${stringDifference} characters.` ) 
} else if( name2Length > name1Length ){
    console.log( `The name ${perName2} is longer than ${perName1} by ${stringDifference} characters.` )
} else{
    console.log(`The name ${perName2} and ${perName1} are the same length.`)
}


// Medium - determine if user is yelling (all caps), whispering (lowercase), or speaking normally (neither)

// Configuration / Initialization
// This is where we set some default variables


// 1 - Get user input
//   1.a - Show the user some prompt
//   1.b - Store their result into variable (remember what they said so I can check it later)
let speech = prompt(" What's your name? ")

// 2 - Figure out how they're speaking
//   2.a - Check to see if they spoke in all caps, if so they are yelling

    if (speech === speech.toUpperCase()) {
        console.log( `${speech} why are you shouting? `) ;
     }
    
//   2.b - Check to see if they spoke in all lower, if so they are whispering
    else if (speech === speech.toLowerCase ()){
        console.log(` ${speech} why are you whispering?`)
    }

//   2.c - If they aren'y yelling or whispering at this point, then they must be speaking normaly
    else{
        console.log(`Hello ${speech} thank you for speaking normally.`)
}
// 3 - Show response
//   3.a - Print out "You're yelling" if they're yelling
//   3.b - Print out "You're whispering...."
//   3.c - Print out "You're speaking normally...."


// hard challenge-Create 4 math functions, one that adds, one that subtracts, one that multiplies, one that divides

//addition

function addition(x, y) {
  console.log(x + y);
}
addition(10, 5);

//subtraction

function subtraction(x, y) {
  console.log(x - y);
}
subtraction(30, 10);

//multiplication

function multiplication(x, y) {
  console.log(x * y);
}
multiplication(5, 10);

//division
function division(x, y) {
  console.log(x / y);
}
division(40, 2);

//VERY HARD CHALLENGE-CREATE A SIMPLE CALCULATOR. FIRST PROMPT FOR A NUMBER, THEN AN OPERATOR, THEN ANOTHER NUMBER.
//PROMPT FOR FIRST NUMBER
let firstNum = prompt(" Please pick your first number ")

//prompt for operator
let  operator = prompt(" Please Choose an operator (+, -, *, / ) ")

//prompt for second number
let secondNum = prompt(" Please pick your second number ")
let result;

if (operator === '+') {
    result = firstNum + secondNum;
}
else if (operator === '-') {
    result = firstNum - secondNum;
}
else if (operator === '*') {
    result = firstNum * secondNum;
}
else {
    result = firstNum / secondNum;
}

// display the result
console.log(`${firstNum} ${operator} ${secondNum} = ${result}`);
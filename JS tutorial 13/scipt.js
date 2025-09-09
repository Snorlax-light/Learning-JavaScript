//functions

/*
function sayHello(){
    console.log("Hello");
    console.log("World");
}

console.log(sayHello); // wrong call
sayHello(); //function call
console.log(" ");




// add functions
function add(num1 , num2){
    let sum = num1 + num2;
    console.log(sum);
}

// multipy functions
function multipy(num1 , num2){
    let product = num1 * num2;
    console.log(product);

}
// divide functions
function divide(num1 , num2){
    let quo = num1 / num2;
    console.log(quo);
}

// subtract functions
function subtract(num1 , num2){
    let diff = num1 - num2;
    console.log(diff);
}




// another ADD return keyword

function ADD(number1 , number2){
    return number1 + number2;
}

let sum = ADD(10 , 10);
console.log(sum);


function average(num1 , num2, num3){
    return (num1 + num2 + num3) / 3;
}

let ave = average(97, 92, 95);
console.log(ave);
console.log(" ");

// global variable
let x = 5;


function sayX(){
    console.log(x);
}

function addX(num){
    console.log(num + x);
}

sayX();
addX(5);
console.log("");


//local variable


function SayX(){
    let y = 12;
    console.log(y);
}

function AddX(num){
    console.log(num + y);
}

SayX();
AddX(5);
*/

//challenge

function summation(arrNum){
    let sum = 0;
    for(let i = 0; i < arrNum.length; i++){
        sum += arrNum[i];
    }
    return sum;
}

let total = summation([5, 3, 2, 1]);
console.log(total)
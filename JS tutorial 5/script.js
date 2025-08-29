// array of strings
let names = ["Alenere" , "David" , "Jaymar" , "Maye"];
//console.log(names.length);
//alert(names);

// array of numbers
let numbers = [3, 6.5, 9.35, 12.75 , 7, 2];

// array of mix data types
let mixed = ["Alenere" , 99 , "David" , true , 3.99];

// Empty array 
let dummy = [];


let cars = ["Yaris" , "innova"];
//console.log(cars.length);
//console.log(cars[0]);
cars[1] = "Sentra";
//console.log(cars[1]);
cars[cars.length] = "Sentra";
cars.push("Juke");
cars.unshift("Lancer");
//console.log(cars);


// adding in array
let num = [ 1, 2, 3, 4, 5];
num[5] = 6;
//console.log(num);


// delete arrays
let names1 = ["Alenere" , "David" , "Jaymar" , "Maye" , "Ace"];
names1.length = 4;
names1.pop();
names1.shift();
names1.slice(0, 2);

//console.log(names1);



//challenge

let Fname = [" David" , "Alenere", "Carl"];
let Lname = ["SDPT" , "Loren", "Luarez"];
let age = [22, 23, 24,];

let id = 2;

console.log(`Id : ${id}`);
console.log(`First Name: ${Fname[id]}`);
console.log(`First Name: ${Lname[id]}`);
console.log(`Age : ${age[id]}`);
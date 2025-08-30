//logical operators

let x = 12;
let y = "12";

/*
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);
*/

//comparison operators

/*
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
*/

// conditional statements/ if

let age = 0;

/*
if(age >= 18){
    console.log("Legal Age");
    console.log("You can Vote!");
};
console.log("Thank You!");
*/

//if-else
/*
if(age >= 18){
    console.log("Legal Age");
}
else{
    console.log("You are a Minor!");
}
console.log("Thank You!");

*/

/*
if(age >= 18){
    console.log("Legal Age");
}else if(age <= 0){
    console.log("Invalid!");
}else{
    console.log("You are a Minor!")
}
console.log("Thank You!");
*/

let grade = 93;

if(grade > 100){
    console.log("Invalid Grade!");
}else if(grade >= 98){
    console.log("With Highest Honor!");
}else if(grade >= 95){
    console.log("WIth High Honor!");
}else if(grade >= 90){
    console.log("With Honor!");
}else if(grade >= 75){
    console.log("Passed!");
}else{
    console.log("Failed!");
}
console.log("Thank You!");
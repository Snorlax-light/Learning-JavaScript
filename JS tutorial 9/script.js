// do while

/*
let j = 0;

while( i < 5){  
    console.log(j);
    i++;
}
*/

/*
let names = ["David" , "Alenere" , "Gibert" , "James"];
let i = 0;

while(names[i] !== undefined){
    console.log(names[i]);
    i++;
}
*/

/*
let names = ["David" , "Alenere" , "Gibert" , "James"];
let i = names.length-1;

while(names[i] !== undefined){
    console.log(names[i]);
    --i;
}
*/

/*

let names = ["David" , "Alenere" , "Gibert" , "James"];
let i = 0;

while(names[i] !== undefined){
    console.log(names[i]);
    i++;

    if(i === 1){
        break;
    }
}
*/

/*
let i = 0;

do{
    console.log("hello");
    i++;
}while(i < 5);

*/

//challenge

let arr = [5,5,5,5,5];
let sum = 0;
let i = 0;

while(arr[i]){
    sum += arr[i];
    i++;
}
console.log(sum);
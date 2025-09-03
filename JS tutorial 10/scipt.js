// for loop
//for(variable; condition; operation){}

/*
for(let i = 0; i < 5; i++){
    console.log(i,"Hello World");
}
*/

let people = ["David" , "Alenere" , "Gibert" , "James", "Jaymar"];

/*
for(let i = 0; i < people.length; i++){
    console.log(i, people[i]);
}
*/

/*
for(let i = people.length-1; i >= 0; i--){
    console.log(i, people[i]);
}
*/

/*
for(let i = 0; i < people.length; i++){
    console.log(i, people[i]);

    if(i === 1) break;
}
*/

/*

//for in loop
for(let i in people){
    console.log(`${parseInt(i)}. ${people}`); 
}

*/

/*
//for of loop

let i = 0;
for(let person of people){
    console.log(`${i}. ${person}`);
    i++;
}
*/

//challenge

let search = "Jaymar";
let isFound = false;

for(let i = 0; i < people.length; i++){
    if(people[i].toLowerCase() === search.toLowerCase()){
        isFound = true;
        console.log(`Found ${people[i]}`);
        break;
    }
}

//

if(!isFound){
    console.log("Not Found");
}

for(let person of people){
    if(person.toLowerCase() === search.toLowerCase()){
        isFound = true;
        console.log(`Found ${person}`);
        break;
    }
}

if(!isFound){
    console.log("Not Found");
}
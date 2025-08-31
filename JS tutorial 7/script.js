// logical operators &&, || ,  !

let age = 18;
let experience = 3;
let language = "C#";

//console.log(age >= 18 && experience > 1);
//console.log(age >= 18 && experience > 1 && language === "C++");

if(age >= 18 && experience > 1 && language === "C#"){
    console.log("You are qualified!");
}else{
    console.log("You are not qualified");
}


if(experience > 4 || language === "C++"){
    console.log("You are qualified!");
}else{
    console.log("You are not qualified");
}


let isTall = true;

if(!isTall){
    console.log("Wow Tall");
}else{
    console.log("Shmol");
}

// nested conditional statement

/*
let Age = 18;
let Experience = 3;

if(Age >= 18){

    if(Experience > 1){
        console.log("You are Qualified!");
    }else{
        console.log("You dont have enough Experience!");
    }

}else{
    console.log("You are a Minor");
}
*/

//challenge

// Registered and 18 above - Valid Voter
// Not Registered and 18 above - Register First
// Registered and 18 below - Invalid Voter
// Not Registered and 18 below - Non Voter

let Age = 17;
let isRegistered = true;


if(isRegistered && Age >= 18){

    console.log("Valid Voter!");

}else if(!isRegistered && Age >= 18){

    console.log("Register First");

}else if(isRegistered && Age < 18){

    console.log("Invalid Voter!");

}else if(!isRegistered && Age < 18){

    console.log("Non-Voter!");

}else{

    console.log("Error");
    
}
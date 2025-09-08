// json for in loop

let person = {

    firstName:"David",
    lastName:"SDPT",
    age: 22

}

for(let k in person){
    console.log(`${k}:${person[k]}`);
}   

//object keys
let keys = Object.keys(person);
let size = Object.keys(person).length;

for(let i = 0; i < keys.length; i++){
    console.log(person[keys[i]]);
}
console.log("");

//challenge
let grades = {
    Math: 94,
    Science: 97,
    Computer:93,
    Filipino:95,
    English:92
}

let average = 0;

for(let i in grades){
    console.log(`${i} : ${grades[i]}`);
    average += grades[i];
}

average /= Object.keys(grades).length;
console.log(`average : ${average}`);
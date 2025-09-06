// Javascript Json  key|value exmaple  {firstName: "David"};

/*
let person = {
    firstName: "David",
    lastName: "SDPT",
    age:22,
    bloodType: "O",
    gender:"M"
};

console.log(person);
*/

/*
let person = {
    firstName: "David",
    lastName: "SDPT",
    age:22,
    bloodType: "O",
    gender:"M",
    hobbies:["Coding", "Eating", "Sleeping"]
};

console.log(person);
*/

/*
//json can have nested json

let person = {
    firstName: "David",
    lastName: "SDPT",
    age:22,
    bloodType: "O",
    gender:"M",
    pets:{

        1:{
            name:"Mocha",
            type:"Cat",
            breed:"Siamese"
        },
        
        2:{
            name:"Rajesh",
            type:"Dog",
            breed:"Shihtzu"
        }
    }
};

console.log(person);
*/

/*
//json call, key surrended by [] or by period followed by a key, only works on string key

let person = {
    firstName: "David",
    lastName: "SDPT",
    age:22,
    bloodType: "O",
    gender:"M",
    hobbies:["Coding", "Eating", "Sleeping"]
};

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
*/


/*

// read array or access

let person = {
    firstName: "David",
    lastName: "SDPT",
    age:22,
    bloodType: "O",
    gender:"M",
    hobbies:["Coding", "Eating", "Sleeping"]
};

console.log(person["hobbies"] [2]);
console.log(person.hobbies[0]);

*/


/*
let person = {
    firstName: "David",
    lastName: "SDPT",
    pets:{

        1:{
            name:"Mocha",
            type:"Cat",
            breed:"Siamese"
        },
        
        2:{
            name:"Rajesh",
            type:"Dog",
            breed:"Shihtzu"
        }
    }
};

console.log(person["pets"] [1]["name"]);
console.log(person["pets"] [1]["type"]);

console.log(person.pets[2].name);
console.log(person.pets[2].type);
*/


/*
//write
let person = {
    firstName: "David",
    lastName: "SDPT",
    age:22,
    hobbies:["Coding", "Eating", "Sleeping"]
};
console.log(person);
console.log("Update to: ");

person.firstName = "Alenere";
person.lastName = "De Guzman";
person.age = 21;

//create
person.middleInitial = "F";
console.log(person);

// change hobby
person.hobbies[0] = "Playing";
console.log(person.hobbies[0]);

*/

/*
//Json stringify, convert json into string

let person = {
    firstName: "David",
    lastName: "SDPT",
    age:22,
    hobbies:["Coding", "Eating", "Sleeping"]
};
console.log(person, "converted to: ");

let strPerson = JSON.stringify(person);
console.log(strPerson);
*/

/*

//json parsing, string convert to json

let strPerson = `{"firstName":"David","lastName":"SDPT","age":22,"hobbies":["Coding","Eating","Sleeping"]}`;

let person = JSON.parse(strPerson);
console.log(person);

*/

/*
// Json array

let people = [
    {
        firstName:"David",
        lastName:"SDPT",
        age: 22
    },
    {
        firstName:"Alenere",
        lastName:"SDPT",
        age: 22
    },
    {
        firstName:"Jaymar",
        lastName:"Catapang",
        age: 21
    }
];

console.log(people[1]);
console.log(`${people[1].firstName} ${people[1].lastName}`);
*/

//challenge

let person = [
    {
        fName:"David",
        lName:"SDPT",
        Age: 22
    },
    {
        fName:"Alenere",
        lName:"SDPT",
        Age: 22
    },
    {
        fName:"Jaymar",
        lName:"Catapang",
        Age: 21
    }
];

for(let i = 0; i < person.length; i++){
    console.log(`First Name : ${person[i].fName}`);
    console.log(`Last Name  : ${person[i].lName}`);
    console.log(`Age        : ${person[i].Age}`);
    console.log("");
}

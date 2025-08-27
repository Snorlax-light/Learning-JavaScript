let word = "John"
let len = word.length;

//alert(len);

//alert(word[ word.length-1]);

//alert(word.toUpperCase());

//alert(word.toLowerCase());


let x = " Hello ";
//x = x.trimEnd();
//alert(x);

x = x.trimStart();
//alert(x);

let s = "I have a dog, my dog is cute ";
//s = s.replace("dog", "cat"); // key sensitive
//alert(s);

//s = s.replaceAll("dog", "cat");
//alert(s);


s = s.slice(2, 6);
//alert(s);

let sen = `'String' "Literals"`;
//alert(sen);

let firstName = "JOHN";
//alert(`Hi, ${firstName}. Welocme to Jollibee.`);

let num1= 5;
let num2 = 3;

//alert( `${num1} + ${num2} = ${num1 + num2}`);


let person1 = "Alrnere";
let person2 = "David";
let pronoun = "she";
let drink = "coffee";


alert(`
    ${person1}, the friendly neighbor, waved at
    ${person2} as ${pronoun} walked by 
    ${person2}'s house.  ${person2} smiled back and invited  ${person1}
    in for a cup of ${drink}. `
);
// document object model


let sHeading = document.getElementById("second-heading");
console.log(sHeading);

let e = document.querySelector("p");
console.log(e);

let allHeading = document.getElementsByTagName("p");
console.log(allHeading);

let everyContent = document.querySelectorAll("h1");
console.log(everyContent[0]);

let comment = document.getElementsByClassName("commeent");
console.log(comment);

let firstTitle = document.querySelector("#first-title");
firstTitle.innerHTML = "SDPT";

let description = document.querySelectorAll(".desc");
description[0].innerHTML = "This is all a description";
description[1].innerHTML = "This is all a description";



// input type

let textinput = document.querySelector("#txtfirstname");
textinput.placeholder = "First Name";


let link = document.querySelector("#example-link");
link.href = "https://www.youtube.com";
link.target = "_blank";
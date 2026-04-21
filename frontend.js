"use strict";
//access the html elemnets
const heading = document.getElementById("heading");
const button = document.getElementById("btn");
//define ts -or type
let msg = "hello students";
heading.textContent = msg;
//event
button?.addEventListener("click", () => {
    heading.textContent = "Button is clicked";
});

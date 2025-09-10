// // Ways to select nodes in the DOM

// // 1. By Tag Name
// let heading = document.getElementsByTagName("h1");
// // HTML Collection Array
// console.log(heading[0]);

// // 2 By Id
// let para = document.getElementById("a");
// console.log(para);
// // Single value

// // 3. By using class
// let val = document.getElementsByClassName("b");
// // HTML Collection Array
// console.log(val[1]);

// // 4. By using querySelector
// let vals = document.querySelector(".b");
// // Single first  Value
// console.log(vals);

// // 5. By using querySelectorAll
// let valsAll = document.querySelectorAll(".b");
// // Node List Array
// console.log(valsAll[0]);

// Read & write Operations
let val = document.querySelector("h2");
console.log(val.textContent);

val.textContent = "Written by JS";

// Classes Add / remove and toggle
val.classList.add("js");
console.log(val);
val.classList.remove("c");
val.classList.toggle("d");

// Styles
val.style.backgroundColor = "red";

// Create elements;
let newElement = document.createElement("ul");
for (let i = 1; i < 4; i++) {}
let li = document.createElement("li");
li.textContent = `Item i`;
newElement.appendChild(li);

document.body.appendChild(newElement);
let para = document.querySelector(".f");
let input = document.querySelector("input");

let submit = document.querySelector("button");
submit.addEventListener("click", () => {
  para.textContent = input.value;
  para.classList.toggle("d");
});

let para1 = document.getElementById("a");

input.addEventListener("change", () => {
  para1.textContent = input.value;
});

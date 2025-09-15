// // Types of Declaration for varibles
// console.log(a);
// // Hoisting
// var a = 10; // Global Scope

// console.log(a);

// // Es6
// // Let const
// // console.log(b);
// // Temporal dead Zone(tdz)

// let b = 20; //block scope
// b = 30;
// console.log(b);

// const c = 20; //block scope
// // c = 40;
// console.log(c);

// Functions
// 1.Named function
// syntax
// function functionName(){
// code
// }

// printValues();

// function printValues() {
//   console.log("hello");
//   console.log("world");
//   console.log("asd");
// }

// 2. Function expression
// let printNumber = function () {
//   console.log("Function Expression");

//   console.log("asdf");
//   console.log("hello");
//   console.log("world");
//   console.log("asd");
// };

// printNumber();

// 3.Arrow function (ES6)
let printNumber = () => {
  console.log("Arrow Function ");

  console.log("asdf");
  console.log("hello");
  console.log("world");
  console.log("asd");
};

// printNumber();

// 4. 5.Immediately invoked function Expression IIFE / Callback
(() => {
  console.log("iife");
})();

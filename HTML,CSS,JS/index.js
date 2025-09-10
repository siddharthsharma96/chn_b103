// // console.log(a);
// // // Hoisting
// // var a = "assaas";
// // console.log(a);

// // // console.log(b);
// // // TDZ Temporal Dead Zone
// // // ES6
// // let b = 10;
// // b = 30;
// // // Block Scope
// // console.log(b);

// // const d = 20;
// // d = 40;
// // console.log(d);

// // as();
// // console.log(as);

// // 1. Named Function
// // function as() {
// //   console.log("Hello World");
// //   console.log("Hello World1");
// //   console.log("Hello World2");
// //   console.log("Hello World3");
// // }

// // as();

// // //2. function Expression
// // const as1 = function () {
// //   console.log("Inside Function Expression");
// // };

// // as1();

// // // 3.Arrow Function
// // const as2 = () => {
// //   console.log("Arrow Function");
// // };

// // as2();

// // // 4.IIFE - Immediately Invoked Function Expression
// // // 5. Callback Function/Annonymous Function
// // (function () {
// //   console.log("IIFE Function");
// // })();

// let sum = (parameter1, parameter2) => {
//   let a = parameter1;
//   let b = parameter2;
//   console.log(
//     ` paramter1 is ${parameter1} parameter 2 is ${parameter2} sum is ${
//       parameter1 + parameter2
//     }`
//   );
// };

// sum(2, 3);

// sum(5, 8);
// sum(23, 89);
// sum(45, 89);
// sum(98, 100);

// console.log("fsdsfd" + "ghfxfgx");

// // Array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // arr.push(23);
// // arr.pop();
// // arr.shift();
// // arr.unshift(23);
// // let a = arr.length;
// console.log(arr);

// // for loop

// // for(intitalization; condition; incerementation/decrement){
// //     // code
// // }

// for (let i = 0; i < arr.length; i++) {
//   // arr[i] = arr[i] * 2;
//   console.log(arr[i]);
// }

// console.log(arr);

// let newArr = arr.map((value, index) => {
//   console.log(value, index);
//   return value * 2;
//   console.log("heeloo");
// });

// console.log(newArr, arr);

// // // Filter Truthly values

// // const evenArr = arr.filter((aa, index) => {
// //   console.log(aa, index);

// //   return aa % 2 == 1;
// // });

// // console.log(evenArr);

// // // Reduce Single value

// const sumArr = arr.reduce((acc, Val, index) => {
//   console.log(index, acc, Val);
//   acc = acc + Val;
//   return acc;
// }, 100);

// console.log(sumArr);
// let a = [1, 2, 3];
// let b = [1, 2, 3];

// console.log([] == []);
// console.log(a[0] == b[0]);

// console.log(2 === "2");
// // == vs ===

// // objects
// let obj = {
//   val: 20,
//   as: 89,
//   name: "sdfsdf",
//   newObj: {
//     name: "newObj",
//     value: 10,
//   },
// };

// console.log(obj.newObj);

// const aa = [
//   {
//     name: "sdfsd",
//     age: 20,
//   },
//   {
//     name: "sdfsd",
//     age: 23,
//   },
//   {
//     name: "sdfsd",
//     age: 25,
//   },
// ];

// console.log(aa[2].age);

// if else if else

let marks = 93;

if (marks > 80) {
  if (marks > 90) {
    console.log("Laptop");
  }
  console.log("puiui");
} else if (marks > 60) {
  console.log("Phone");
} else if (marks > 40) {
  console.log("Party");
} else {
  console.log("Nothing marks too low");
}

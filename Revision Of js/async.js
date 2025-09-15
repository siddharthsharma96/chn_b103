let a = () => {
  console.log("inside setTimeout");
};
setTimeout(a, 0);

// callback hell

// setTimeout(() => {
//   console.log("timer 1");
//   setTimeout(() => {
//     console.log("timer 2");
//     setTimeout(() => {
//       console.log("timer 3");
//       setTimeout(() => {
//         console.log("timer 4");
//         setTimeout(() => {
//           console.log("timer 5");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

console.log("Line 1");
console.log("Line 2");

// promises
// State
// Pending
// Resolve/fulfilled
// rejected

const mypromise = new Promise((resolve, reject) => {
  let promiseDone = false;
  if (promiseDone == true) {
    resolve(
      "You have fullfiled or completed your promise so I will give you a party"
    );
  } else {
    reject("You have not completed the promise ");
  }
});
//1. .then and .catch
// Error handling by default

mypromise
  .then((msg) => {
    console.log("inside .then");
    console.log(msg);
  })
  .catch((err) => {
    console.log("inside .catch");
    console.log(err);
  });

//2. Async and await
const func = async () => {
  try {
    console.log("first try will run");
    const msg = await mypromise;
    console.log(msg);
  } catch (a) {
    console.log(a);
    console.log("Inside catch");
  }
};

func();

const fetchApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

fetchApi();

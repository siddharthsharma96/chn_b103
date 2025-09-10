// setTimeout(() => {
//   console.log("hello World inside");
// }, 0);
// console.log("Hello world");
// console.log("Hello world 1");
// console.log("Hello world 2");

// // Callback Hell
// // nested function
// setTimeout(() => {
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//       setTimeout(() => {
//         console.log("Step 4");
//       }, 3000);
//     }, 4000);
//   }, 3000);
//   console.log("Step 1");
// }, 2000);

// // Promises
// // State
// // 1. pending
// // 2. Resolve
// // 3. Reject

// const myPromise = new Promise((res, rej) => {
//   let marks = 30;
//   if (marks > 50) {
//     res(10);
//   } else {
//     rej(20);
//   }
// });

// // .then and .catch
// // Error handling in built
// // Chaining proccess

// myPromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Async and await
// FUnction Async
// Inbuilt error handling we don't get
// Try and catch
// Try Resolve cases
// catch block Rejected cases

// const FetchPromise = async () => {
//   try {
//     const msg = await myPromise;
//     console.log(msg);
//   } catch (err) {
//     console.log("We got an error no isuue", err);
//   }
// };

// FetchPromise();

const asd = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    const data = await response.json();
    const tableBody = document.getElementById("a");
    data.forEach((dataa) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${dataa.id}</td>
      <td>${dataa.name}</td>
      <td>${dataa.email}</td>`;
      tableBody.appendChild(row);
    });
  } catch (err) {
    console.log("Error is 💥", err);
  }
};

asd();

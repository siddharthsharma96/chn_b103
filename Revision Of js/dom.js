// // // Ways to select dom Nodes
// // // 1.using Tag selector
// // var heading = document.getElementsByTagName("h2");
// // console.log(heading[0]);
// // // HTMLcollection type array

// // // id
// // var b = document.getElementById("a");
// // console.log(b);

// // // class
// // var c = document.getElementsByClassName("b");
// // // return htmlCollection
// // console.log(c[1]);

// // // queryselector
// // var d = document.querySelector(".b");
// // // single value
// // console.log(d);

// // // QuerySelectorAll
// // let e = document.querySelectorAll(".b");
// // console.log(e[1]);
// // // nodelist Array

// // read and write operation
// var d = document.querySelector("p");
// console.log(d.textContent);
// d.textContent = "Written by js";
// console.log(d.textContent);

// // Classes add remove toggle
// // console.log(d);

// d.classList.add("asd");
// console.log(d);

// d.classList.remove("b");
// // console.log(d);

// d.classList.toggle("asd");

// d.style.backgroundColor = "red";

// // creata a tag

let aa = document.querySelector("button");
console.log(aa);

aa.addEventListener("click", () => {
  let newElement = document.createElement("ul"); //<ul></ul>
  let arr = ["Sid", "Rahul", "Satyam", "Adarsh"];
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li"); //<li></li>
    li.textContent = arr[i]; //<li>value</li>
    newElement.appendChild(li); //<ul><li>value</li></ul>
  }
  document.body.appendChild(newElement); //<body><ul><li>value</li></ul></body>
});

let form = document.querySelector("#myForm");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  console.log("Name value is ", name.value);
  console.log("Email value", email.value);
  name.value = "";
});

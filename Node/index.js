const fs = require("fs");
const http = require("http");
const replaceTemplates = require("./modules/replaceTemplates");
const url = require("url");

// // Blocking Code
// // Synchronous
// // 1.Read file : path , encryption
// const readData = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(readData);

// console.log("hello1");

// const read1 = fs.readFileSync("./txt/start.txt", "utf-8");
// console.log(read1);

// fs.writeFileSync(
//   `./txt/${read1}.txt`,
//   "Hello we are learning Node js Operation swrite now"
// );

// // non-Blocking Code/ Asynchronous way
// // 1. Path , 2. encryption 3.callback Function
// fs.readFile("./txt/append.txt", "utf-8", (err, data) => {
//   if (err) return console.log("check file", err);
//   console.log(data);
// });

// console.log("hello2");

// // 1. path,content, enrytpion,callback function(err)
// fs.writeFile("./txt/final.txt", "Using non blocking code", "utf-8", (err) => {
//   if (err) return console.log("💥Error");
//   console.log("data written Succesfully");
// });

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("check file", err);
//   console.log(data);
//   fs.writeFile(
//     `./txt/${data}.txt`,
//     "Written using nested function",
//     "utf-8",
//     (err) => {
//       if (err) return console.log("💥Error");
//       console.log("data written Succesfully");
//     }
//   );
// });

// Server
// 100-199:Provide some Info
// 200-299:Sucess
// 300-399:REdirection
// 400-499:Client error
// 500-599:Server error
const overview = fs.readFileSync("./templates/overview.html", "utf-8");
const product = fs.readFileSync("./templates/product.html", "utf-8");
const card = fs.readFileSync("./templates/card.html", "utf-8");
const productData = fs.readFileSync("./dev-data/index.json", "utf-8");

// Step 1. Server creation
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(query, pathname);
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "content-type": "text/html" });
    const cardsHtml = JSON.parse(productData)
      .map((product) => replaceTemplates(card, product))
      .join("");
    const output = overview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    const products = JSON.parse(productData)[query.ID];
    console.log(products);

    const output = replaceTemplates(product, products);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });

    res.end(productData);
  } else {
    res.end("Url  Page not found");
  }
});

// ?step 2. Start the server
// port no, Ip addres,Callback
const port_no = 9000;
server.listen(port_no, "127.0.0.1", () => {
  console.log("server started on port no ", port_no);
});

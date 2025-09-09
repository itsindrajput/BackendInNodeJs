const file = require("fs");

let a = 5;
let b = 7;

let sum = a + b;
let product = a * b;

let data = `Sum = ${sum} \nProduct = ${product}`;
console.log(data);

//Writing Data To Local File:
file.writeFile("output.txt", data, (err) => {
  if (err) throw err;
  console.log("Data Written To File.!");
});

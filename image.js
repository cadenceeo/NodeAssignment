// Core Node Modules
const fs = require("fs");

fs.readFile("./files/images/logo.img", "image/jpeg", (err, data) =>{
  if (err) throw err;
  console.log(data)
});


fs.readFileSync('/files/images/logo.img', {encoding: "image/jpeg"}, (err, data) =>{
  console.log(data);
});
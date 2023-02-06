//slice extracts a section of a string and returns it as
//a new string without modifying the original string

let firstname = "frank";
let lastname = "truckin";
let fullname = "frank truckin";
//firstname = fullname.slice(0, 5);
//lastname = fullname.slice(6);
console.log(firstname);
console.log(lastname);
firstname = fullname.slice(0,6)
lastname = fullname.slice(fullname.indexOf(" ") + 1);
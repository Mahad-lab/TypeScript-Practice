"use strict";
let Name = "Mahad";
console.log(`Hello ${Name}`);
console.log(`Name : ${Name}`);
console.log(`Name in uppercase : ${Name.toUpperCase()}`);
console.log(`Name in lowercase: ${Name.toLowerCase()}`);
console.log('Albert Einstein once said, "Only a life lived for others is a life worthwhile."');
let famous_person = "Albert Einstein";
let message = "Try not to become a man of success. Rather become a man of value.";
console.log(`${famous_person} once said, "${message}"`);
let FullName = "	Mahad Ahmed\n";
console.log(FullName);
console.log(FullName.trim());
console.log(4 + 4);
console.log(9 - 1);
console.log(2 * 4);
console.log(16 / 2);
let fav_number = 8;
console.log(`My favourite number is ${fav_number}`);
let Names = ["Ali", "Haris"];
console.log(`Name 1 : ${Names[0]}`);
console.log(`Name 2 : ${Names[1]}`);
Names.forEach((name) => {
  console.log(`Hello ${name}`);
});
let transports = ["Honda motercycle", "Honda motorcar"];
transports.forEach((name) => {
  console.log(`I would like to own a ${name}.`);
});
let guests = ["Ali", "Hamza", "Haris"];
guests.forEach((name) => {
  console.log(`Dear ${name}, I would like to our dinner.`);
});
guests[1] = "Talha";
guests.forEach((name) => {
  console.log(`Dear ${name}, I would like to our dinner.`);
});
//# sourceMappingURL=index.js.map

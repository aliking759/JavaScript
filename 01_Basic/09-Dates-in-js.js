//~~~~~~~~~~~~~~~~~~~~~~~~~   Dates in js   ~~~~~~~~~~~~~~
let myDate = new Date();

console.log(myDate); // output Sun Oct 22 2023 17:56:40 GMT-0700 (Pacific Daylight Time)
console.log(myDate.toDateString()); //output  Sun Oct 22 2023
console.log(myDate.getDate()); // output 22
console.log(myDate.toLocaleDateString()); // output 10/22/2023
console.log(myDate.toLocaleString()); // output 09-Dates-in-js.js:8 10/22/2023, 5:56:40 PM
console.log(typeof myDate); // output object

const createADate = new Date(2001, 3, 9);
console.log(createADate.toDateString());

let myTimeStamp = Date.now();
console.log(Math.floor(Date.now() / 1000)); // output 1698024259

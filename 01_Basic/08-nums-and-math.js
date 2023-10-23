const onnums = 200;
console.log(onnums); // output 200

const accountBalnace = new Number(1000);
console.log(accountBalnace.toString().length); // output 4
console.log(accountBalnace.toFixed(1)); // output 1000.0 jab b hum toFixed ka use krtay hain too jitna hamara dil karay hum us kay aagay 0 add kr saktay hain

const oneMore = 12345;
console.log(oneMore.toPrecision(3)); // output 1.23e+4 jab b hum toPrecision ka use krtay hain too jo

//~~~~~~~~~~~~~~~~~`````````````   Maths `~~~~~~~~~~~~~~~~~~~~~````

console.log(Math);
console.log(Math.abs(-4)); //abs krnay say ye -4 ko 4 may convert kr dayta hai
console.log(Math.round(55.4)); // round krnay say ye 55.4 ko 55 may convert kr dayta hai
console.log(Math.ceil(15.3)); // ceil krnay say ye 15.3 ko 16 may convert kr dayta hai
console.log(Math.floor(10.6)); // flor krnay say ye 10.6 ko 10 may convert kr dayta hai

console.log(Math.random()); // output 0.22344567889 es ki value 0.65432344566 asay hi aay gi or ap es ko jitni bar run karoo gay es ki value ghange hoti rahay gi

console.log(Math.random() * 3); // // output 1.22344567889 es ki value 2.65432344566 asay hi aay gi or ap es ko jitni bar run karoo gay es ki value ghange hoti rahay gi
console.log(Math.floor(Math.random() * 3));

const min = 10;
const mix = 20;
console.log(Math.floor(Math.random() * (mix - min + 1)) + min);
console.log(Math.floor(Math.random() * (mix - min + 1)) + min);
console.log(Math.floor(Math.random() * (mix - min + 1)) + min);

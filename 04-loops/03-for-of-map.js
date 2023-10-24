// for of loops
// for of loops apply in array

let Array = [1, 2, 3, 4, 5, 6, 7];

for (const name of Array) {
  console.log(name);
}

// for of loops apply in string

let string = "Hello world!";

for (const name of string) {
  console.log(name);
}

// Maps
let map = new Map();
map.set("PAK", "Pakistan");
map.set("F", "France");
map.set("Ph", "Phalastin");
console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

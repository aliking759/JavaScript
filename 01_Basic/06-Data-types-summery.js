//`````````````````` Primitive data types ````````````````````
//primitive data types  7 ka hotay hain
// 1.String 2. Number 3.Bigint 4.Null 5.symbal 6.boolean 7.Undefined

//```````````````````` Reference data types ```````````````````````

// Reference data types 3 tarha kay hotay hain
// 1.Array 2.Object 3. Functions
// 1. Array ye ik array hai
const heros = ["php hazrat aadam", "hazrat eesa", "hazrat muhammad "];

// 2. Object ye ik object hai

let myobj = {
  newname: "ali",
  age: 22,
};
// 1. Function ye ik funcyion hai

const myFunction = function () {
  console.log("hello world");
};
console.log(typeof myFunction); // output function

//******************** stack and heep ************************* */
// Stack  k andar  app ko  orignal ni balkay orignal ki ik  copy di jati hai jis kay anda ap changing kr saktay hain

// Heep ye orignal hi hota hai or is kay andar changing ni kr saktay

//  stack example
let myYoutubeName = "heroki467@gmail.com";
let anOtherName = myYoutubeName;
anOtherName = "aliheroo423@gmail.com";
console.log(myYoutubeName);
console.log(anOtherName);

// Heep
let UserOne = {
  email: "king@gmail.com",
  password: "azaz7878",
};

let UserTwo = UserOne;
UserTwo.email = "king@google.com";
console.log(UserTwo);

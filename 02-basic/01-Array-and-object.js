const createArray = [1, 2, 3, 4, 5, 6, 7];
const createArray2 = new Array(0, 1, 2, 3, 4, 5);
console.log(createArray[0]);

//       Object
const createObject = {
  name: "ali",
  age: 22,
  city: "lahore",
  email: "hero467@gmail.com",
  password: 12345678,
  isLoggedIn: false,
};

// console.log(createObject.email);
// console.log(createObject[email]);

const Object1 = { 1: "a", 2: "b", 3: "c" };
const Object2 = { 4: "d", 5: "e", 6: "f" };
//const Object3= {Object1,Object2}
const Object3 = Object.assign({}, Object1, Object2);

// i used ... this is a seapred oprater this used 90%

const Object4 = { ...Object1, ...Object2 };

console.log(Object4);

const course = {
  coursename: "javaScript",
  price: 1000,
  courseInsturctor: "aliking",
};
// course.courseInsturctor
const { courseInsturctor: Insturctor } = course;
console.log(Insturctor);

const navebar = ({ company }) => {};
navebar((company = "aliking"));

// filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNum.filter((num) => num > 4);
// console.log(newNum);

// const newNum = myNum.filter((num) => {
//   return num > 4;
// });
// console.log(newNum);

// map

// const newNum = myNum.map((num) => num + 10);
const newNum = myNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50);

console.log(newNum);

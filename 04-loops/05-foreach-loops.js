// Foreach loops
const coding = [
  "javaScript",
  "php",
  "laraval",
  "Next.js",
  "react.js",
  "telwind",
];

coding.forEach(function (val) {
  console.log(val);
});

coding.forEach((element) => {
  console.log(element);
});

function printMe(val) {
  console.log(val);
}
coding.forEach(printMe);

coding.forEach((val, index, arr) => {
  console.log(val, index, arr);
});

const myCoding = [
  {
    lunguageName: "laraval",
    lunguageFileName: "la",
  },

  {
    lunguageName: "Next.js",
    lunguageFileName: "ne",
  },

  {
    lunguageName: "php",
    lunguageFileName: "php",
  },
];

myCoding.forEach((item) => {
  console.log(item.lunguageName);
});

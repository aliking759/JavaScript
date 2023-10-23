//********************   Create A Simple Function     ************** */
function SimpleFunction() {
  console.log("a");
  console.log("l");
  console.log("i");
  console.log("");
  console.log("k");
  console.log("i");
  console.log("n");
  console.log("g");
}
SimpleFunction();

// function Function(number1, number2) {
//   console.log(number1 + number2);
// }

function Function(number1, number2) {
  // console.log(number1 + number2);
  return number1 + number2;
}

// console.log(Function);
const Result = Function(12, 35);
console.log("Result:", Result);

function LogedInUserMessage(Username) {
  if (!Username) {
    document.write("Please enter your name");
    return;
  }
  return `${Username} just Loged In`;
}
document.write(LogedInUserMessage());

// ... matlab sapred oprater function ka andar kasay kamm krta hai jab b app ko ik ya fir ik say zayada value chahiay hon too app ... sapred ka use kr saktay hain
function CalculateChartPrice(...num1) {
  return num1;
}

document.write(CalculateChartPrice(500, 1000, 2000, 3000, 4000, 5000, 6000));

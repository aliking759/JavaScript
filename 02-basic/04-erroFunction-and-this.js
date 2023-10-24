const user = {
  username: "Ali",
  email: "aliheroo423@gmail.com",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},Welcome to website`);
  },
};

user.welcomeMessage();
user.username = "waseem";

user.welcomeMessage();
console.log(this);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   Create A Erro Function   ~~~~~~~~~~~~~~~~~

// const erroFunction = (num1, num2) => {
//   return num1 + num2;
// };

// const erroFunction = (num1, num2) => num1 + num2;
// const erroFunction = (num1, num2) => num1 + num2;
const erroFunction = (num1, num2) => ({ username: "Ali" });

console.log(erroFunction(4, 8));

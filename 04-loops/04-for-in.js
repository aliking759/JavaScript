// For in loops
const myObject = {
  js: "javaScript",
  cpp: "c++",
  bt: "bootstrap",
  css: "case cading style sheets",
};
for (const key in myObject) {
  console.log(`${key} Shortcut is for ${myObject[key]}`);
}

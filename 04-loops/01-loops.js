// For loops}
for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("5 is my lucy number");
  }
  console.log(element);
}

// outer loops and inner loops

for (let name = 0; name <= 10; name++) {
  console.log(`Outer loop value ${name}`);
  for (let index = 0; index < 10; index++) {
    // console.log(`Inner loop value ${index}`);
    console.log(name + "*" + index + "=" + name * index);
  }
}

// Array pr  loops

// let myArray = ["AliKing", "Imran", "Bilal"];
// for (let name = 0; name < myArray.length; name++) {
//   const element = myArray[name];
//   //console.log(element);
// }

// break and continue

// break
for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    console.log("dedected 5");
    break;
  }
  console.log(`value of index is ${index}`);
}

// continue
for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    console.log("check post 5");
    continue;
  }
  console.log(`value of index is ${index}`);
}

// function square(x) {
//   return x * x;
// }
//
// console.log(square(5));
//
// // const squareArrow = (x) => {
// //   return x * x;
// // }
//
// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(10));

const nameFunction = (fullName) => {
  if (fullName) {
    let firstName = fullName.split(' ')[0]
    return firstName;
  }
}

const nameShort = (fullName) => fullName.split(' ')[0]

console.log(nameShort("John Doe"));
console.log(nameFunction("Andrew Accuardi"));

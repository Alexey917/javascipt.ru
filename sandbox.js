// function sum(num1) {
//   return function (num2) {
//     return num1 + num2;
//   };
// }

// let sum = function sum(num1) {
//   return num1 + sum(num2);
// };

function sum(num1) {
  function innerSum(num2) {
    return num1 + num2;
  }

  return innerSum;

  // if (num1) {
  //   return num1 + sum(num2);
  // } else {
  //   return;
  // }
}

console.log(sum(5)(1));

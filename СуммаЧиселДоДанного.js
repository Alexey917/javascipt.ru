function sumTo(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function sumToRec(num) {
  return num > 1 ? num + sumToRec(num - 1) : num;
}

// an = a1 + (n-1)d

function sumToArifmetic(num) {
  return (num * (num + 1)) / 2;
}

console.log(sumToRec(1));
console.log(sumToRec(2));
console.log(sumToRec(3));
console.log(sumToRec(4));
console.log(sumToRec(100));

console.log(sumToArifmetic(100));

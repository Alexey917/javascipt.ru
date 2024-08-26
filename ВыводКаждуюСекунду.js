// function printNumber(from, to) {}

// function printNumber(from, to) {
//   if (from <= to) {
//     console.log(from);
//     from++;
//   }
//   setTimeout(printNumber, 2000, from, to); // (*)
// }

//setTimeout(printNumber, 2000, 1, 10);


function printNumber(from, to) {
  setInterval(() => {
    if (from <= to) {
      console.log(from);
      from++;
    }
  }, 1000, 1, 10);
}

printNumber(1, 10)


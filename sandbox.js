// function printNumber(from, to) {}

let timerId = setTimeout(
  function printNumber(from, to) {
    if (from <= to) {
      console.log(from);
      from++;
    }
    timerId = setTimeout(printNumber, 2000, from, to); // (*)
  },
  2000,
  1,
  10
);

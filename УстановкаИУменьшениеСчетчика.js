function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);
  counter.decrease = () => --count;

  counter.count = 0;
  return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter.decrease());
console.log(counter.set(5));

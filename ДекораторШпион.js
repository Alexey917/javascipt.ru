function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  // let cache = new Map();
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

console.log(work);

for (let args of work.calls) {
  alert("call:" + args.join()); // "call:1,2", "call:4,5"
}

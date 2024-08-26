function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  // let cache = new Map();
  return function () {
    let key = hash(arguments);
    func.calls = hash(arguments);
    return func.calls;
  };
}

function hash(args) {
  return args[0] + ", " + args[1];
}

work = spy(work);

console.log(work(1, 2)); // 3
console.log(work(4, 5)); // 9

for (let args of work.calls) {
  alert("call:" + args.join()); // "call:1,2", "call:4,5"
}

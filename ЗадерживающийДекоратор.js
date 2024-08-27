function f(x) {
  console.log(x);
}

function delay(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

let f2000 = delay(f, 2000);

f2000("test", "Js");

function sum(a) {
  let currentSum = a;

  function f(b) {
    // Функция f будет использоваться в последующем вызове и снова возвращать себя столько раз, сколько будет необходимо.
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)(2)); // 6
alert(sum(6)(-1)(-2)(-3)); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15

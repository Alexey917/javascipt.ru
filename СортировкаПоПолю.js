let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" },
];

function byField(category) {
  return function (a, b) {
    return a[category] > b[category];
  };
}

console.log(users.sort(byField("age")));
// console.log(users.sort(byField("age")));

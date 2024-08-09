let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let toSalary = (obj) => {
  let maximum = 0;
  let nameMax = null;
  for (let [name, salary] of Object.entries(obj)) {
    if (maximum < salary) {
      maximum = salary;
      nameMax = name;
    }
  }
  return nameMax;
};

console.log(toSalary(salaries));

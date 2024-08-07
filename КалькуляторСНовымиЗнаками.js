function Calculator() {

  let operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }

  this.calculate = (str) => {
    for (key in operators) {
      if (str.includes(key)) {
        str = str.split(key)
        res = operators[key](+str[0], +str[1])
      }
    }

    return res
  }

  this.addMethod = ( (name, func) => {
    operators[name] = func
    
  })
}

let calc = new Calculator
console.log(calc.calculate('9 - 3'))
calc.addMethod('*', (a, b) => a * b)
console.log(calc.calculate('9 * 3'))
// let arr = [-15, 20, 100, -6, -9, 97, 32, 58, -77]

// function inversion(a, b) {
//  if (a > b) return 1 
//  else return 0 
// }



// console.log(arr.sort(inversion).reverse())

let arr = ['HTML', 'JavaScript', 'CSS']

let sorted = copySorted(arr)

function copySorted(arr) {
  return arr.slice().sort()
}

console.log(sorted)

console.log(arr)
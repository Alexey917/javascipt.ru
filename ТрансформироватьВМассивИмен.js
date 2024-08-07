let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];


let arr = users.map(item => item = item.name)

console.log(arr)

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];


// let arr = users.map((user) => {
//   user = {
//     id: user.id,
//     fullName: user.name + ' ' + user.surname
//   }
//   return user
// })

// console.log(arr)
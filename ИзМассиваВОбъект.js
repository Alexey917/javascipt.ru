let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function usersById(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item
    return obj
  }, {})
}

console.log(usersById(users))

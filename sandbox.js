let map = new Map()

map.set("name", "John")
map.set("age", 30)

let keys = map.keys()

console.log(Array.from(keys))

let arr = Array.from(keys)

arr.push("more")

console.log(arr)
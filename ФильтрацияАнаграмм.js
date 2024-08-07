function aclean(arr) {
  let map = new Map()
  let anagram
  for(el of arr) {
    
    anagram = el.split('').sort().join('').toLowerCase()
    
    map.set(anagram, el)

  }
  
  return Array.from(map.values())
}

let values = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]

console.log(aclean(values))
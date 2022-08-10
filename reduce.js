const people = [
  { id: "1", name: "Leigh", age: 35 },
  { id: "2", name: "Jenny", age: 30 },
  { id: "3", name: "Heather", age: 28 },
];

let result;

{
// count

result = people.reduce((acc, person) => {
  return acc + 1
}, 0)
// our goal here is to get the quantity of people in an array. on each iteration we increase acc once, as each callback function goes through each item

// conole log = 3
}

{
// sum ages

result = people.reduce((acc, person) => {
  return acc + person.age
}, 0)

// console log = 93
}

{
// array of names (map)

result = people.reduce((acc, person) => {
  return [ ...acc, person.name]
}, [])

// we are returning new array with all of the previous names (before spread operator) plus new name
}

{
// convert to id => person lookup (creating dictionary)
result = people.reduce((acc, person) => {
  return { ...acc, [person.id]: person}
}, {})

// ...acc - everything that was in accumulator plus [person.id] - value of the key with value of person himself
}


// max age

// min age

// find by name

// all over 18

// any over 18

// count occurrences

// flatten

// create reduce ourselves

// reduce with early abort


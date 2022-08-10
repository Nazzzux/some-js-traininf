const items = [
  { name: 'Rice', price: 5 },
  { name: 'Book', price: 20 },
  { name: 'Chicken', price: 10 },
  { name: 'Monitor', price: 100 },
]


/*
let totalPrice = 0;
//getting total price value with forEach method 
items.forEach(item => {
  totalPrice += item.price
})
*/



// accuulator and value - are basic parameters of reduce
// in this case we want to reduce an array of objects with prices and to reduce it to one single price

// accumulator - thing we are accumulating, reducing our value down to. 
/*
const totalPrice = items.reduce((total, item) => {
  return total + item.price
}, 0) // <--- here we're starting with total price value of zero

console.log(totalPrice)
*/

const people = [
  { name: 'Kyle', age: 26 }, // is person
  { name: 'John', age: 31 },  // is person
  { name: 'Sally', age: 42 }, // is person
  { name: 'Jill', age: 42 }, // is person
]

const result = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) { // check to see if we already have the value for that age
    groupedPeople[age] = [] // if we don't have that array - we are creating it
  } 
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log(result)

// we're starting with the empty object

// the result should be 
// {
//   42: ['Sally', 'Jill'],
//   26: ['Kyle'],
// }
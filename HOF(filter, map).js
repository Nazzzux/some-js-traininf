// Higher Order Function

const numbers = [2, 4, 8]

const addTwo = number => {
  return number + 2
}

// const result = numbers.map(addTwo)
// console.log(result);// [4, 6, 10]

const result = mapAppray(addTwo, numbers);
console.log(result);

// How to write your own method map.
// This is simply function that applies to an array

// mapArray( addTwo, numbers)

// we're defining the mapArray function
function mapAppray(transform, array) {
  let transormedArray = []; // creating variable to store the result
  
  for(let i = 0; i < array.length; i++){
    const current = array[i]//passing array[i] to const current
     //transform(current) // passing each value of current to the function 
    const transformed = transform(current) // storing the result of the function in the variable
    transormedArray.push(transformed)

    // Simplier of code above
    // transformedArray.push(transform(array[i]))
  }

  return transormedArray
}


// =============

const array = [1, 3, 5, 7, 20, 23];

function lessThanNine(num) {
  return num < 9
}

function betweenTwoAndEight(last) {
  return ( last < 8 )
}

// console.log(arrayFilter(lessThanNine, array))
console.log(arrayFilter(betweenTwoAndEight, array));

function arrayFilter(filterFunc, arr) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (filterFunc(arr[i])){
      console.log(arr[i]);
      filteredArray.push(arr[i])
    }
  }

  return filteredArray;
}
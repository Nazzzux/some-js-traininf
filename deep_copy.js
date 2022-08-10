/*
One line deep copy solution
But that doesn't work with Dates, functions, undefined, Infinity, RegExps, Maps, Sets,Blobs, FileLists, ImageDatas and other complex data types
*/

// const newScroewObj = JSON.parse(JSON.stringify(scoreObj));

/*
Here we turn an object into string (stringify), and then we parse that string into an object again 
*/


// ==============

const test = {
  past: [{day: 31}, {month: 12}, {year: 2020}],
  present: [{day: 1}, {month: 1}, {year: 2021}]
}


// ==============

const deepClone = (object) => {

  /* First thing we do - check if type of input we receive is not an object type and is it null (because type of null is object)
  
  simply said this if statement returns primitive if it is primitive
  */
  if (typeof(object) !== 'object' || object === null) {
    return object;
  }


  /*
  here we create a ternary statement that creates an empty array if array is passed in input. Otherwise - empty object.

  we've filtered primitives - so they will not be passed down here
  */
  const result = Array.isArray(object) ? [] : {};

  /*
  here we have for .. in (let the key in the object that we received) loop where we assign new value each time the loop goes through to equal the key value in the object
 */
  for (let key in object) {
    

    // recursive call of the function for any nested object. we are going to do the same. check whether nested value is primitive (return it in this case). then whether nested is array or an object (create new empty array or object)
    // eventually we return new object that is a deep clone of the input

    result[key] = deepclone(object[key])

  }

  return result;
}


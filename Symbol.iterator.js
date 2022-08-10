/*
const arr = [1, 2, 3, 4, 5]

for (let item of arr) {
  console.log(item) // 1 2 3 4 5
}

console.log('===================');

const str = '12345';

for (crt of str) {
  console.log(crt);  // 1 2 3 4 5
}

console.log('===================');
*/
const nums = {
  from: 0, 
  to: 10, 
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next(){
        if (this.current <= this.last) {
          return {
            done: false, 
            value: this.current++
          };
        } else {
          return {done: true};
        };
      };
    };
  };
};

/* 
next() {
  return {
    value: this.current++,
    done: this.current > this.last
  }
}
*/

for (let num of nums) {
  console.log(num);
}



class Stack {
  constructor(){
    this.items = []; // where to store the data
    this.count = 0; // to know where we are in the stack. Length
  }

  // Add elements to the top
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++ // increment the couunt for new value to occupy the next position and not overwrite item that has been added previously
    return this.count - 1 // returning the position of the last item added (initial position is zero, but cout will return one, so we return count minus one to match the right position)
  }

  // Return and remove top element in stack or undefined if stack is empty
  pop() {
    if (this.count === 0){
      return undefined
    }
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem
  }

  // Check top element in the stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1]
  }

  // check is the stack is empty
  isEmpty() {
    console.log(this.count === 0 ? 'The stack is empty' : 'The stack is not empty');
    return this.count === 0; // will return either true of false
  }

  // check the size of the stack
  size() {
    console.log((`${this.count} is in the stack`));
    return this.count
  }

  // print elements in the stack
  print() {
    let str = '';
    for (let i = 0; i < this.count; i++){
      str += this.items[i] + ' '
    } 
    return console.log(str);
  }

  // clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log('Stack is emptied');
    return this.items
  }
}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);
stack.push(300);

stack.print()

console.log(stack);

stack.pop();
stack.pop();

stack.print()
console.log(stack);
stack.size();
stack.isEmpty();
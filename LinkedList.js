// Structure of linked list

/* 

head (the first item)
[     |     ]
[100  |     ] --> [    | ] --> [    | ] --> [    | ] --> null
[data |next ] 


the end is called TAIL and references to null

item of linked list is called NODE
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    // default value. if the head is null - the list is empty. it has no beginnig.
    this.head = null;
    // keeping track of the size of linked list. this equalls zero by default
    this.size = 0;
  }

  // Insert the first Node
  insertFirst(data) {
    // if there is something at the head already, we want to push it further
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert the last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty - make head
    if (!this.head) { // or this.head === null
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = node;

    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {

    // if index is out of range
    if(index > 0 && index > this.size){
      return;
    }

    // if first index
    if (index === 0) {
      this.insertFirst(data, this.head)
    }

    const node = new Node(data);
    let current;
    let previous;

    // Set current to first
    current = this.head;
    let count = 0;

    // here we are making the room for the node
    while (count < index) {
      previous = current; // node before index
      count++
      current = current.next; // node after index
    }

    node.next = current;

    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++
      current = current.next;
    }
    return null
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return
    }

    let current = this.head;
    let previous;
    let count = 0;

    // removing the first
    if (index === 0) {
      this.head = current.next
    } else {
      while (count < index) {
        count++
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Prink list
  printListData(){
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)
ll.insertAt(500, 2)

// ll.printListData()
ll.getAt(7)
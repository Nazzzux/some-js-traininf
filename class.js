// ES6+

class Animal{
  constructor(options){
    this.name = options.name
    this.color = options.color
  }

  voice(){
    console.log(`Base voice from ${this.name}`);
  }
}

const dog = new Animal({name: 'Rex', color: 'white'})
console.log(dog);

dog.voice() // inherits voice() from parent Animal

class Cat extends Animal{ // extends - inherit from prototype class Animal
  // вызываем два конструктора - из класса Animal(как родттельского) и конструктор самого Cat
  constructor(options){
    super(options)  
      // здесь super используется как функция, вызывающая родительский конструктор и передаем в него нужные нам параметры. А дальше реализовываем частные случаи самого класса Cat
      this.hasTail = options.hasTail
      this.type = 'cat'

    voice() {
      super.voice() // вызываем этот метод из родительского класса
      console.log(this.name + ' says meow'); // переопределение метода

      // в начале будет вызов базового метода базового класса, а потом - частного случая
    }
  }
}

const cat = new Cat({name: 'Myrzik', color: '#000', hasTail: true})

//Examples
Object.prototype.print = function() {
  console.log('I am object', this);
}

const print = cat.print
console.log(print);


Array.prototype.mapAndLog = function() {
  console.log('Array to map', this);
  return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4].mapAndLog(x => x ** 2));

String.prototype.toTag = function(tagName) {
  return `<${tagName}>${this}</${tagName}>`
}

// console.log('eminem'.toTag('strong'));


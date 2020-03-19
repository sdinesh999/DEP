4.new with apply

// https://www.codewars.com/kata/53c7da8baf72924af8000405/train/javascript

In JavaScript we can create objects using the new operator.

For example, if you have this constructor function:
function Greeting(name) {
  this.name = name;
}

Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
  return "Bye " + this.name;
};


// solution



function construct(Greeting, ...arg) {

    return new Greeting(...arg);

}

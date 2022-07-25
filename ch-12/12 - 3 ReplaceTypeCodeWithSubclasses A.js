/* 

MOTIVATION

Software systems often need to represent different kinds of a 
similar thing. My first tool for handling this is some kind of 
type code field. Most of the time, such a type code is all I need. 
But there are a couple of situations where I could do with something more, 
and that something more are subclasses. There are two things 
that are particularly enticing about subclasses. First, they 
allow me to use polymorphism to handle conditional logic. I find 
thismost helpful when I have several functions that invoke 
different behavior depending on the value of the type code. 

class Employee…

  constructor(name, type){
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesman"].includes(arg))
      throw new Error(`Employee cannot be of type ${arg}`);
  }
  toString() {return `${this._name} (${this._type})`;}

*/

class Employee {
    constructor(name){
        this._name = name;
      }
    toString() {return `${this._name} (${this.type})`;}
}

class Engineer extends Employee {
    get type() {return "engineer";}
}

class Salesman extends Employee {
    get type() {return "salesman";}
}

class Manager extends Employee {
    get type() {return "manager";}
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer": return new Engineer(name);
        case "salesman": return new Salesman(name);
        case "manager": return new Manager(name);
        default: throw new Error(`Employee cannot be of type ${type}`);
    }
}

























  

  












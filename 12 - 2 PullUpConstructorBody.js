/* 

MOTIVATION

If I see subclass methods with common behavior, my first 
thought is to use Extract Function followed by Pull Up Method, 
which will move it nicely into the superclass. Constructors 
tangle that—because they have special rules about what can be 
done in what order, so I need a slightly different approach.

class Party {}
class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  // rest of class...
class Department extends Party {
  constructor(name, staff){
    super();
    this._name = name;
    this._staff = staff;
  }
  // rest of class...

*/

class Party {
    constructor(name) {
        this._name = name;
    }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  // rest of class...
}

class Department extends Party {
  constructor(name, staff){
    super(name);
    this._staff = staff;
  }
  // rest of class...
}






















  

  












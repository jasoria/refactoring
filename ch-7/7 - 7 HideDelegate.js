/* 

MOTIVATION

If I have some client code that calls a method defined 
on an object in a field of a server object, the client 
needs to know about this delegate object. If the delegate 
changes its interface, changes propagate to all the 
clients of the server that use the delegate. I can remove 
this dependency by placing a simple delegating method on 
the server that hides the delegate.


class Person…

  constructor(name) {
    this._name = name;
  }
  get name() {return this._name;}
  get department()    {return this._department;}
  set department(arg) {this._department = arg;}

class Department…

  get chargeCode()    {return this._chargeCode;}
  set chargeCode(arg) {this._chargeCode = arg;}
  get manager()    {return this._manager;}
  set manager(arg) {this._manager = arg;}

  client code…
  manager = aPerson.department.manager;

*/

class Person {
    constructor(name) {
        this._name = name;
      }
    get name() {return this._name;}
    get department()    {return this._department;}
    set department(arg) {this._department = arg;}
    get manager() {return this._department.manager;}
}


class Department {
    get chargeCode()    {return this._chargeCode;}
    set chargeCode(arg) {this._chargeCode = arg;}
    get manager()    {return this._manager;}
    set manager(arg) {this._manager = arg;}
}

// Client code
manager = aPerson.manager;









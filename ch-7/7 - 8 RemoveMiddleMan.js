/* 

MOTIVATION

In the motivation for Hide Delegate, I talked about the 
advantages of encapsulating the use of a delegated object. 
There is a price for this. Every time the client wants to 
use a new feature of the delegate, I have to add a simple 
delegating method to the server. After adding features for 
a while, I get irritated with all this forwarding. The 
server class is just a middle man, and perhaps it’s time 
for the client to call the delegate directly.

client code…

  manager = aPerson.manager;

class Person…

  get manager() {return this._department.manager;}

class Department…

  get manager()    {return this._manager;}

*/

class Person {
    get manager() {return this._department.manager;}
    get department() {return this._department;}
}

// Client code
manager = aPerson.department.manager;









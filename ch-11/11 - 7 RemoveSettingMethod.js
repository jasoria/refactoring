/* 

MOTIVATION

Providing a setting method indicates that a field may be 
changed. If I don’t want that field to change once the 
object is created, I don’t provide a setting method (and 
make the field immutable).

I have a simple person class.

class Person…

  get name()    {return this._name;}
  set name(arg) {this._name = arg;}
  get id()    {return this._id;}
  set id(arg) {this._id = arg;}
At the moment, I create a new object with code like this:

  const martin = new Person();
  martin.name = "martin";
  martin.id = "1234";

*/

class Person {
    constructor(id) {
        this._id = id;
    }
    get name()    {return this._name;}
    set name(arg) {this._name = arg;}
    get id()    {return this._id;}
}

const martin = new Person("1234");
martin.name = "martin";





















  

  












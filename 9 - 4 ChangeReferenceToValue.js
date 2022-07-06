/* 

MOTIVATION

When I nest an object, or data structure, within another 
I can treat the inner object as a reference or as a value. 
The difference is most obviously visible in how I handle 
updates of the inner object's properties. If I treat it as 
a reference, I'll update the inner object's property keeping 
the same inner object. If I treat it as a value, I will 
replace the entire inner object with a new one that has the 
desired property. If I treat a field as a value, I can change 
the class of the inner object to make it a Value Object. 
Value objects are generally easier to reason about, 
particularly because they are immutable. In general, immutable 
data structures are easier to deal with. I can pass an immutable 
data value out to other parts of the program and not worry that 
it might change without the enclosing object being aware of the 
change. I can replicate values around my program and not worry 
about maintaining memory links. Value objects are especially 
useful in distributed and concurrent systems.

Imagine we have a person object that holds onto a crude 
telephone number.

class Person…
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get officeAreaCode()    {return this._telephoneNumber.areaCode;}
  set officeAreaCode(arg) {this._telephoneNumber.areaCode = arg;}
  get officeNumber()    {return this._telephoneNumber.number;}
  set officeNumber(arg) {this._telephoneNumber.number = arg;}  

class TelephoneNumber…

  get areaCode()    {return this._areaCode;}
  set areaCode(arg) {this._areaCode = arg;}
  get number()    {return this._number;}
  set number(arg) {this._number = arg;} 

*/

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
      }
    get officeAreaCode()    {return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg) {
        this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber);
    }
    get officeNumber()    {return this._telephoneNumber.number;}
    set officeNumber(arg) {
        this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
    }  
}


class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode()    {return this._areaCode;}
    set areaCode(arg) {this._areaCode = arg;}
    get number()    {return this._number;}
    set number(arg) {this._number = arg;} 
    equals(other) {
        if (!(other instanceof TelephoneNumber)) return false;
        return this.areaCode === other.areaCode &&
            this.number === other.number;
    }
}















  

  












/* 

MOTIVATION

Imagine a class with many methods and quite a lot of data. 
A class that is too big to understand easily. You need to 
consider where it can be split—and split it. 
A good sign is when a subset of the data and a subset of 
the methods seem to go together. Other good signs are subsets 
of data that usually change together or are particularly 
dependent on each other.

class Person…

  get name()    {return this._name;}
  set name(arg) {this._name = arg;}
  get telephoneNumber() {return `(${this.officeAreaCode}) ${this.officeNumber}`;}
  get officeAreaCode()    {return this._officeAreaCode;}
  set officeAreaCode(arg) {this._officeAreaCode = arg;}
  get officeNumber() {return this._officeNumber;}
  set officeNumber(arg) {this._officeNumber = arg;}  

*/

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }
    get name()    {return this._name;}
    set name(arg) {this._name = arg;}
    get telephoneNumber() {return this._telephoneNumber.toString();}
    get officeAreaCode()    {return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg) {this._telephoneNumber.areaCode = arg;}
    get officeNumber() {return this._telephoneNumber.number;}
    set officeNumber(arg) {this._telephoneNumber.number = arg;}  
}

class TelephoneNumber {
    get areaCode() {return this._areaCode;}
    set areaCode(arg) {this._areaCode = arg;}
    get number() {return this._number;}
    set number(arg) {this._number = arg;}
    get toString() {return `(${this.areaCode}) ${this.number}`;}
}





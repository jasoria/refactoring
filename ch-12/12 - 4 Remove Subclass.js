/* 

MOTIVATION

Subclasses are useful. They support variations in data 
structure and polymorphic behavior. They are a good way 
to program by difference. But as a software system evolves, 
subclasses can lose their value as the variations they 
support are moved to other places or removed altogether.

I'll start with this stump of subclasses:

class Person…

  constructor(name) {
    this._name = name;
  }
  get name()    {return this._name;}
  get genderCode() {return "X";}
  // snip
class Male extends Person {
  get genderCode() {return "M";}
}

class Female extends Person {
  get genderCode() {return "F";}
}

*/

class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }
    get name()    {return this._name;}
    get genderCode() {return this._genderCode;}
    get isMale() {return "M" === this._genderCode;}
}

function createPerson(aRecord) {
    switch (aRecord.gender) {
        case 'M': return new Person(aRecord.name, "M");
        case 'F': return new Person(aRecord.name, "F");
        default: return new Person(aRecord.name, "X");
    }
}

function loadFromInput(data) {
    return data.map(aRecord => createPerson(aRecord));
}

// client…

const numberOfMales = people.filter(p => p.isMale).length;






















  

  












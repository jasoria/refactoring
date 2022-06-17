/* 

MOTIVATION

I like encapsulating any mutable data in my programs. 
This makes it easier to see when and how data structures 
are modified, which then makes it easier to change those 
data structures when I need to. Encapsulation is often 
encouraged, particularly by object-oriented developers, 
but a common mistake occurs when working with collections. 
Access to a collection variable may be encapsulated, but 
if the getter returns the collection itself, then that 
collection's membership can be altered without the enclosing 
class being able to intervene.

To avoid this, I provide collection modifier methods—usually 
add and remove—on the class itself. This way, changes to the 
collection go through the owning class, giving me the 
opportunity to modify such changes as the program evolves.

class Person…

  constructor (name) {
    this._name = name;
    this._courses = [];
  }
  get name() {return this._name;}
  get courses() {return this._courses;}
  set courses(aList) {this._courses = aList;}

class Course…

  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name()       {return this._name;}
  get isAdvanced() {return this._isAdvanced;}

  Clients use the course collection to gather information on courses.

numAdvancedCourses = aPerson.courses
  .filter(c => c.isAdvanced)
  .length
;

*/


class Person {
    constructor (name) {
        this._name = name;
        this._courses = [];
      }
      get name() {return this._name;}
      get courses() {return this._courses.slice();}
      set courses(aList) {this._courses = aList.slice();}
      addCourse(aCourse) {
        this._courses.push(aCourse);
      }
      removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}) {
        const index = this._courses.indexOf(aCourse);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
      }
}

// client code
for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
}




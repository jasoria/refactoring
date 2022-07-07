/* 

MOTIVATION

Names are important, and field names in record structures 
can be especially important when those record structures 
are widely used across a program. Since these data structures 
are so important, it's essential to keep them clear. Like 
anything else, my understanding of data improves the more 
I work on the software, so it's vital that this improved 
understanding is embedded into the program.

I'll start with a constant.

const organization = {name: "Acme Gooseberries", country: "GB"};

I want to change "name" to "title". The object is widely used 
in the code base, and there are updates to the title in the code. 
So my first move is to apply Encapsulate Record.

*/

class Organization {
  constructor(data) {
    this._title = data.title;
    this._country = data.country;
  }
  get title() {return this._title;}
  set title(aString) {this._title = aString;}
  get country() {return this._country;}
  set country(aCountryCode) {this._country = aCountryCode;}
}

const organization = new Organization({title: "Acme Gooseberries", country: "GB"})











  

  












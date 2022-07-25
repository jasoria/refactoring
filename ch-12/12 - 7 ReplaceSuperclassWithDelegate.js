/* 

MOTIVATION

This is an example of one reason to use Replace Superclass 
with Delegate—if functions of the superclass don't make 
sense on the subclass, that's a sign that I shouldn't be 
using inheritance to use the superclass's functionality.

class CatalogItem…

  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {return this._id;}
  get title() {return this._title;}
  hasTag(arg) {return this._tags.includes(arg);}

class Scroll extends CatalogItem…

  constructor(id,  title, tags, dateLastCleaned) {
    super(id, title, tags);
    this._lastCleaned = dateLastCleaned;
  }
  
  needsCleaning(targetDate) {
    const threshold =  this.hasTag("revered") ? 700 : 1500;
    return this.daysSinceLastCleaning(targetDate) > threshold ;
  }
  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }

*/

class CatalogItem {
    constructor(id, title, tags) {
        this._id = id;
        this._title = title;
        this._tags = tags;
      }
    
      get id() {return this._id;}
      get title() {return this._title;}
      hasTag(arg) {return this._tags.includes(arg);}
}


class Scroll {
    constructor(id, dateLastCleaned, catalogID, catalog) {
        this._id = id;
        this._catalogItem = catalog.get(catalogID);
        this._lastCleaned = dateLastCleaned;
      }

      get id() {return this._id;}
      get title() {return this._catalogItem.title;}
      hasTag(aString) {return this._catalogItem.hasTag(aString);}
      
      needsCleaning(targetDate) {
        const threshold =  this.hasTag("revered") ? 700 : 1500;
        return this.daysSinceLastCleaning(targetDate) > threshold ;
      }
      daysSinceLastCleaning(targetDate) {
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
      }
}






























  

  












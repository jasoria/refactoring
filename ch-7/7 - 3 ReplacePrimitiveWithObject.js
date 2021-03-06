/* 

MOTIVATION

As soon as I realize I want to do something other than simple 
printing, I like to create a new class for that bit of data. 
At first, such a class does little more than wrap the primitive—but 
once I have that class, I have a place to put behavior specific to 
its needs. These little values start very humble, but once nurtured 
they can grow into useful tools. They may not look like much, but 
I find their effects on a code base can be surprisingly large. 
Indeed many experienced developers consider this to be one of the 
most valuable refactorings in the toolkit—even though it often 
seems counterintuitive to a new programmer.

class Order…

  constructor(data) {
    this.priority = data.priority;
    // more initialization

Some client codes uses it like this:

client…

  highPriorityCount = orders.filter(o => "high" === o.priority
                                      || "rush" === o.priority)
                            .length;

*/

class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value))
            this._value = value;
        else
            throw new Error(`<${value}> is invalid for Priority`);
    }
    toString() {return this._value;}
    get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() {return ['low', 'normal', 'high', 'rush'];}
    equals(other) {return this._index === other.index;}
    higherThan(other) {return this._index > other.index;}
    lowerThan(other) {return this._index < other.index;}
}


class Order {
    constructor(data) {
        this._priority = new Priority(data);
    }
    get priority() {return this._priority;}
    get priorityString() {return this._priority.toString();}
    set priority(aString) {this._priority = new Priority(aString);}
}

// Client...
highPriorityCount = orders.filter(
    o => o.priority.higherThan(new Priority("normal"))).length;




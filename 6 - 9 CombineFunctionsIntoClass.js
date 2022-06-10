/* 

MOTIVATION

When I see a group of functions that operate closely together 
on a common body of data (usually passed as arguments to the 
function call), I see an opportunity to form a class. Using a 
class makes the common environment that these functions share 
more explicit, allows me to simplify function calls inside the 
object by removing many of the arguments, and provides a reference 
to pass such an object to other parts of the system.

Example

reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

client 1…

  const aReading = acquireReading();
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

client 2…

  const aReading = acquireReading();
  const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
  const taxableCharge =  Math.max(0, base - taxThreshold(aReading.year));

client 3…

  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);

  function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
  }

*/

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }
    get customer() {return this._customer;}
    get quantity() {return this._quantity;}
    get month() {return this._month;}
    get year() {return this._year;}
    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }
    get taxableCharge() {
        return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
    }
}

// client 3...
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

// client 1...
const rawReadingC1 = acquireReading();
const aReadingC1 = new Reading(rawReadingC1);
const baseChargeC1 = aReadingC1.baseCharge;

// client 2...
const rawReadingC2 = acquireReading();
const aReadingC2 = new Reading(rawReadingC2);
const taxableCharge = aReadingC2.taxableCharge;



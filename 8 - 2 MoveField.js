/* 

MOTIVATION

I may seek to move data because I find I always need to 
pass a field from one record whenever I pass another record 
to a function. Pieces of data that are always passed to 
functions together are usually best put in a single record 
in order toclarify their relationship. Change is also a factor; 
if a change in one record causes a field in another record to 
change too, that's a sign of a field in the wrong place. 
If I have to update the same field in multiple structures, 
that's a sign that it should move to another place where it 
only needs to be updated once.

class Customer…

  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }
  get discountRate() {return this._discountRate;}
  becomePreferred() {
    this._discountRate += 0.03;
    // other nice things
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }

class CustomerContract…

  constructor(startDate) {
    this._startDate = startDate;
  }

I want to move the discount rate field from the customer to the 
customer contract.

*/

class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._setDiscountRate(discountRate);
    this._contract = new CustomerContract(dateToday());
  }
  get discountRate() {return this._contract.discountRate;}
  _setDiscountRate(aNumber) {this._contract.discountRate = aNumber;}
  becomePreferred() {
    this._setDiscountRate(this._discountRate + 0.03);
    // other nice things
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }
  get discountRate() {return this._discountRate;}
  set discountRate(arg) {this._discountRate = arg;}
}










/* 

MOTIVATION

One use of temporary variables is to capture the value 
of some code in order to refer to it later in a function. 
Using a temp allows me to refer to the value while 
explaining its meaning and avoiding repeating the code 
that calculates it. But while using a variable is handy, 
it can often be worthwhile to go a step further and use a 
function instead. Using functions instead of variables also 
allows me to avoid duplicating the calculation logic in 
similar functions. Whenever I see variables calculated in 
the same way in different places, I look to turn them into 
a single function.

class Order…

  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    var basePrice = this._quantity * this._item.price;
    var discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

*/

class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }
    get price() {
        return this.basePrice * this.discountFactor;
    }
    get basePrice() {
        return this._quantity * this._item.price;
    }
    get discountFactor() {
        var discountFactor = 0.98;
        if (this.basePrice > 1000) discountFactor -= 0.03;
        return discountFactor;
    }
}






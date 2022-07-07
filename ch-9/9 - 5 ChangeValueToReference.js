/* 

MOTIVATION

The biggest difficulty in having physical copies of the 
same logical data occurs when I need to update the shared 
data. I then have to find all the copies and update them 
all. If I miss one, I'll get a troubling inconsistency in my 
data. In this case, it's often worthwhile to change the 
copied data into a single reference.

I'll begin with a class that represents orders, which I 
might create from an incoming JSON document. Part of the 
order data is a customer ID from which I'm creating a 
customer object.

class Order…

  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
    // load other data
  }
  get customer() {return this._customer;}
class Customer…

  constructor(id) {
    this._id = id;
  }
  get id() {return this._id;}

*/

class Order {
    constructor(data) {
        this._number = data.number;
        this._customer = registerCustomer(data.customer);
    }
    get customer() {return this._customer;}
}

class Customer {
    constructor(id) {
        this._id = id;
    }
    get id() {return this._id;}
}

let _repositoryData;

export function initialize() {
    _repositoryData = {};
    _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
    if (! _repositoryData.customers.has(id))
        _repositoryData.customers.set(id, new Customer(id));
    return findCustomer(id);
}

export function findCustomer(id) {
    return _repositoryData.customers.get(id);
}

















  

  












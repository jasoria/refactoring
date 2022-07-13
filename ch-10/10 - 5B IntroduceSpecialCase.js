/* 

Example: Using an Object Literal

Here is the opening case again—just the same, except this 
time there is no client that updates the customer:

class Site…

  get customer() {return this._customer;}

class Customer…

  get name()            {...}
  get billingPlan()     {...}
  set billingPlan(arg)  {...}
  get paymentHistory()  {...}

client 1…

  const aCustomer = site.customer;
  // ... lots of intervening code ...
  let customerName;
  if (aCustomer === "unknown") customerName = "occupant";
  else customerName = aCustomer.name;

client 2…

  const plan = (aCustomer === "unknown") ?
        registry.billingPlans.basic
        : aCustomer.billingPlan;

client 3…

  const weeksDelinquent = (aCustomer === "unknown") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;

*/

function createUnknownCustomer(arg) {
    return {
        isUnknown: true,
        name: "occupant",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
          },
    };
}

function isUnknown(arg) {
    return arg.isUnknown;
}

class Site {
    get customer() {
        return (this._customer === "unknown") ?  createUnknownCustomer() :  this._customer;
    }
}


class Customer {
    get isUnknown() {return false;}
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
}

const aCustomer = site.customer;

// client 1…
const customerName = aCustomer.name;

// client 2…
const plan = aCustomer.billingPlan;

// client 3…
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;











  

  












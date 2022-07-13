/* 

MOTIVATION

A common case of duplicated code is when many users of a 
data structure check a specific value, and then most of 
them do the same thing. If I find many parts of the code 
base having the same reaction to a particular value, I want 
to bring that reaction into a single place. A good mechanism 
for this is the Special Case pattern where I create a 
special-case element that captures all the common behavior. 
This allows me to replace most of the special-case checks 
with simple calls.

A utility company installs its services in sites.

class Site…

  get customer() {return this._customer;}


There are various properties of the customer class; 
I'll consider three of them.

class Customer…

  get name()            {...}
  get billingPlan()     {...}
  set billingPlan(arg)  {...}
  get paymentHistory()  {...}

Most of the time, a site has a customer, 
but sometimes there isn't one. When this happens, 
the data record fills the customer field with the 
string "unknown".

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

  if (aCustomer !== "unknown") aCustomer.billingPlan = newPlan;

client 4…

  const weeksDelinquent = (aCustomer === "unknown") ?
        0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;

*/

class Site {
    get customer() {
        return (this._customer === "unknown") ? new UnknownCustomer() : this._customer;
    }
}

class Customer {
    get isUnknown() {return false;}
    get name() {}
    get billingPlan() {}
    set billingPlan(arg) {}
    get paymentHistory() {}
}

class UnknownCustomer {
    get isUnknown() {return true;}
    get name() {return "occupant";}
    get billingPlan() {return registry.billingPlans.basic;}
    set billingPlan(arg) {/* ignore */}
    get paymentHistory() {return new NullPaymentHistory();}
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {return 0;}
}

function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
        throw new Error(`investigate bad value: <${arg}>`);
    return arg.isUnknown;
}

const aCustomer = site.customer;

// client 1…
let customerName = aCustomer.name;

// client 2…
const plan = aCustomer.billingPlan;

// client 3…
aCustomer.billingPlan = newPlan;

// client 4…
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;













  

  












/* 

Example: Using a Transform

Both previous cases involve a class, but the same idea 
can be applied to a record by using a transform step.

Let's assume our input is a simple record structure 
that looks something like this:

{
  name: "Acme Boston",
  location: "Malden MA",
  // more site details
  customer: {
    name: "Acme Industries",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7
      //more
    },
    // more
  }
}

In some cases, the customer isn't known, and such cases are 
marked in the same way:

{
  name: "Warehouse Unit 15",
  location: "Malden MA",
  // more site details
  customer: "unknown",
}

I have similar client code that checks for the unknown customer:

client 1…

  const site = acquireSiteData();
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

function isUnknown(aCustomer) {
    if (aCustomer === "unknown") return true;
    else return aCustomer.isUnknown;
}

function enrichSite(inputSite) {
    const result = _.cloneDeep(inputSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "occupant",
        billingPlan: registry.billingPlans.basic,
        paymentHistory: {
            weeksDelinquentInLastYear: 0,
          }
    };
    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false
    return result;

}

// client 1…
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... lots of intervening code ...
const customerName = aCustomer.name;



// client 2…
const plan = aCustomer.billingPlan;
        
// client 3…
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;











  

  












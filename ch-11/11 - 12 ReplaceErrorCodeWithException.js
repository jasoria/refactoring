/* 

MOTIVATION

Exceptions provide a separate language mechanism for error handling. 
When I detect an error, I throw an exception, which travels up the 
call stack until it finds a handler (or doesn't—in which case there 
is a default reaction, which is usually as drastic as it is simple). 
Exceptions mean that I don't have to remember to check error codes 
anymore, nor worry about detecting and passing errors up the call 
stack. Exceptions trigger their own separate flow, which allows me 
to write (and read) the rest of the program without such error events 
adding to the complexity.

Consider some code to look up shipping rates from a global table.

function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else return -23;
}

The code here assumes the country should have been validated 
earlier on, so getting such an error implies something odd has 
happened. The caller checks for this, and passes on the error it 
finds.

function calculateShippingCosts(anOrder) {
  // irrelevent code  
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) return shippingRules;
  // more irrelevent code  
A higher-level function reacts to the error by pushing the order into an error list.

top level…

  const status = calculateShippingCosts(orderData);
  if (status < 0) errorList.push({order: orderData, errorCode: status});

*/

function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if (data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
    // irrelevent code  
    const shippingRules = localShippingRules(anOrder.country);
    // more irrelevent code  
}

class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(`Order processing error ${errorCode}`);
        this.code = errorCode;
    }
    get name() { return "OrderProcessingError"; }
}

// top level…

try {
    calculateShippingCosts(orderData);
} catch (e) {
    if (e instanceof OrderProcessingError)
        errorList.push({ order: orderData, errorCode: e.code });
    else
        throw e;
}























  

  












/*

MOTIVATION

Sometimes, I do come across a function in which the body is as clear as the name. 
Or, I refactor the body of the code into something that is just as clear as the name. 
When this happens, I get rid of the function.

 function rating(aDriver) {
     return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
 }

 function moreThanFiveLateDeliveries(aDriver) {
     return aDriver.numberOfLateDeliveries > 5;
 }

*/


function rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/*

ANOTHER EXAMPLE

function reportLines(aCustomer) {
    const lines = [];
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(out, aCustomer) {
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
}

*/

function reportLines(aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
}


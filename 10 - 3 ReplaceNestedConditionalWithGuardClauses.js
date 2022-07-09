/* 

MOTIVATION

These kinds of conditionals have different intentions—and these 
intentions should come through in the code. If both are part of 
normal behavior, I use a condition with an if and an else leg. 
If the condition is an unusual condition, I check the condition 
and return if it's true. This kind of check is often called a 
guard clause. The key point of Replace Nested Conditional with 
Guard Clauses is emphasis. If I'm using an if-then-else construct, 
I'm giving equal weight to the if leg and the else leg. This 
communicates to the reader that the legs are equally likely and 
important. Instead, the guard clause says, “This isn't the core 
to this function, and if it happens, do something and get out.”

Here's some code to calculate a payment amount for an employee. 
It's only relevant if the employee is still with the company, 
so it has to check for the two other cases.

function payAmount(employee) {
  let result;
  if(employee.isSeparated) {
    result = {amount: 0, reasonCode: "SEP"};
  }
  else {
    if (employee.isRetired) {
      result = {amount: 0, reasonCode: "RET"};
    }
    else {
      // logic to compute amount
      lorem.ipsum(dolor.sitAmet);
      consectetur(adipiscing).elit();
      sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
      ut.enim.ad(minim.veniam);
      result = someFinalComputation();
    }
  }
  return result;
}

*/

function payAmount(employee) {
    if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" };
    if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
    // logic to compute amount
    lorem.ipsum(dolor.sitAmet);
    consectetur(adipiscing).elit();
    sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
    ut.enim.ad(minim.veniam);
    return someFinalComputation();
}

/**
 * Example: Reversing the conditions
 
 function adjustedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
  }
  return result;
}
 
 */

function adjustedCapital(anInstrument) {
     if (anInstrument.capital <= 0 
        || anInstrument.interestRate <= 0
        || anInstrument.duration <= 0) return 0;
    return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}














  

  












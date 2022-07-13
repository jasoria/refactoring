/* 

MOTIVATION

Consolidating the conditional code is important for two 
reasons. First, it makes it clearer by showing that I'm 
really making a single check that combines other checks. 
The sequence has the same effect, but it looks like I'm 
carrying out a sequence of separate checks that just happen 
to be close together. The second reason I like to do this 
is that it often sets me up for Extract Function. 
Extracting a condition is one of the most useful things I 
can do to clarify my code. It replaces a statement of what 
I'm doing with why I'm doing it.

function disabilityAmount(anEmployee) {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;
  // compute the disability amount
}

*/

function disabilityAmount(anEmployee) {
    if (isNotEligableForDisability()) return 0;
    // compute the disability amount
}

function isNotEligableForDisability() {
    return ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
}














  

  












/* 

MOTIVATION

If I see two functions that carry out very similar logic 
with different literal values, I can remove the duplication 
by using a single function with parameters for the different 
values. This increases the usefulness of the function, since 
I can apply it elsewhere with different values.

function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.05);
}

*/

function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.mutiply(1 + factor);
}

/**
 * Example 2
  
function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount =
        bottomBand(usage) * 0.03
        + middleBand(usage) * 0.05
        + topBand(usage) * 0.07;
    return usd(amount);
}
function bottomBand(usage) {
    return Math.min(usage, 100);
}
function middleBand(usage) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}
function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
}
  
 */

function baseCharge(usage) {
    if (usage < 0) return usd(0);
    const amount =
        withinBand(usage, 0, 100) * 0.03
        + withinBand(usage, 100, 200) * 0.05
        + withinBand(usage, 200, Infinity) * 0.07;
    return usd(amount);
}

function withinBand(usage, bottom, top) {
    return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

















  

  












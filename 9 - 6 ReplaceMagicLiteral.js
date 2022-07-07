/* 

MOTIVATION

Magic literals are common literal values that appear 
in the source code, usually in several places. I call 
it a magic literal because it has a meaning that's not 
obvious from its value, unless the reader remembers the 
value from prior experience. But that knowledge is an 
interpretation in my head—I'd rather have it spelled 
clearly in the code itself. I can do that by defining a 
constant for it and using that constant instead.

function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}

*/

const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
















  

  












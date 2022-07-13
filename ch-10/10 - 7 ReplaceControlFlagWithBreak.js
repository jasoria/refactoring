/* 

MOTIVATION

Control flags are variables used to alter the behavior 
of some code. They are computed in one place, then tested 
inside conditionals elsewhere. I always find them to be a 
smell, since they are common in convoluted code that is ripe 
for simplification with some refactoring. One place they 
seem to breed is inside loops. Often, they are used by people 
unfamiliar with break or continue statements, or by those who 
try to avoid multiple return statements in a function.

Here's some code that checks a list of people looking for 
hard-coded suspicious characters.

// some unimportant code
let found = false;
for (const p of people) {
  if (! found) {
    if ( p === "Don") {
      sendAlert();
      found = true;
    }
    if ( p === "John") {
      sendAlert();
      found = true;
    }     
  }
}
// more code

*/


checkForMiscreants(people);

function checkForMiscreants(people) {
    if(people.some(p => ["Don", "John"].includes(p))) sendAlert();
}















  

  












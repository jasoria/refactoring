/* 

MOTIVATION

Code is easier to understand when things that are 
related to each other appear together. If several 
lines of code access the same data structure, it's 
best for them to be together rather than intermingled 
with code accessing other data structures. At its 
simplest, I use Slide Statements to keep such code together.

let result;
if (availableResources.length === 0) {
  result = createResource();
  allocatedResources.push(result);
} else {
  result = availableResources.pop();
  allocatedResources.push(result);
}
return result;

*/

let result;
if (availableResources.length === 0) {
  result = createResource();
} else {
  result = availableResources.pop();
}
allocatedResources.push(result);
return result;




  

  












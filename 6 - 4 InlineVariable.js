/*

MOTIVATION

Variables provide names for expressions within a function, 
and as such they are usually a Good Thing. But sometimes, 
the name doesn't really communicate more than the expression 
itself. At other times, you may find that a variable gets in 
the way of refactoring the neighboring code. In these cases, 
it can be useful to inline the variable.

let basePrice = anOrder.basePrice;
return (basePrice > 1000);

Refactor to

return anOrder.basePrice > 1000;

*/


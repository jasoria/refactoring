/* 

MOTIVATION

I often see groups of data items that regularly travel together, 
appearing in function after function. Such a group is a data clump, 
and I like to replace it with a single data structure. Grouping data 
into a structure reduces the size of parameter lists for any function 
that uses the new structure. 

But the real power of this refactoring is how it enables deeper changes 
to the code. I will create functions that capture the common behavior over 
this data—either as a set of common functions or as a class that combines 
the data structure with these functions. 


function amountInvoiced(startDate, endDate) {...}
function amountReceived(startDate, endDate) {...}
function amountOverdue(startDate, endDate) {...}

function amountInvoiced(aDateRange) {...}
function amountReceived(aDateRange) {...}
function amountOverdue(aDateRange) {...} 

*/
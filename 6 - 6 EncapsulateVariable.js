/*

MOTIVATION

Data is more awkward to manipulate than functions. If I move data around, 
I have to change all the references to the data in a single cycle to keep 
the code working. For data with a very small scope of access, such as a 
temporary variable in a small function, this isn't a problem. But as the 
scope grows, so does the difficulty, which is why global data is such a pain.

So if I want to move widely accessed data, often the best approach is to 
first encapsulate it by routing all its access through functions. That way, 
I turn the difficult task of reorganizing data into the simpler task of 
reorganizing functions.

Consider some useful data held in a global variable:

let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

Like any data, it's referenced with code like this:

spaceship.owner = defaultOwner;

and updated like this:

defaultOwner = {firstName: "Rebecca", lastName: "Parsons"};

To do a basic encapsulation on this, I start by defining functions to read 
and write the data.

function getDefaultOwner()    {return defaultOwner;}
function setDefaultOwner(arg) {defaultOwner = arg;}

I then start working on references to defaultOwner. When I see a reference, 
I replace it with a call to the getting function.

spaceship.owner = getDefaultOwner();

When I see an assignment, I replace it with the setting function.

setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

*/



/* 

MOTIVATION

When I have a function that gives me a value and has no 
observable side effects. It is a good idea to clearly signal 
the difference between functions with side effects and those 
without. A good rule to follow is that any function that 
returns a value should not have observable side effects. 
If I come across a method that returns a value but also has 
side effects, I always try to separate the query from the 
modifier.

Here is a function that scans a list of names for a miscreant. 
If it finds one, it returns the name of the bad guy and sets 
off the alarms. It only does this for the first miscreant it 
finds (I guess one is enough).

  function alertForMiscreant (people) {
    for (const p of people) {
      if (p === "Don") {
        setOffAlarms();
        return "Don";
      }
      if (p === "John") {
        setOffAlarms();
        return "John";
      }
    }
    return "";
  }

*/

function alertForMiscreant (people) {
    if (findMiscreant(people) !== "") setOffAlarms();
}

function findMiscreant (people) {
    for (const p of people) {
      if (p === "Don") {
        return "Don";
      }
      if (p === "John") {
        return "John";
      }
    }
    return "";
}

const found = findMiscreant(people);
alertForMiscreant(people);















  

  












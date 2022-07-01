/* 

MOTIVATION

You often see loops that are doing two different things at 
once just because they can do that with one pass through a 
loop. But if you're doing two different things in the same 
loop, then whenever you need to modify the loop you haveto 
understand both things. By splitting the loop, you ensure 
you only need to understand the behavior you need to modify.


  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;

*/

return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;

function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge() {
    return Math.min(...people.map(p => p.age));
}








  

  












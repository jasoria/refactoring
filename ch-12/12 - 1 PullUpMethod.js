/* 

MOTIVATION

Eliminating duplicate code is important. Often, Pull Up Method 
comes after other steps. I see two methods in different classes 
that can be parameterized in such a way that they end up as 
essentially the same method. In that case, the smallest step 
is for me to apply Parameterize Function separately and then 
Pull Up Method.

I have two subclass methods that do the same thing.

class Employee extends Party…

  get annualCost() {
    return this.monthlyCost * 12;
  }

class Department extends Party…

  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }

*/

class Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
    get monthlyCost() {
        throw new SubclassResponsabilityError();
    }
}

class Employee extends Party {

}

class Department extends Party {

}




















  

  












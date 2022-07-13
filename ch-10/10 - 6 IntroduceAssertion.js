/* 

MOTIVATION

Often, sections of code work only if certain conditions are true. 
Such assumptions are often not stated but can only be deduced by 
looking through an algorithm. Sometimes, the assumptions are stated 
with a comment. A better technique is to make the assumption 
explicit by writing an assertion. An assertion is a conditional 
statement that is assumed to be always true. Failure of an assertion 
indicates a programmer error.

Here’s a simple tale of discounts. A customer can be given a 
discount rate to apply to all their purchases:

class Customer…

  applyDiscount(aNumber) {
    return (this.discountRate)
      ? aNumber - (this.discountRate * aNumber)
      : aNumber;
  }

There's an assumption here that the discount rate is a positive 
number. 

*/

class Customer {
    applyDiscount(aNumber) {
        if (!this.discountRate) return aNumber;
        else {
            assert(this.discountRate >= 0);
            return aNumber - (this.discountRate * aNumber);
        }
    }
}















  

  












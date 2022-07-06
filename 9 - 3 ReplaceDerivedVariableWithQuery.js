/* 

MOTIVATION

One of the biggest sources of problems in software is 
mutable data. One way I can make a big impact is by 
removing any variables that I could just as easily calculate. 
A calculation often makes it clearer what the meaning of the 
data is, and it is protected from being corrupted when you fail 
to update the variable as the source data changes.

class ProductionPlan…

  get production() {return this._production;}
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }

*/

class ProductionPlan {
    get production() {
        return this._adjustments
            .reduce((sum, a) => sum + a.amount, 0);
    }
    applyAdjustment(anAdjustment) {
        this._adjustments.push(anAdjustment);
    }
}














  

  












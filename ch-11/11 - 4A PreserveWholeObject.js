/* 

MOTIVATION

If I see code that derives a couple of values from a record 
and then passes these values into a function, I like to 
replace those values with the whole record itself, letting the 
function body derive the values it needs.

Consider a room monitoring system. It compares its daily 
temperature range with a range in a predefined heating plan.

caller…

  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if (!aPlan.withinRange(low, high))
    alerts.push("room temperature went outside range");

class HeatingPlan…

  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
  }

*/

if (!aPlan.withinRange(aRoom.daysTempRange))
    alerts.push("room temperature went outside range");

class HeatingPlan {
    withinRange(aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low) &&
        (aNumberRange.high <= this._temperatureRange.high);
    }
}



















  

  












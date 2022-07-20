/* 

MOTIVATION

When looking through a function's body, I sometimes see 
references to something in the function's scope that I'm 
not happy with. This might be a reference to a global variable, 
or to an element in the same module that I intend to move away. 
To resolve this, I need to replace the internal reference with 
a parameter, shifting the responsibility of resolving the 
reference to the caller of the function.

class HeatingPlan…

  get targetTemperature() {
    if      (thermostat.selectedTemperature >  this._max) return this._max;
    else if (thermostat.selectedTemperature <  this._min) return this._min;
    else return thermostat.selectedTemperature;
  }

  caller…

  if      (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
  else setOff();

*/

class HeatingPlan {
    
    targetTemperature(selectedTemperature) {
        if (selectedTemperature >  this._max) return this._max;
        else if (selectedTemperature <  this._min) return this._min;
        else return selectedTemperature;
    }
}

// caller…

if (thePlan.targetTemperature(thermostat.selectedTemperature) > 
    thermostat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) < 
    thermostat.currentTemperature) setToCool();
else setOff();





















  

  












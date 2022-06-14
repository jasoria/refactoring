/* 

MOTIVATION

Software often involves feeding data into programs that calculate 
various derived information from it. These derived values may be 
needed in several places, and those calculations are often repeated 
wherever the derived data is used. I prefer to bring all of these 
derivations together, so I have a consistent place to find and update 
them and avoid any duplicate logic.

One way to do this is to use a data transformation function that 
takes the source data as input and calculates all the derivations, 
putting each derived value as a field in the output data. Then, to 
examine the derivations, all I need do is look at the transform function.

reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

client 1…

  const aReading = acquireReading();
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

client 2…

  const aReading = acquireReading();
  const base = (baseRate(aReading.month, aReading.year) * aReading.quantity);
  const taxableCharge =  Math.max(0, base - taxThreshold(aReading.year));

client 3…

  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);
  function calculateBaseCharge(aReading) {
    return  baseRate(aReading.month, aReading.year) * aReading.quantity;
  }

*/

function enrichReading(original) {
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge =  Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;
}

// client 3...

const rawReading3 = acquireReading();
const aReading3 = enrichReading(rawReading3);
const basicChargeAmount3 = aReading3.baseCharge;

// client 1...

const rawReading1 = acquireReading();
const aReading1 = enrichReading(rawReading1);
const baseCharge1 = aReading1.baseCharge;

// client 2...

const rawReading2 = acquireReading();
const aReading2 = enrichReading(rawReading2);
const taxableCharge = aReading2.taxableCharge;

/* 

MOTIVATION

Complex conditional logic is one of the hardest things to reason about 
in programming, so I always look for ways to add structure to conditional 
logic. Often, I find I can separate the logic into different 
circumstances—high-level cases—todivide the conditions. Sometimes it's 
enough to represent this division within the structure of a conditional 
itself, but using classes and polymorphism can make the separation more 
explicit. A common case for this is where I can form a set of types, 
each handling the conditional logic differently. I might notice that 
books, music, and food vary in how they are handled because of their 
type. This is made most obvious when there are several functions that 
have a switch statement on a type code. In that case, I remove the 
duplication of the common switch logic by creating classes for each 
case and using polymorphism to bring out the type-specific behavior.

My friend has a collection of birds and wants to know how fast they 
can fly and what they have for plumage. So we have a couple of small 
programs to determine the information.

  function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]));
  }
  function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
  }
  function plumage(bird) {
    switch (bird.type) {
    case 'EuropeanSwallow':
      return "average";
    case 'AfricanSwallow':
      return (bird.numberOfCoconuts > 2) ? "tired" : "average";
    case 'NorwegianBlueParrot':
      return (bird.voltage > 100) ? "scorched" : "beautiful";
    default:
      return "unknown";
    }
  }
  function airSpeedVelocity(bird) {
    switch (bird.type) {
    case 'EuropeanSwallow':
      return 35;
    case 'AfricanSwallow':
      return 40 - 2 * bird.numberOfCoconuts;
    case 'NorwegianBlueParrot':
      return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
    default:
      return null;
    }
  }

}

*/

function plumages(birds) {
    return new Map(birds
                    .map(b => createBird(b))
                    .map(bird => [bird.name, bird.plumage]));
}
function speeds(birds) {
    return new Map(birds
                    .map(b => createBird(b))
                    .map(bird => [bird.name, bird.airSpeedVelocity]));
}

function createBird(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorgegianBlueParrot':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject)
    }
    get plumage() {
        return "unknown";
    }
    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanSwallow extends Bird {
    get plumage() {
        return "average";
    }
    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
    }
    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }
    get airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}

/**
 * Example Using Polymorphism for Variation
 * 
 * consider some code used by a rating agency to compute an investment 
 * rating for the voyages of sailing ships. The rating agency gives 
 * out either an "A" or "B" rating, depending of various factors due 
 * to risk and profit potential. The risk comes from assessing the 
 * nature of the voyage as well as the history of the captain's prior 
 * voyages.

  function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
  }
  
  function voyageRisk(voyage) {
    let result = 1;
    if (voyage.length > 4) result += 2;
    if (voyage.length > 8) result += voyage.length - 8;
    if (["china", "east-indies"].includes(voyage.zone)) result += 4;
    return Math.max(result, 0);
  }
  function captainHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) result += 4;
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === "china" && hasChina(history)) result -= 2;
    return Math.max(result, 0);
  }
  function hasChina(history) {
    return history.some(v => "china" === v.zone);
  }
  function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === "china") result += 1;
    if (voyage.zone === "east-indies") result += 1;
    if (voyage.zone === "china" && hasChina(history)) {
      result += 3;
      if (history.length > 10) result += 1;
      if (voyage.length > 12) result += 1;
      if (voyage.length > 18) result -= 1;
    }
    else {
      if (history.length > 8) result += 1;
      if (voyage.length > 14) result -= 1;
    }
    return result;
  }
 * 
 */

function rating(voyage, history) {
  return createRating(voyage, history).value;
}

class Rating {
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }
  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
  }
  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["china", "east-indies"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }
  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter(v => v.profit < 0).length;
    return Math.max(result, 0);
  }
  get voyageProfitFactor() {
    let result = 2;
    if (this.voyage.zone === "china") result += 1;
    if (this.voyage.zone === "east-indies") result += 1;
    result += this.historyLengthFactor;
    result += this.voyageLengthFactor;
    return result;
  }
  get voyageLengthFactor() {
    let result = 0;
    if (this.voyage.length > 14) result -= 1;
    return result;
  }
  get historyLengthFactor() {
    return (this.history.length > 8) ? 1 : 0;
  }
  get hasChinaHistory() {
    return this.history.some(v => "china" === v.zone);
  }
}

class ExperiencedChinaRating extends Rating {
  get voyageProfitFactor() {
    return super.voyageProfitFactor = 3;
  }

  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }
  get voyageLengthFactor() {
    let result = 0;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result
  }
  get historyLengthFactor() {
    return (this.history.length > 10) ? 1 : 0;
  }
}

function createRating(voyage, history) {
  if (voyage.zone === "china" && history.some(v => "china" === v.zone))
    return new ExperiencedChinaRating(voyage, history);
  else
    return new Rating(voyage, history);
}






























  

  












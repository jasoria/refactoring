/* 

MOTIVATION

Those who are familiar with the Gang of Four book may find it 
helpful to think of this refactoring as replacing subclasses 
with the State or Strategy patterns. Both of these patterns are 
structurally the same, relying on the host delegating to a separate 
hierarchy. 

class Booking…

constructor(show, date) {
    this._show = show;
    this._date = date;
  }

get hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

get basePrice() {
    let result = this._show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }

class PremiumBooking extends Booking…

constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }

get hasTalkback() {
    return this._show.hasOwnProperty('talkback');
  }

get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }

get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
  }

*/

class Booking {
    constructor(show, date) {
        this._show = show;
        this._date = date;
    }
    get hasTalkback() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.hasTalkback
            : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.basePrice
            : this._privateBasePrice;
    }
    get _privateBasePrice() {
        let result = this._show.price;
        if (this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    _bePremium(extras) {
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
    get hasDinner() {
        return (this._premiumDelegate)
            ? this._premiumDelegate.hasDinner
            : undefined;
    }
}

class PremiumBookingDelegate {
    constructor(hostBooking, extras) {
        this._host = hostBooking;
        this._extras = extras;
    }
    get hasTalkback() {
        return this._host._show.hasOwnProperty('talkback');
    }
    get basePrice() {
        return Math.round(this._host._privateBasePrice + this._extras.premiumFee);
    }
    get hasDinner() {
        return this._extras.hasOwnProperty('dinner') && !this._host.isPeakDay;
    }
}

function createBooking(show, date) {
    return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date, extras);
    result._bePremium(extras);
    return result;
}

// booking client
aBooking = createBooking(show, date);

// premium client
aPremiunBooking = createPremiumBooking(show, date, extras);




























  

  












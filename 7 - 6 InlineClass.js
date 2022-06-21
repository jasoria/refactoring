/* 

MOTIVATION

Here's a class that holds a couple of pieces of tracking 
information for a shipment.

  class TrackingInformation {
    get shippingCompany()    {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber()    {return this._trackingNumber;}
    set trackingNumber(arg) {this._trackingNumber = arg;}
    get display()            {
      return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
  }

It's used as part of a shipment class.

class Shipment…
  get trackingInfo() {
    return this._trackingInformation.display;
  }
  get trackingInformation()    {return this._trackingInformation;}
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }

  caller…
  aShipment.trackingInformation.shippingCompany = request.vendor;

*/

class Shipment {
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
    set shippingCompany(arg) {
        this._trackingInformation.shippingCompany = arg;
    }
    get shippingCompany() {
        return this._shippingCompany;
    }
    set shippingCompany(arg) {
        this._shippingCompany = arg;
    }
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
    get trackingNumber() {
        return this._trackingNumber;
    }
    set trackingNumber(arg) {
        this._trackingNumber = arg;
    }
}

// Caller
aShipment.shippingCompany = request.vendor;






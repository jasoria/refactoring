/* 

MOTIVATION

Record structures are a common feature in programming 
languages. They provide an intuitive way to group related 
data together, allowing me to pass meaningful units of 
data rather than loose clumps. But simple record structures 
have disadvantages. The most annoying one is that they force 
me to clearly separate what is stored in the record from
calculated values. This is why I often favor objects over 
records for mutable data.

Example 1

const organization = {name: "Acme Gooseberries", country: "GB"};

result += `<h1>${organization.name}</h1>`;

organization.name = newName;

*/

class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name() {return this._name;}
    set name(aString) {this._name = aString;}
    get country() {return this._country;}
    set name(aCountryCode) {this._country = aCountryCode;}
}

const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

function getOrganization() {return organization;}

// example reader
result += '<h1>${getOrganization().name}</h1>';

// example writer
getOrganization().name = newName;

/*
Example 2 Nested Record

"1920": {
  name: "martin",
  id: "1920",
  usages: {
    "2016": {
      "1": 50,
      "2": 55,
      // remaining months of the year
    },
    "2015": {
      "1": 70,
      "2": 63,
      // remaining months of the year
    }
  }
},
"38673": {
  name: "neal",
  id: "38673",
  // more customers in a similar form


sample update…

  customerData[customerID].usages[year][month] = amount;

sample read…

  function compareUsage (customerID, laterYear, month) {
    const later   = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear - 1][month];
    return {laterAmount: later, change: later - earlier};
  }

*/

function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount
}

class CustomerData {
    constructor(data) {
        this._data = data;
    }
    get rawData() {
        return this._data.cloneDeep(this._data);
    }
    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }
    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }
}

function getCustomerData() {return customerData;}
function setRawDataOfCustomers(arg) {customerData = new CustomerData(arg);}

// sample update
getCustomerData().setUsage(customerID, year, month, amount);

// sample read
function compareUsage (customerID, laterYear, month) {
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
    return {laterAmount: later, change: later - earlier};
}


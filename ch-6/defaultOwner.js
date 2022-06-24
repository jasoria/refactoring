let defaultOwnerData = {firstName: "Martin", lastName: "Fowler"};

export function getDefaultOwner() {return Object.assign({}, defaultOwnerData);}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}
/* 

MOTIVATION

I dislike flag arguments because they complicate the process of 
understanding what function calls are available and how to call 
them. Flag arguments can have a place if there's more than one of 
them in the function, since otherwise I would need explicit functions 
for every combination of their values.

aShipment.deliveryDate = deliveryDate(anOrder, true);

aShipment.deliveryDate = deliveryDate(anOrder, false);

Faced with code like this, I immediately begin to wonder about 
the meaning of the boolean value. What is it doing?

The body of deliveryDate looks like this:

function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime;
    if (["MA", "CT"]     .includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ME", "NH"] .includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

*/

aShipment.deliveryDate = rushDeliveryDate(anOrder);

aShipment.deliveryDate = regularDeliveryDate(anOrder);

function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

















  

  












/* 

MOTIVATION

When I run into code that's dealing with two different things, 
I look for a way to split it into separate modules. I endeavor 
to make this split because, if I need to make a change, I can 
deal with each topic separately and not have to hold both in my 
head together. If I'm lucky, I may only have to change one module 
without having to remember the details of the other one at all.

Initial state

  function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
            * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
            ? shippingMethod.discountedFee : shippingMethod.feePerCase; 
    const shippingCost = quantity * shippingPerCase;
    const price =  basePrice - discount + shippingCost;
    return price;
  }

*/

function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
            * product.basePrice * product.discountRate;
    return {basePrice: basePrice, quantity: quantity, discount: discount
    };
}

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - priceData.discount + shippingCost;
}
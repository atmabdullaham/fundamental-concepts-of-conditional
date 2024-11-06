/**
 * MULTILAVE CONDITION
 */

const price = 2600;

if (price >= 6000) {
 const discount = price * 0.1;
 const payAmount = price - discount;
 console.log(payAmount)
} else if (price > 2500) {
 const discount = price * 0.05;
 const payAmount = price - discount;
 console.log(payAmount)
}

else {
 console.log(price)
}
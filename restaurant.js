const age = 50;
const price = 500;
if (age < 12) {
 console.log('You can eat for free');
} else if (age >= 60) {
 // 50% discount
 const discount = price * 0.5;
 const payAmount = price - discount;
 console.log(payAmount)
}
else if (age >= 50) {
 // 25% discount
 const discount = price * 0.25;
 const payAmount = price - discount;
 console.log(payAmount)
} else {
 console.log(price)
}

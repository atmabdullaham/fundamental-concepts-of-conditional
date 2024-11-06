/**
 * tERNARY --> THREE PARTS
 * 
 *   ?   :  
 * condition ? do something when true : do something when false
 */

const age = 17;
// if (age >= 18) {
//  console.log('You can vote')
// } else {
//  console.log('Ghumi takbo')
// }

// Simple ternary
// age >= 18 ? console.log('vote dio') : console.log('Ghumai tako')


let price = 500;
const isLeader = false;

if (isLeader === true) {
 price = 0
} else {
 price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;


// optional: semiadvance ternary

if (isLeader === true) {
 if (price > 1000) {
  price = price * 0.5;
 } else {
  price = 0
 }
} else {
 price = price + 1000;
}


// feel free to ignore it


price = isLeader === 0 ?
 price > 1000 ?
  price / 2 : 0
 : price + 100;
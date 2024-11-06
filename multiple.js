// Multiple Condition Logical Operator (&& ,||)

const salary = 25000;
const isBcs = true;
const height = 73;
const hasCar = false;

// if (salary >= 20000 && height > 66) {
//  console.log('so patro');
// }
// else {
//  console.log('onno patro koji');
// }

// if (salary >= 25000 || height > 72) {
//  console.log('aso kobol')
// } else {
//  console.log('bag toi mogbol')
// }

// if (salary >= 25000 && height > 72 && isBcs == true) {
//  console.log('aso kobol')
// } else {
//  console.log('bag toi mogbol')
// }

//  Complex conditions

if ((salary > 25000 && hasCar == true) || isBcs == true) {
 console.log('aso kobol')
} else {
 console.log('aso mogbol')
}
const numbers = [12, 32, 53, 56];
//console.log(numbers);
// console.log(...numbers);
const max = Math.max(23, 54, 67, 89);
const maxInarray = Math.max(...numbers);
// console.log(max, maxInarray);

const numbers2 = [...numbers, 88];
numbers.push(66);
// console.log(numbers)
// console.log(numbers2);
const cars = ['toyota', 'honda', 'mercedes']; const newCars = [...cars, 'ferrari'];
console.log(newCars);
const max = Math.max(12, 13, 22, 33, 1, 5, 99, 7);
// console.log(max);
const numbers = [12, 33, 2, 44, 22];
const largest = Math.max(...numbers);
// console.log(numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];
const numbers4 = [44, ...numbers, 23, 11];
console.log(numbers4);
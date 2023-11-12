// breakup with var
// no more use of var
// let:let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi';
// const diye reassign kora somvob na , reassign korte hole tahole "let" diye korte hbe .
// bird='moyna pakhi';
const message = bird + ' ' + 'moyna pakhi';
console.log(message);

const numbers = [15, 12, 13, 14];
// reassign is not allowed
// numbers=[21,31,41,51];
numbers.push(222);
numbers[1] = 99;
console.log(numbers);

const student = {
    name: 'Sagor',
    address: 'Rangpur'
}
// reassign kora jay na
// student={name:'Saon'}

// perseal man bosano jay
student.name = 'Saon';
console.log(student);

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}




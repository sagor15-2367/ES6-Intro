const fish = {
    name: 'Sagor Alam',
    address: 'Rangpur',
    color: 'silver',
    phone: '01767211103',
    price: 4000
}

// const phone=fish.phone;
// const color=fish.color;
// const price=fish.price;

const { phone, name, address, color, price } = fish;

console.log(phone);
console.log(name);
console.log(color);
console.log(address);

const { age, nam } = { nam: 'Sagor', age: 25, profession: 'software engeener' };
console.log(age);

// Array destructuring
const [first, another] = [22, 11, 21, 44];
console.log(another);

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, now] = nayoks;
console.log(king);

function getName() {
    return ['Razzak', 'Rajaul'];
}
const [baba, chacha] = getName();
console.log(chacha, baba);

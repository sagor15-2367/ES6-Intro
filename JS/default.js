// function add(first, second) {
//     console.log(first, second);

//     // if (second === undefined) {
//     //     second = 0;
//     // }
//     //  Or
//     second = second || 0;

//     const total = first + second;
//     return total;
// }

// akhane second man ti 0 deyar karone - second ar jodi kono man na dei tahole 0 kei second man hisabe count korbe .
// same method to first
function add(first = 0, second = 0) {
    const total = first + second;
    return total;
}
const result = add(2, 5);
console.log(result);

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const nam = fullName('Salam');
console.log(nam);

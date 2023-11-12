const person = 'Adam Zamppa';
const person1 = "Ben Stones";
const person2 = `Donald Trump`;

const multiLine = 'First line text \n' +
    'second line of text \n' +
    'Third line of code \n' +
    'Fourth line of string';
//  console.log(multiLine);

const newMultiLine = `First line of text
Second line of text
third line of code
fourth line of string`
// console.log(newMultiLine);

const a = 10;
const b = 20;
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);
const newSummary = `summary of ${ a } and ${ b } is ${ a + b }`;
console.log(newSummary);
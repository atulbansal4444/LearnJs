/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip'
for this. It's not allowed to use an if/else statement 😅.
2. Print a string to the console containing the bill value,
the tip, and the fina lvalue (bill + tip). 
Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Test data:
Data 1: Test for bill values 275, 40 and 430
*/

//data1
let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//data2
bill = 40;
tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//data3
bill = 430;
tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
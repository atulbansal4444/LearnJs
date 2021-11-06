let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("BMI for Mark is " + markBMI);
console.log("BMI for John is " + johnBMI);
console.log("Mark has higher BMI = " + markHigherBMI);

//data 2
marksWeight = 95;
marksHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markBMI = marksWeight / marksHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

console.log("BMI for Mark is " + markBMI);
console.log("BMI for John is " + johnBMI);
console.log("Mark has higher BMI = " + markHigherBMI);
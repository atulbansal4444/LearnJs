marksWeight = 78;
marksHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;

markBMI = marksWeight / marksHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

//round off to 1 place decimal
markBMI = Math.round(markBMI * 10) / 10;
johnBMI = Math.round(johnBMI * 10) / 10;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
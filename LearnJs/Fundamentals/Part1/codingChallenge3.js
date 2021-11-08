const dolphinsScore = [96, 108, 89];
const koalasScore = [88, 91, 110];

const dolphinsAvg = (dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2]) / 3;
const koalasAvg = (koalasScore[0] + koalasScore[1] + koalasScore[2]) / 3;

if (dolphinsAvg === koalasAvg) {
    console.log("Draw");
} else if (dolphinsAvg >= koalasAvg) {
    console.log("Dolphons Win");
} else {
    console.log("Koalas Win");
}

// bonus 1
let dolphinsScore1 = [97, 112, 101];
let koalasScore1 = [109, 95, 123];

let dolphinsAvg1 = (dolphinsScore1[0] + dolphinsScore1[1] + dolphinsScore1[2]) / 3;
let koalasAvg1 = (koalasScore1[0] + koalasScore1[1] + koalasScore1[2]) / 3;

if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= 100) {
    console.log("Draw");
} else if (dolphinsAvg1 >= koalasAvg1 && dolphinsAvg1 >= 100) {
    console.log("Dolphons Win");
} else if (koalasAvg1 >= 100) {
    console.log("Koalas Win");
} else {
    console.log("No team qualifies");
}

//bonus 2
dolphinsScore1 = [97, 112, 101];
koalasScore1 = [109, 95, 106];

dolphinsAvg1 = (dolphinsScore1[0] + dolphinsScore1[1] + dolphinsScore1[2]) / 3;
koalasAvg1 = (koalasScore1[0] + koalasScore1[1] + koalasScore1[2]) / 3;

// console.log(dolphinsAvg1, koalasAvg1);

if (dolphinsAvg1 === koalasAvg1 && dolphinsAvg1 >= 100) {
    console.log("Draw");
} else if (dolphinsAvg1 >= koalasAvg1 && dolphinsAvg1 >= 100) {
    console.log("Dolphons Win");
} else if (koalasAvg1 >= 100) {
    console.log("Koalas Win");
} else {
    console.log("No team qualifies");
}
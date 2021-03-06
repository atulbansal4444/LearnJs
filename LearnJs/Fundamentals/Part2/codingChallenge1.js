'use strict';
/**
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
 * Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
 * A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
 * Your tasks:
 * 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores.
 * 2. Use the function to calculate the average for both teams.
 * 3. Create a function 'checkWinner' that takes the averages core of each team
      as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
 * 4. Use the 'checkWinner' function to determine the winner for both Data1 and Data 2
 * 5. Ignore draws this time.
    Test data:
    § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 */


//data 1
let dolphinsScore = [44, 23, 71];
let koalasScore = [65, 54, 49];

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

let avgDolhins = calcAverage(dolphinsScore[0], dolphinsScore[1], dolphinsScore[2]);
let avgKoalas = calcAverage(koalasScore[0], koalasScore[1], koalasScore[2]);

const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= 2 * avgKoalas) {
        return `Dolphin's win (${avgDolhins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolhins) {
        return `Koalas's win (${avgKoalas} vs. ${avgDolhins})`;
    } else {
        return 'No team wins';
    }
};

console.log(checkWinner(avgDolhins, avgKoalas));

// data 2
dolphinsScore = [85, 54, 41];
koalasScore = [23, 34, 27];

avgDolhins = calcAverage(dolphinsScore[0], dolphinsScore[1], dolphinsScore[2]);
avgKoalas = calcAverage(koalasScore[0], koalasScore[1], koalasScore[2]);

console.log(checkWinner(avgDolhins, avgKoalas));

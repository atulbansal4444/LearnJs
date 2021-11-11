// 'use strict';

// const private = 'pvt';
// console.log(private);

// x = 10;
// console.log(x);


const obj = {
    firstName: "",
    lastN: ""
}

function getFullName(firstName, lastN) {
    this.firstName = firstName;
    this.lastN = lastN;
    obj.firstName = firstName;
    obj.lastN = lastN;
    getOutput();
}

function getOutput() {
    console.log(this.firstName + " " + this.lastN);
    console.log(obj.firstName + " " + obj.lastN);
}

getFullName("Atul", "Bansal");
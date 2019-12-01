"use strict";

const readline = require("readline");
let rl;
function createIOStream(){
        rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
}

let arr1 = [];
let arr2 = [];

// let arr1 = ["test", "service2", "dev", "service4", "test5", "test6", "test7", "service8", "prod"];
// let arr2 = ["test6", "service2", "service4", "service8"];

function isEnd(input, array){
    if (input === "end") {
        console.log(array);
        rl.close();
        return true;
    }
}

function workOnArrays(array1, array2){
    console.log("Enter some words, type 'end' to finish array filling.");
    createIOStream();
    console.log("first array:");
    rl.on("line", (input) => {
        if(isEnd(input, array1)){
            createIOStream();
            console.log("second array:");
            rl.on("line", (input) => {
                if(isEnd(input, array2)){
                    arrayComparison(array1, array2);
                } else array2.push(input);
            });
        } else array1.push(input);
    });
}

function arrayComparison(array1, array2){
    let resultString = "";
    for (let i = 0; i < array1.length; i++) {
        let temp = 0;
        for (let j = 0; j < array2.length; j++) {
            if(array1[i] === array2[j]){
                temp = 1;
            }
        }
        resultString += temp;
    }
    console.log(resultString);
}

workOnArrays(arr1, arr2);
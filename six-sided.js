const prompt = require('prompt-sync')();

//Prompt user that by entering y a roll of the dice will occur.

const rollDice = prompt("Enter \"y\" to roll digital dice for a number 1-6.")

//Constant variables identified

const dicenumberOne = Number(1)
const dicenumberTwo = Number(2)
const dicenumberThree =Number(3)
const dicenumberFour =Number(4)
const dicenumberFive =Number(5)
const dicenumberSix = Number(6)
const randomNumgen = (Math.random())


//Input from prompt determines if program will run.

if (rollDice) {
    
    console.log("For information purposes", randomNumgen);
 
//Program runs if user inputs "y" then clicks enter. Will generally equally weighted number output.  Number 6 has two-tenths more likey to occur than other numbers

}
if (randomNumgen >= 0 && randomNumgen <= .16) {
    console.log("You rolled",dicenumberOne)
}else if (randomNumgen > .16 && randomNumgen <= .33) {
    console.log("You rolled",dicenumberTwo)
}else if (randomNumgen > .33 && randomNumgen <= .50) {
    console.log("You rolled",dicenumberThree)
}else if (randomNumgen > .50 && randomNumgen <= .67) {
    console.log("You rolled",dicenumberFour)
}else if (randomNumgen > .67 && randomNumgen <= .84) {
    console.log("You rolled",dicenumberFive)
}else if (randomNumgen >= .84 && randomNumgen <= .99) {
    console.log("You rolled",dicenumberSix)
}



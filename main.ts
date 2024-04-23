#!/usr/bin/env node 
import inquirer from "inquirer";
const number = Math.floor(Math.random()*10+1);
const answer = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message:"please guess a number between 1 to 10",
}])

if (answer.userGuessedNumber === number){
    console.log("congratulations");
}
else
{console.log("you guess wrong number")}
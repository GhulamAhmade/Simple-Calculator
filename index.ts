#! /usr/bin/env node

import inquirer from "inquirer";

const answere = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstnumber" },
  { message: "Enter your second number", type: "number", name: "Secondnumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name:"Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if(answere.Operator === "Addition"){
    console.log(answere.firstnumber + answere.Secondnumber);
} else if(answere.Operator === "Subtraction"){
    console.log(answere.firstnumber - answere.Secondnumber);
} else if(answere.Operator === "Multiplication"){
    console.log(answere.firstnumber * answere.Secondnumber);
} else if(answere.Operator === "Division"){
    console.log(answere.firstnumber / answere.Secondnumber);
} else{
    console.log("Please select valid operation")
}
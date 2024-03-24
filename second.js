#! /usr/bin/env node
import inquirer from "inquirer";
//Printing a welcome message
console.log("\n Welcome to \'CodeWithShahzaib\' - CLI Simple Calculator\n");
// Asking Question from users through inquirer
// inquirer means hum user se jo bhi question ans krty hai us se jo humy input  milta hai usko hum inquirer kehty hai
let answers = await inquirer.prompt([
    { message: " Enter first number", type: "number", name: "firstNumber" },
    { message: " Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    }
]);
//conditional operators  if-Else:
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Substraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("invalid input");
}

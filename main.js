import inquirer from "inquirer";
// Step 01
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter the first number",
    },
    {
        type: "list",
        name: "operators",
        message: "Choose the operator",
        choices: ["Addition", "Subtract", "Multiply", "Divide"],
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter a second number"
    }
]);
// Step 2
const { numberOne, operators, numberTwo } = answers;
let result;
switch (operators) {
    case "Addition":
        result = numberOne + numberTwo;
        break;
    case "Subtract":
        result = numberOne - numberTwo;
        break;
    case "Multiply":
        result = numberOne * numberTwo;
        break;
    case "Addition":
        result = numberOne / numberTwo;
        break;
    default:
        console.log("You use Invaild Operator");
}
console.log(`${numberOne}  ${operators} ${numberTwo} = ${result}`);

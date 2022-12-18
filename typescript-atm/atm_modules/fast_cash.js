import inquirer from "inquirer";
import transactionTypeRecruiter from "./trasactiontype.js";
import chalk from "chalk";
async function fastCash(currentBalance) {
    let amount = await inquirer.prompt([
        {
            name: "fast_cash_number",
            type: "list",
            choices: ["500", "1000", "5000", "10000", "20000"],
        },
    ]);
    if (currentBalance < Number(amount.fast_cash_number)) {
        console.log(chalk.rgb(255, 153, 0)(`Your Transaction in process!!!`));
        setTimeout(() => {
            console.log(chalk.rgb(255, 26, 26)(`Insufficient balance for the transaction`));
        }, 4000);
        setTimeout(() => {
            transactionTypeRecruiter(currentBalance);
        }, 6000);
    }
    else {
        setTimeout(() => {
            currentBalance = currentBalance - Number(amount.fast_cash_number);
            console.log(chalk.rgb(51, 153, 51)(`Your transaction is successful\n Your remaining balance is ${currentBalance}$`));
        }, 4000);
        setTimeout(() => {
            transactionTypeRecruiter(currentBalance);
        }, 6000);
    }
}
export default fastCash;

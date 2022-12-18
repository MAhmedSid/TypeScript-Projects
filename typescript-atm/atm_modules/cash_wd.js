import inquirer from "inquirer";
import transactionTypeRecruiter from "./trasactiontype.js";
import chalk from "chalk";
async function cashWithdrawal(currentBalance) {
    let wd_value = await inquirer.prompt([
        {
            name: "value",
            type: "number",
            message: "Enter the Withdrawal Amount",
        },
    ]);
    if (currentBalance < wd_value.value) {
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
            currentBalance = currentBalance - wd_value.value;
            console.log(chalk.rgb(51, 153, 51)(`Your transaction is successful\n Your remaining balance is ${currentBalance}$`));
        }, 4000);
        setTimeout(() => {
            transactionTypeRecruiter(currentBalance);
        }, 6000);
    }
}
export default cashWithdrawal;

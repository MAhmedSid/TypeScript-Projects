import inquirer from "inquirer";
import transactionTypeRecruiter from "./trasactiontype.js";
import chalk from "chalk";
async function accountTransfer(current_balance) {
    let account_details = await inquirer.prompt([
        {
            name: "account_number",
            type: "number",
            message: "Enter the Account Number (carefully)",
        },
        {
            name: "amount",
            type: "number",
            message: "Enter the Amount",
        },
    ]);
    let confirmation = await inquirer.prompt([
        {
            name: "user_answer",
            type: "input",
            message: `Do you confirm this transaction to "${account_details.account_number}"\n Enter 'Y' for yes OR 'N' for no:`,
            validate: (input) => {
                if (input.toLowerCase() == "y" || input.toLowerCase() == "n") {
                    return true;
                }
                else {
                    return false;
                }
            },
        },
    ]);
    if (confirmation.user_answer.toLowerCase() == "yes" ||
        confirmation.user_answer.toLowerCase() == "y") {
        if (current_balance < account_details.amount) {
            console.log(chalk.rgb(255, 153, 0)(`Your Transaction in process!!!`));
            setTimeout(() => {
                console.log(chalk.rgb(255, 26, 26)(`Insufficient balance for the transaction`));
            }, 4000);
            setTimeout(() => {
                transactionTypeRecruiter(current_balance);
            }, 6000);
        }
        else {
            setTimeout(() => {
                current_balance = current_balance - account_details.amount;
                console.log(chalk.rgb(51, 153, 51)(`Your transaction is successful\n Your remaining balance is ${current_balance}$`));
            }, 4000);
            setTimeout(() => {
                transactionTypeRecruiter(current_balance);
            }, 6000);
        }
    }
    else {
        setTimeout(() => {
            transactionTypeRecruiter(current_balance);
        }, 6000);
    }
}
export default accountTransfer;

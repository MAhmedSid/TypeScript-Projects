import inquirer from "inquirer";
import transactionTypeRecruiter from "./trasactiontype.js";
import UtilityBills from "./utilityBill.js";
import accountTransfer from "./accountTransfer.js";
async function transactionOptions(current_balance) {
    let options = await inquirer.prompt([
        {
            name: "type",
            type: "list",
            choices: ['Utility Bills', 'Account Transfer', 'Back'],
            message: "Select your required transaction",
        }
    ]);
    switch (options.type) {
        case "Utility Bills":
            UtilityBills(current_balance);
            break;
        case "Account Transfer":
            accountTransfer(current_balance);
            break;
        case "Back":
            transactionTypeRecruiter(current_balance);
            break;
    }
}
export default transactionOptions;

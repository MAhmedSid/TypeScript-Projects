import inquirer from "inquirer";
import transactionTypeRecruiter from "./trasactiontype.js";
import chalk from "chalk";

async function UtilityBills(current_balance: number) {
  let bill_info = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: "Enter the amount:",
    },
    {
      name: "bill_id",
      type: "number",
      message: "Enter the Bill ID(no.)",
    },
  ]);

  if (current_balance < bill_info.amount) {
    console.log(chalk.white(`Your Transaction in process!!!`));

    setTimeout(() => {
      console.log(
        chalk.rgb(255, 26, 26)(`Insufficient balance for the transaction`)
      );
    }, 4000);
    setTimeout(() => {
      transactionTypeRecruiter(current_balance);
    }, 6000);
  } else {
    console.log(chalk.rgb(255, 153, 0)(`Your Transaction in process!!!`));

    await setTimeout(() => {
      console.log(
        chalk.rgb(
          51,
          153,
          51
        )(
          `Your transaction is successful\n Your remaining balance is ${current_balance}$`
        )
      );
      current_balance = current_balance - bill_info.amount;
    }, 4000);

    setTimeout(() => {
      transactionTypeRecruiter(current_balance);
    }, 6000);
  }
}

export default UtilityBills;

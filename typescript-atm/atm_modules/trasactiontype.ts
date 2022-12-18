import inquirer from "inquirer";
import cashWithdrawal from "./cash_wd.js";
import fastCash from "./fast_cash.js";
import transactionOptions from "./transferPayment.js";
import chalk from "chalk";

async function transactionTypeRecruiter(current_balance: number) {
  const required_tsc = await inquirer.prompt([
    {
      name: "tsc_type",
      type: "list",
      message: "Select Your Transaction",
      choices: [
        "Cash Withdrawal",
        "Fast Cash",
        "Transfer & Payments",
        "Balance Enquiry",
        "Exit",
      ],
    },
  ]);

  switch (required_tsc.tsc_type) {
    case "Cash Withdrawal":
      cashWithdrawal(current_balance);
      break;
    case "Fast Cash":
      fastCash(current_balance);
      break;

    case "Transfer & Payments":
      transactionOptions(current_balance);
      break;

    case "Balance Enquiry":
      console.log(chalk.rgb(255, 153, 0)(`Your Transaction in process!!!`));

      await setTimeout(() => {
        chalk.rgb(
          51,
          153,
          51
        )(console.log(`Your current amount is ${current_balance}$`));
      }, 4000);

      setTimeout(() => {
        transactionTypeRecruiter(current_balance);
      }, 6000);

      break;
    case "Exit":
      console.log(
        chalk.rgb(51, 153, 51)("Hope you have good experience with us")
      );
      break;
  }
}

export default transactionTypeRecruiter;

import inquirer from "inquirer";
import randomInteger from "random-int";
import chalk from "chalk";

async function login(current_balance: number) {
  console.log(
    "\t Thankyou for using" + chalk.rgb(0, 255, 153)(" WAFADAAR Bank Ltd. ATM")
  );

  let user_data: { user_id: string; user_password: number } =
    await inquirer.prompt([
      {
        name: "user_id",
        type: "input",
        message: "Please provide your 'User-ID'",
      },
      {
        name: "user_password",
        type: "password",
        validate: async (input) => {
          let input_number = Number(input);
          let input_length = input.length;
          let input_value = Number.isInteger(input_number);
          if (input_value !== true || input_length !== 4) {
            console.log("Please enter the correct Pin!");
            return false;
          } else {
            return true;
          }
        },
        message: "Enter 4-digit Pin",
      },
    ]);

  console.log("Logging in!!!");
  setTimeout(() => {
    console.log(
      chalk.rgb(
        0,
        153,
        255
      )(
        `You logged in Successfully! \n\nName:${
          user_data.user_id
        }\nAccount Number : usd${randomInteger(
          1000000000000,
          1999999999999
        )}    \nCurrent Balance : ${current_balance}$`
      )
    );
  }, 3000);
}

export default login;

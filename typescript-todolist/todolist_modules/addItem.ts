import inquirer from "inquirer";
import menu from "./menu.js";

let addItem = async (arrayOfTasks: string[]) => {
  const item = await inquirer.prompt([
    {
      name: "items",
      type: "string",
      message: "Enter your Item: ",
    },
  ]);

  arrayOfTasks.push(item.items);
  menu(arrayOfTasks);
};

export default addItem;

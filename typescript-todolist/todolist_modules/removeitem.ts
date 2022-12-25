import inquirer from "inquirer";
import menu from "./menu.js";

let removeItem = async (arrayOFTasks: string[]) => {
  if (arrayOFTasks.length === 0) {
    console.log("List is Empty");
    menu(arrayOFTasks);
    return;
  } else {
    const item = await inquirer.prompt([
      {
        name: "items",
        type: "list",
        message: "Select Item to remove: ",
        choices: arrayOFTasks,
      },
    ]);

    let index = arrayOFTasks.indexOf(item.items);
    arrayOFTasks.splice(index, 1);

    console.log(`Item removed.`);
    menu(arrayOFTasks);
  }
};

export default removeItem;

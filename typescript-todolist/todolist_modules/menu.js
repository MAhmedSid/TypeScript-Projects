import inquirer from "inquirer";
import addItem from "./addItem.js";
import Display from "./display.js";
import removeItem from "./removeitem.js";
let menu = async (arrayOfTasks) => {
    let option = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Todo List",
            choices: ["Display List", "Add Item", "Remove Item", "Quit"]
        }
    ]);
    switch (option.options) {
        case "Display List":
            Display(arrayOfTasks);
            break;
        case "Add Item":
            addItem(arrayOfTasks);
            break;
        case "Remove Item":
            removeItem(arrayOfTasks);
            break;
        case "Quit":
            console.log("Hope you have completed your tasks... Stay Happy");
            break;
        default:
            console.log("Something wrong in an operating program!");
            break;
    }
};
export default menu;

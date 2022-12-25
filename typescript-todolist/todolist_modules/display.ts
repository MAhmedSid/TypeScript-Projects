import menu from "./menu.js";

let Display = (arrayOfTasks: string[]) => {
  if (arrayOfTasks.length === 0) {
    console.log(`List is Empty`);
    menu(arrayOfTasks);
  } else {
    for (let i = 0; i < arrayOfTasks.length; i++) {
      console.log(`${i + 1} - ${arrayOfTasks[i]}`);
    }
    menu(arrayOfTasks);
  }
};

export default Display;

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let author = chalkAnimation.karaoke("Calculator has started!");
    await sleep();
    console.log(chalk.blue(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________| 
   `));
    author.stop();
}
async function calculation() {
    await welcome();
    const answers = await inquirer
        .prompt([
        {
            type: 'list',
            name: 'operator',
            message: 'Which operation do you want to perform? ',
            choices: ['Addition', 'Subraction', 'Multiplication', 'Division']
        },
        {
            type: 'number',
            name: 'num1',
            message: 'Enter number 1: '
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter number 2: '
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.magentaBright.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        ;
    }
    else if (answers.operator == "Subraction") {
        console.log(chalk.magentaBright.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        ;
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.magentaBright.green(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`));
        ;
    }
    else {
        console.log(chalk.magentaBright.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        ;
    }
}
calculation();

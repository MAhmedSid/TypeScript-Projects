#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";




console.log(chalk.rgb(255, 102, 0)(` ██████   █████  ███    ███ ███████     ███████ ████████  █████  ██████  ████████ ██ ███    ██  ██████ 
██       ██   ██ ████  ████ ██          ██         ██    ██   ██ ██   ██    ██    ██ ████   ██ ██      
██   ███ ███████ ██ ████ ██ █████       ███████    ██    ███████ ██████     ██    ██ ██ ██  ██ ██   ███ 
██    ██ ██   ██ ██  ██  ██ ██               ██    ██    ██   ██ ██   ██    ██    ██ ██  ██ ██ ██    ██ 
 ██████  ██   ██ ██      ██ ███████     ███████    ██    ██   ██ ██   ██    ██    ██ ██   ████  ██████  ██ ██ ██ \n\n`


))
console.log(chalk.bold(` ----- IN THIS GAME YOU HAVE 3 CHANCE TO FIND THE HIDDEN NUMBER AND EVERY CHANCE WILL GIVE YOU THE HINT. ------ \n\n `))

const player_name = await inquirer.prompt([
    {
        name:"user",
        type:"input",
        message:"Hey Player! Enter your name:"
    }
])

async function guessingFunc(){
    


        let random_num = Math.ceil((Math.random()*9)+1);
        // console.log(random_num);   //this line will print hidden number for testing purpose;
         let guess = true;
    for(let i = 3 ; guess ; i--){ 

   

        if(i == 0){
            console.log(chalk.rgb(255, 46, 46)(`            ██    ██  ██████  ██    ██     ██       ██████  ███████ ███████ 
             ██  ██  ██    ██ ██    ██     ██      ██    ██ ██      ██      
              ████   ██    ██ ██    ██     ██      ██    ██ ███████ █████ 
               ██    ██    ██ ██    ██     ██      ██    ██      ██ ██    
               ██     ██████   ██████      ███████  ██████  ███████ ███████ 
                                                                            

            ████████ ██████  ██    ██      █████   ██████   █████  ██ ███    ██ 
               ██    ██   ██  ██  ██      ██   ██ ██       ██   ██ ██ ████   ██ 
               ██    ██████    ████       ███████ ██   ███ ███████ ██ ██ ██  ██ 
               ██    ██   ██    ██        ██   ██ ██    ██ ██   ██ ██ ██  ██ ██ 
               ██    ██   ██    ██        ██   ██  ██████  ██   ██ ██ ██   ████ 
                                                                                

`));
            
            guess=false

            restartGame()
            return
        }

       const user_input = await inquirer.prompt([
            {
                name: 'user_num',
                type: Number,
                message:` You have ${String(i)} Chance. \n Guess the hidden number between 1-10 :` 
            }
        ]
        )
             if(user_input.user_num == random_num){
            console.log(chalk.rgb(49, 211, 89)
            (`



            ██████  ██████  ███    ██  ██████  ██████   █████  ████████ ███████ ██ ██ 
           ██      ██    ██ ████   ██ ██       ██   ██ ██   ██    ██    ██      ██ ██ 
           ██      ██    ██ ██ ██  ██ ██   ███ ██████  ███████    ██    ███████ ██ ██ 
           ██      ██    ██ ██  ██ ██ ██    ██ ██   ██ ██   ██    ██         ██       
            ██████  ██████  ██   ████  ██████  ██   ██ ██   ██    ██    ███████ ██ ██ 
                                                                                      
           
           ██    ██  ██████  ██    ██     ██     ██ ██ ███    ██ ██ 
            ██  ██  ██    ██ ██    ██     ██     ██ ██ ████   ██ ██ 
             ████   ██    ██ ██    ██     ██  █  ██ ██ ██ ██  ██ ██ 
              ██    ██    ██ ██    ██     ██ ███ ██ ██ ██  ██ ██    
              ██     ██████   ██████       ███ ███  ██ ██   ████ ██ 
                                                                    
           
           `));
           restartGame()
            guess = false;
            }else if(user_input.user_num > random_num  ){
                console.log(chalk.rgb(148, 77, 255).bold("Your guess is greater than hidden number, try again."));    
            }else{
                console.log(chalk.rgb(242, 38, 38).bold("Your number is less than hidden number, try again."));
                
            }
    }
    }



    // FUNCTION USED TO RESTART THE GAME
   async function restartGame(){
        let ask_user= await inquirer.prompt([
            {
                name:"restart",
                type:"input",
                message: chalk.italic.white(`Do you want to play Again ? 'Y' for YES and 'N' for NO`)
            }
        ]
        )

        if(ask_user.restart.toLowerCase() == "y" || ask_user.restart.toLowerCase() == "yes"){
            guessingFunc();
        }else{
           console.log(chalk.cyanBright.bold(`Hope you enjoyed the game! ${player_name.user}`))
        }
    }


    guessingFunc();
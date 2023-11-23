#!/usr/bin/env node

import { Command } from "commander";
import { makeExampleCommand } from "./scripts/example/index.js";
import { makeCreateService } from "./scripts/createService/index.js";
import inquirer from "inquirer";

// Создаем экземляр

const program = new Command();

export const PROMPTS = [
  {
    type: "input",
    name: "message",
    message: "Какую команду ты хочешь запустить?",
    filter: String,
  },
];

// Замутить штуку с подсказкой, Какую команду ты хочешь запустить? Чтобы можно было в консольке стрелками выбрать команду и жмякнуть enter. После чего запуститься та или иная команда
// program
//   .command("start-cli")
//   .action(() => {
//     // await inquirer.prompt(PROMPTS).then((answer) => {
//     //   program;
//     // });
//     // console.log(program.commands.map((command) => command._name));
//   })
//   .hook("postAction", (thisCommand: Command, actionCommand: Command) => {
//     console.log(thisCommand.opts().name);

//     console.log(actionCommand.opts().name);
//   });

program.addCommand(makeExampleCommand());

program.addCommand(makeCreateService());

program.parse(process.argv);

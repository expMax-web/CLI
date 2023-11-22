#!/usr/bin/env node

import { Command } from "commander";
import { makeExampleCommand } from "./scripts/example/index.js";
import { makeCreateService } from "./scripts/createService/index.js";

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
// program.action(() => {
//   inquirer.prompt(PROMPTS).then((answer) => {
//     program
//   });
// });

program.addCommand(makeExampleCommand());

program.addCommand(makeCreateService());

program.parse(process.argv);

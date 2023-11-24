#!/usr/bin/env node

import { Command } from "commander";
import { makeExampleCommand } from "./scripts/example/index.js";
import { makeCreateService } from "./scripts/createService/index.js";
import inquirer from "inquirer";
import { createTemplate } from "./scripts/createService/createService.js";
import { exampleFunction } from "./scripts/example/exampleCommand.js";

// Создаем экземляр

const program = new Command();

export const PROMPTS = [
  {
    type: "list",
    name: "command",
    message: "Какую команду ты хочешь запустить?",
    choices: ["example", "createService"],
  },
];

// Замутить штуку с подсказкой, Какую команду ты хочешь запустить? Чтобы можно было в консольке стрелками выбрать команду и жмякнуть enter. После чего запуститься та или иная команда
program.action(async () => {
  await inquirer.prompt(PROMPTS).then((answer: { command: string }) => {
    console.log(answer);

    switch (answer.command) {
      case "example": {
        exampleFunction();
        return;
      }

      case "createService": {
        createTemplate();
        return;
      }
    }
  });
});

program.addCommand(makeExampleCommand());

program.addCommand(makeCreateService());

program.parse(process.argv);

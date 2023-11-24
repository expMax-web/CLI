#!/usr/bin/env node

import { Command } from "commander";
import { makeExampleCommand } from "./scripts/example/index.js";
import { makeCreateService } from "./scripts/createService/index.js";
import inquirer, {
  QuestionCollection,
  Answers as InquirerAnswers,
} from "inquirer";
import { createTemplate } from "./scripts/createService/createService.js";
import { exampleFunction } from "./scripts/example/exampleCommand.js";

const program = new Command();

type Answers = {
  command: string;
};

export const PROMPTS: QuestionCollection[] = [
  {
    type: "list",
    name: "command",
    message: "Какую команду ты хочешь запустить?",
    choices: ["example", "createService"],
  },
];

program.action(async () => {
  await inquirer.prompt(PROMPTS).then((value: InquirerAnswers) => {
    const answer = value as Answers;

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

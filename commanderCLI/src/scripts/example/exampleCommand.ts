#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import { PROMPTS } from "./prompts.js";
import { Answers } from "./types.js";

export const exampleFunction = () => {
  inquirer.prompt(PROMPTS).then((answer: Answers) => {
    console.log(answer.message);
  });
};

export function makeExampleCommand() {
  const example = new Command("example")
    .description("Тестовая команда для вывода любого сообщения в console.log")
    .action(exampleFunction);

  return example;
}

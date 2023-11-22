#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import { PROMPTS } from "./prompts.js";
import { Answers } from "./types.js";

export function makeExampleCommand() {
  const example = new Command("example")
    .description("Test command for sending a message to console.log")
    .action(() => {
      inquirer.prompt(PROMPTS).then((answer: Answers) => {
        console.log(answer.message);
      });
    });

  return example;
}

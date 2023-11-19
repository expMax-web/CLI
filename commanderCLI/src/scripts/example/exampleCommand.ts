#!/usr/bin/env node

import { createCommand } from "commander";
import inquirer from "inquirer";
import { PROMPTS } from "./prompts.js";
import { Answers } from "./types.js";

// Declare the program

export const exampleCommand = createCommand();

// Add actions onto that CLI

exampleCommand
  .name("console")
  .action(() => {
    inquirer.prompt(PROMPTS).then((answer: Answers) => {
      console.log(answer.message);
    });
  })
  .description("Test command for sending a message to console.log");

// Execute the CLI with the given arguments

exampleCommand.parse(process.argv);

#!/usr/bin/env node

import { createCommand } from "commander";

// Declare the program

export const createService = createCommand();

// Add actions onto that CLI

createService
  .name("createService")
  .action(() => {
    console.log("Должен скопировать шаблон услуги в твою директорию");
  })
  .description("Копировует шаблон услуги в директорию");

// Execute the CLI with the given arguments

createService.parse(process.argv);

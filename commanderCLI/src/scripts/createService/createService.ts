#!/usr/bin/env node
import { Command } from "commander";

export function makeCreateService() {
  const service = new Command("createService")
    .description("Копирует шаблон услуги в директорию")
    .action(() => {
      console.log("Скопировал шаблон услуги в твою директорию");
    });

  return service;
}

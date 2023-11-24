#!/usr/bin/env node

import { Command } from "commander";
import { Plop, run } from "plop";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const createTemplate = () => {
  Plop.prepare(
    {
      configPath: resolve(__dirname, "../../../plopfile.js"),
    },
    (env) => Plop.execute(env, run as any)
  );
};

export function makeCreateService() {
  const service = new Command("createService")
    .description("Копирует шаблон услуги в директорию")
    .action(createTemplate);

  return service;
}

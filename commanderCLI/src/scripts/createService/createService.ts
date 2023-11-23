#!/usr/bin/env node

import { Command } from "commander";
import path from "node:path";
import { Plop, run } from "plop";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function makeCreateService() {
  const service = new Command("createService")
    .description("Копирует шаблон услуги в директорию")
    .action(() => {
      console.log(__dirname);

      Plop.prepare(
        {
          configPath: path.resolve(__dirname, "../../../plopfile.js"),
        },
        (env) => Plop.execute(env, run as any)
      );
    });

  return service;
}

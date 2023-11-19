#!/usr/bin/env node

import { createCommand } from "commander";
import { exampleCommand } from "./scripts/example/index.js";
import { createService } from "./scripts/createService/index.js";

// Создаем экземляр
export const programCLI = createCommand();

programCLI.addCommand(createService);

// programCLI.addCommand(exampleCommand);

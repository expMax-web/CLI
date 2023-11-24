import { NodePlopAPI } from "plop";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const currentPath = process.cwd();

const templatePath = path.join(
  path.resolve(__dirname, "../"),
  "src/template/DemoComponent.tsx"
);

export default function (plop: NodePlopAPI) {
  plop.setGenerator("create-component", {
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter service name",
      },
    ],
    actions: [
      {
        type: "add",
        path: path.join(
          currentPath,
          "components/{{pascalCase name}}/{{pascalCase name}}.tsx"
        ),
        templateFile: templatePath,
        transform: (template, { name }) => {
          return template.replace("DemoComponent", name);
        },
      },
    ],
  });
}

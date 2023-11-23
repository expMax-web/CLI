import { NodePlopAPI } from "plop";

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
        path: "src/app/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "src/template/DemoComponent.tsx",
        transform: (template, { name }) => {
          return template.replace("DemoComponent", name);
        },
      },
    ],
  });
}

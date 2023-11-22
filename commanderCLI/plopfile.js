module.exports = function (plop) {
  plop.setGenerator("create-modal-service-template", {
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
        path: "src/app/components/{{pascalCase name}}/{{pascalCase name}}/tsx",
        templateFile: "src/templete/DemoComponent",
        tramsform: (template, { name }) => {
          return template.replace("DemoComponent", name);
        },
      },
    ],
  });
};

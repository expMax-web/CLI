export const PROMPTS = [
  {
    type: "input",
    name: "message",
    message: "Что ты хочешь вывести в консоль?",
    validate(value: string) {
      const valid = typeof value === "string";
      return valid || "Please enter string";
    },
    filter: String,
  },
];

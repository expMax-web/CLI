export const PROMPTS = [
  {
    type: "input",
    name: "message",
    message: "What do you want to display in the console",
    validate(value: string) {
      const valid = typeof value === "string";
      return valid || "Please enter string";
    },
    filter: String,
  },
];

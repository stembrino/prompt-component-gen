import path from "path";

import startPrompt from "./prompt.js";
import * as templates from "./templates.js";

async function createTemplates({
  hasStorybook,
  componentName,
  templatePathParam,
}: any) {
  console.info("INFO: has storybook:", hasStorybook);
  console.info("INFO: component name:", componentName);
  console.info("INFO: template path param:", templatePathParam);

  const componentPath = templatePathParam ? `src/${templatePathParam}/` : "src";
  const templatePath = path.join(componentPath, componentName);
  console.log(templatePath);

  hasStorybook &&
    templates.createStorybookTemplate(componentName, templatePath);
  templates.createStylesTemplate(componentName, templatePath);
  templates.createComponentTemplate(componentName, templatePath);
  templates.createIndexTemplate(componentName, templatePath);
  templates.createTestTemplate(componentName, templatePath);
  templates.createTypesTemplate(componentName, templatePath);
}

async function main() {
  const answers = await startPrompt();
  createTemplates(answers);
}

main();

export {};

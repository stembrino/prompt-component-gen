import fs from "fs";
import path from "path";

import componentTemplate from "./templates/component.js";
import * as types from "./templates/types.js";
import stylesTemplate from "./templates/styles.js";
import variantsTemplate from "./templates/variants.js";
import testTemplate from "./templates/test.js";
import indexTemplate from "./templates/index.js";
import * as storybookTemplate from "./templates/storybook.js";

export function createComponentTemplate(
  componentName: string,
  templatePath: string
) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `${componentName}.tsx`),
    componentTemplate(componentName)
  );
}

export function createTypesTemplate(
  componentName: string,
  templatePath: string
) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `types.ts`),
    types.template(componentName)
  );
}

export function createTypesTemplateWithVariants(
  componentName: string,
  templatePath: string
) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `types.ts`),
    types.templateWithVariants(componentName)
  );
}

export function createStylesTemplate(templatePath: string) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `styles.module.css`),
    stylesTemplate()
  );
}

export function createVariantsTemplate(templatePath: string) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(path.join(templatePath, `variants.ts`), variantsTemplate());
}

export function createTestTemplate(
  componentName: string,
  templatePath: string
) {
  fs.mkdirSync(`${templatePath}/_tests`, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `_tests/${componentName}.test.tsx`),
    testTemplate(componentName)
  );
}

export function createIndexTemplate(
  componentName: string,
  templatePath: string
) {
  fs.mkdirSync(templatePath, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, "index.ts"),
    indexTemplate(componentName)
  );
}

export function createStorybookTemplate(
  componentName: string,
  templatePath: string
) {
  fs.mkdirSync(`${templatePath}/_storybook/`, { recursive: true });
  fs.writeFileSync(
    path.join(templatePath, `_storybook/${componentName}.stories.tsx`),
    storybookTemplate.stories(componentName)
  );
  fs.writeFileSync(
    path.join(templatePath, `_storybook/${componentName}.mdx`),
    storybookTemplate.docs(componentName)
  );
}

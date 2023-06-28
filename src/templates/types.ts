export const template = (componentName: string) =>
  `export interface ${componentName}Props {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
`;

export const templateWithVariants = (componentName: string) =>
  `import { type VariantProps } from "class-variance-authority";
import { variants } from "./variants";

export interface ${componentName}Props extends VariantProps<typeof variants> {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
`;

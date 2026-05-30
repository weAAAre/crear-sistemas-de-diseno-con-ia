import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDirectory = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-designs"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  viteFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@taller/design-system": resolve(currentDirectory, "../../../packages/design-system/src/index.ts")
      }
    }
  }),
  typescript: {
    reactDocgen: false
  }
};

export default config;

import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  parameters: {
    a11y: {
      test: "todo"
    },
    controls: {
      expanded: true
    },
    docs: {
      toc: true
    }
  }
};

export default preview;

import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Checkbox,
  checkboxAnalysisSource,
  checkboxContract,
  checkboxTokenReference
} from "@taller/design-system";

import "./checkbox-story.css";

const figmaBaseUrl =
  "https://www.figma.com/design/otL8MTLehdw3tXsfAPmsOK/New-York-State-Design-System--Community-";

const figmaNodeUrl = (nodeId: string) => `${figmaBaseUrl}?node-id=${nodeId.replace(":", "-")}`;

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl(checkboxAnalysisSource.componentSetNodeId)
    },
    docs: {
      description: {
        component: [
          "Standalone Checkbox implementation based on the Figma analysis reference.",
          `Source: ${checkboxAnalysisSource.componentSetName} (${checkboxAnalysisSource.componentSetNodeId}), ${checkboxAnalysisSource.variantCount} variants inspected.`,
          "NYS Checkbox Group is a separate Figma component set and is intentionally not implemented in this pass."
        ].join("\n\n")
      }
    }
  },
  argTypes: {
    size: {
      control: "select",
      options: checkboxContract.sizes
    },
    tile: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    required: {
      control: "boolean"
    },
    defaultSelected: {
      control: "boolean"
    },
    isSelected: {
      control: false
    },
    onChange: {
      control: false
    }
  },
  args: {
    children: "I accept the terms and conditions",
    description: "",
    disabled: false,
    errorMessage: "",
    required: false,
    size: "md",
    tile: false
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl("4102:9217")
    }
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="checkbox-story-stack">
      {checkboxContract.sizes.map((size) => (
        <Checkbox key={size} size={size}>
          {size}
        </Checkbox>
      ))}
    </div>
  )
};

export const SelectedAndUnchecked: Story = {
  render: () => (
    <div className="checkbox-story-stack">
      <Checkbox defaultSelected>Selected</Checkbox>
      <Checkbox>Unchecked</Checkbox>
    </div>
  )
};

export const Disabled: Story = {
  render: () => (
    <div className="checkbox-story-stack">
      <Checkbox disabled>Unchecked disabled</Checkbox>
      <Checkbox defaultSelected disabled>
        Selected disabled
      </Checkbox>
    </div>
  )
};

export const Error: Story = {
  args: {
    children: "I accept the terms and conditions",
    errorMessage: "Select this checkbox to continue.",
    required: true
  },
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl("4102:9253")
    }
  }
};

export const WithDescription: Story = {
  args: {
    children: "I accept the terms and conditions",
    description:
      "By checking this box, you confirm that you have read and accepted the terms governing use of this service.",
    required: true
  },
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl("4102:9273")
    }
  }
};

export const Tile: Story = {
  render: () => (
    <div className="checkbox-story-stack">
      <Checkbox tile>Tile unchecked</Checkbox>
      <Checkbox defaultSelected tile>
        Tile selected
      </Checkbox>
      <Checkbox
        description="Tile checkboxes can include supporting text when the Figma description axis is enabled."
        tile
      >
        Tile with description
      </Checkbox>
    </div>
  ),
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl("4102:9417")
    }
  }
};

export const Required: Story = {
  args: {
    children: "Required checkbox",
    required: true
  }
};

export const KeyboardFocus: Story = {
  render: () => (
    <div className="checkbox-story-stack">
      <Checkbox>First checkbox</Checkbox>
      <Checkbox defaultSelected>Second checkbox</Checkbox>
      <Checkbox disabled>Disabled checkbox</Checkbox>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use Tab to focus each enabled checkbox and Space to toggle selection."
      }
    }
  }
};

export const TokenReference: Story = {
  render: () => (
    <dl className="checkbox-story-tokens">
      {Object.entries(checkboxTokenReference.color).map(([name, token]) => (
        <div className="checkbox-story-token" key={name}>
          <dt>
            <span className="checkbox-story-swatch" style={{ background: token.value }} />
            {name}
          </dt>
          <dd>
            <code>{token.token}</code>
            <span>{token.value}</span>
          </dd>
        </div>
      ))}
    </dl>
  ),
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl(checkboxAnalysisSource.componentSetNodeId)
    },
    docs: {
      description: {
        story: "Token names and resolved values sampled from the Figma analysis contract."
      }
    }
  }
};

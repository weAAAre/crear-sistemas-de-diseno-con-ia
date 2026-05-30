import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, buttonAnalysisSource, buttonContract, buttonTokenReference } from "@taller/design-system";

import "./button-story.css";

const figmaBaseUrl =
  "https://www.figma.com/design/otL8MTLehdw3tXsfAPmsOK/New-York-State-Design-System--Community-";

const figmaNodeUrl = (nodeId: string) => `${figmaBaseUrl}?node-id=${nodeId.replace(":", "-")}`;

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl(buttonAnalysisSource.componentSetNodeId)
    },
    docs: {
      description: {
        component: [
          "First Button implementation based on the Figma analysis reference.",
          `Source: ${buttonAnalysisSource.componentSetName} (${buttonAnalysisSource.componentSetNodeId}), ${buttonAnalysisSource.variantCount} variants inspected.`,
          "This is intentionally small: it covers the discovered axes and representative tokens, but it does not claim final design-system parity."
        ].join("\n\n")
      }
    }
  },
  argTypes: {
    variant: {
      control: "select",
      options: buttonContract.variants
    },
    size: {
      control: "select",
      options: buttonContract.sizes
    },
    shape: {
      control: "select",
      options: buttonContract.shapes
    },
    inverted: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    isPending: {
      control: "boolean"
    },
    prefixIcon: {
      control: false
    },
    suffixIcon: {
      control: false
    }
  },
  args: {
    children: "Save",
    size: "md",
    variant: "filled",
    shape: "rectangle",
    inverted: false,
    disabled: false,
    isPending: false
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl("3981:8546")
    }
  }
};

export const Variants: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl(buttonAnalysisSource.componentSetNodeId)
    }
  },
  render: () => (
    <div className="button-story-grid">
      {buttonContract.variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  )
};

export const Sizes: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl(buttonAnalysisSource.componentSetNodeId)
    }
  },
  render: () => (
    <div className="button-story-grid">
      {buttonContract.sizes.map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  )
};

export const Disabled: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl("3981:8644")
    }
  },
  render: () => (
    <div className="button-story-grid">
      {buttonContract.variants.map((variant) => (
        <Button disabled key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  )
};

export const Pending: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl(buttonAnalysisSource.componentSetNodeId)
    },
    docs: {
      description: {
        story:
          "React Aria pending behavior keeps the button focusable while suppressing press and hover interactions."
      }
    }
  },
  render: () => (
    <div className="button-story-grid">
      {buttonContract.variants.map((variant) => (
        <Button isPending key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  )
};

export const WithIcons: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl("3981:8536")
    }
  },
  render: () => (
    <div className="button-story-grid">
      <Button prefixIcon={<span>+</span>}>Create</Button>
      <Button suffixIcon={<span aria-hidden="true">→</span>} variant="outline">
        Continue
      </Button>
      <Button iconOnlyLabel="Add item" prefixIcon={<span>+</span>} shape="circle" />
    </div>
  )
};

export const Inverted: Story = {
  parameters: {
    design: {
      type: "figma",
      url: figmaNodeUrl(buttonAnalysisSource.componentSetNodeId)
    }
  },
  render: () => (
    <div className="button-story-inverted">
      {buttonContract.variants.map((variant) => (
        <Button inverted key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  )
};

export const TokenReference: Story = {
  render: () => (
    <dl className="button-story-tokens">
      {Object.entries(buttonTokenReference.color).map(([name, token]) => (
        <div className="button-story-token" key={name}>
          <dt>
            <span className="button-story-swatch" style={{ background: token.value }} />
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
      url: figmaNodeUrl(buttonAnalysisSource.componentSetNodeId)
    },
    docs: {
      description: {
        story: "Token names and resolved values sampled from the Figma analysis contract."
      }
    }
  }
};

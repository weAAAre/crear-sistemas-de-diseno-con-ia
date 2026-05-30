export const checkboxAnalysisSource = {
  designSystem: "New York State Design System (Community)",
  figmaUrl:
    "https://www.figma.com/design/otL8MTLehdw3tXsfAPmsOK/New-York-State-Design-System--Community-?node-id=3950-17604",
  pageNodeId: "3950:17604",
  componentSetName: "NYS Checkbox",
  componentSetNodeId: "4102:9216",
  checkboxGroupComponentSetNodeId: "4102:9601",
  variantCount: 64
} as const;

export const checkboxContract = {
  sizes: ["sm", "md"],
  states: ["default", "hover", "pressed"],
  booleans: ["checked", "disabled", "tile", "error", "required", "description"],
  textProperties: ["label", "description", "errorMessage", "ariaLabel"]
} as const;

export type CheckboxSize = (typeof checkboxContract.sizes)[number];
export type CheckboxState = (typeof checkboxContract.states)[number];

export type CheckboxReferenceProps = {
  readonly label?: string;
  readonly description?: string;
  readonly errorMessage?: string;
  readonly ariaLabel?: string;
  readonly size?: CheckboxSize;
  readonly checked?: boolean;
  readonly disabled?: boolean;
  readonly required?: boolean;
  readonly tile?: boolean;
};

export const checkboxSizeReference = {
  sm: {
    controlSize: 24,
    borderWidth: 1,
    radius: 2,
    gap: 8,
    tokens: {
      controlSize: "!-nys/size/300",
      borderWidth: "!-nys/border-width/sm",
      radius: "!-nys/radius/sm",
      gap: "!-nys/space/100",
      fontSize: "!-nys/font-size/ui/md",
      lineHeight: "!-nys/font-lineheight/ui/md"
    }
  },
  md: {
    controlSize: 32,
    borderWidth: 2,
    radius: 4,
    gap: 12,
    tokens: {
      controlSize: "!-nys/size/400",
      borderWidth: "!-nys/border-width/md",
      radius: "!-nys/radius/md",
      gap: "!-nys/space/150",
      fontSize: "!-nys/font-size/ui/md",
      lineHeight: "!-nys/font-lineheight/ui/md"
    }
  }
} as const;

export const checkboxTokenReference = {
  color: {
    theme: { token: "!-nys/color-#/theme", value: "#154973" },
    themeStrong: { token: "!-nys/color-#/theme-strong", value: "#0E324F" },
    themeStronger: { token: "!-nys/color-#/theme-stronger", value: "#081B2B" },
    text: { token: "!-nys/color-@/text", value: "#1B1B1B" },
    textWeak: { token: "!-nys/color-@/text-weak", value: "#4A4D4F" },
    textDisabled: { token: "!-nys/color-@/text-disabled", value: "#BEC0C1" },
    border: { token: "!-nys/color-@/border", value: "#62666A" },
    borderStrong: { token: "!-nys/color-@/border-strong", value: "#1B1B1B" },
    borderSubtle: { token: "!-nys/color-@/border-subtle", value: "#D0D0CE" },
    hoverBackground: { token: "!-nys/color-@/surface-hover", value: "#EDEDED" },
    selectedTileBackground: { token: "!-nys/color-#/surface-selected", value: "#F7FAFD" },
    focus: { token: "!-nys/color-@/focus", value: "#004DD1" },
    error: { token: "!-nys/color-@/error", value: "#B52C2C" },
    white: { token: "!-nys/color-*/ink-reverse", value: "#FFFFFF" }
  },
  tile: {
    paddingBlock: { token: "!-nys/space/200", value: 16 },
    paddingInline: { token: "!-nys/space/250", value: 20 },
    gap: { token: "!-nys/space/200", value: 16 },
    radius: { token: "!-nys/radius/md", value: 4 }
  },
  focusRing: {
    size: { token: null, value: 40 },
    borderWidth: { token: "!-nys/border-width/md", value: 2 },
    radius: { token: "!-nys/radius/lg", value: 8 }
  }
} as const;

export const checkboxAccessibilityReference = {
  reactAriaPrimitive: "CheckboxField + CheckboxButton",
  hiddenInput: true,
  requiresAccessibleName: true,
  indeterminateSupported: false,
  notes: [
    "The inspected NYS Checkbox component set does not expose an indeterminate variant.",
    "The inspected Figma page contains NYS Checkbox Group as a separate component set; it is out of scope for this first Checkbox implementation.",
    "Figma notes error as supported only for checkboxes with a visible label.",
    "React Aria supplies keyboard interaction, form behavior, disabled state, invalid state, and focus-visible state."
  ]
} as const;

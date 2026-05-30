export const buttonAnalysisSource = {
  designSystem: "New York State Design System (Community)",
  figmaUrl:
    "https://www.figma.com/design/otL8MTLehdw3tXsfAPmsOK/New-York-State-Design-System--Community-?node-id=3950-17603",
  pageNodeId: "3950:17603",
  componentSetName: "NYS Button",
  componentSetNodeId: "3981:8292",
  componentKey: "7a8138514163f8320916f39ff8f1fcc6b2534d60",
  variantCount: 168
} as const;

export const buttonContract = {
  variants: ["filled", "outline", "ghost", "text"],
  sizes: ["sm", "md", "lg"],
  states: ["default", "hover", "pressed"],
  shapes: ["rectangle", "circle"],
  booleans: ["inverted", "disabled", "prefixIcon", "suffixIcon"],
  textProperties: ["label", "ariaDescription", "ariaLabel"]
} as const;

export type ButtonVariant = (typeof buttonContract.variants)[number];
export type ButtonSize = (typeof buttonContract.sizes)[number];
export type ButtonState = (typeof buttonContract.states)[number];
export type ButtonShape = (typeof buttonContract.shapes)[number];

export type ButtonReferenceProps = {
  readonly label: string;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly shape?: ButtonShape;
  readonly inverted?: boolean;
  readonly disabled?: boolean;
  readonly prefixIcon?: boolean;
  readonly suffixIcon?: boolean;
  readonly ariaDescription?: string;
  readonly ariaLabel?: string;
};

export const buttonSizeReference = {
  sm: {
    minHeight: 40,
    paddingBlock: 8,
    paddingInline: 16,
    gap: 8,
    tokens: {
      minHeight: "!-nys/size/500",
      paddingBlock: "!-nys/space/100",
      paddingInline: "!-nys/space/200",
      gap: "!-nys/space/100",
      fontSize: "!-nys/font-size/ui/md",
      lineHeight: "!-nys/font-lineheight/ui/md",
      letterSpacing: "!-nys/font-letterspacing/ui/md"
    }
  },
  md: {
    minHeight: 48,
    paddingBlock: 12,
    paddingInline: 20,
    gap: 8,
    tokens: {
      minHeight: "!-nys/size/600",
      paddingBlock: "!-nys/space/150",
      paddingInline: "!-nys/space/250",
      gap: "!-nys/space/100",
      fontSize: "!-nys/font-size/ui/md",
      lineHeight: "!-nys/font-lineheight/ui/md",
      letterSpacing: "!-nys/font-letterspacing/ui/md"
    }
  },
  lg: {
    minHeight: 56,
    sampledFrameHeight: 60,
    paddingBlock: 16,
    paddingInline: 24,
    gap: 8,
    tokens: {
      minHeight: null,
      paddingBlock: "!-nys/space/200",
      paddingInline: "!-nys/space/300",
      gap: "!-nys/space/100",
      fontSize: "!-nys/font-size/ui/lg",
      lineHeight: "!-nys/font-lineheight/ui/lg",
      letterSpacing: "!-nys/font-letterspacing/ui/lg"
    }
  }
} as const;

export const buttonTokenReference = {
  color: {
    theme: { token: "!-nys/color-#/theme", value: "#154973" },
    themeStrong: { token: "!-nys/color-#/theme-strong", value: "#0E324F" },
    themeStronger: { token: "!-nys/color-#/theme-stronger", value: "#081B2B" },
    text: { token: "!-nys/color-@/text", value: "#1B1B1B" },
    textReverse: { token: "!-nys/color-@/text-reverse", value: "#FFFFFF" },
    textDisabled: { token: "!-nys/color-@/text-disabled", value: "#BEC0C1" },
    link: { token: "!-nys/color-@/link", value: "#004DD1" },
    linkStrong: { token: "!-nys/color-@/link-strong", value: "#003BA1" },
    linkStrongest: { token: "!-nys/color-@/link-strongest", value: "#002971" },
    disabledBackground: { token: "!-nys/color/neutral/10", value: "#F6F6F6" },
    transparent: { token: "!-nys/color/transparent", value: "#FFFFFF00" },
    inkReverse: { token: "!-nys/color-*/ink-reverse", value: "#FFFFFF" }
  },
  radius: {
    rectangle: { token: "!-nys/radius/xl", value: 12 },
    circle: { token: "!-nys/radius/round", value: 1776 }
  },
  borderWidth: {
    md: { token: "!-nys/border-width/md", value: 2 }
  },
  typography: {
    family: { token: "!-nys/font-family/ui", value: "Proxima Nova" },
    weight: { token: "!-nys/font-weight/ui/Semi Bold", value: "Semibold" }
  },
  iconSize: {
    smText: { token: "!-nys/icon-size/sm", value: 14 },
    mdText: { token: "!-nys/icon-size/md", value: 16 },
    lgText: { token: "!-nys/icon-size/lg", value: 18 },
    circleMd: { token: "!-nys/icon-size/3xl", value: 24 }
  }
} as const;

export const buttonVariantReference = {
  filled: {
    default: {
      background: buttonTokenReference.color.theme.token,
      color: buttonTokenReference.color.textReverse.token,
      border: buttonTokenReference.color.transparent.token
    },
    hover: {
      background: buttonTokenReference.color.themeStrong.token
    },
    pressed: {
      background: buttonTokenReference.color.themeStronger.token
    },
    disabled: {
      background: buttonTokenReference.color.disabledBackground.token,
      color: buttonTokenReference.color.textDisabled.token
    }
  },
  outline: {
    default: {
      background: buttonTokenReference.color.inkReverse.token,
      color: buttonTokenReference.color.theme.token,
      border: buttonTokenReference.color.theme.token
    }
  },
  ghost: {
    default: {
      background: buttonTokenReference.color.transparent.token,
      color: buttonTokenReference.color.text.token,
      textDecoration: "underline"
    }
  },
  text: {
    default: {
      color: buttonTokenReference.color.link.token,
      textDecoration: "underline"
    },
    hover: {
      color: buttonTokenReference.color.linkStrong.token
    },
    pressed: {
      color: buttonTokenReference.color.linkStrongest.token
    }
  }
} as const;

export const buttonAccessibilityReference = {
  semanticElement: "button",
  circleRequiresAriaLabel: true,
  unresolvedFocusState: true,
  notes: [
    "The inspected component set does not expose Focus as a State axis.",
    "A separate _Button Focus State component set exists and needs review before implementation.",
    "Text-style buttons should remain buttons when they perform actions.",
    "Hidden Figma-only text layers should not be copied into code without accessibility review."
  ]
} as const;

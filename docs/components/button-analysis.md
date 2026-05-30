# Button Analysis

## Rule

This is a Figma-derived reference for a future Button component. It is not an
implementation spec and must not be treated as permission to copy the New York
State Design System. Use it to structure our own Button contract and to identify
the decisions that must be confirmed in our source of truth before implementation.

## Acceptance Criteria

- Treat Figma as the source for the discovered axes and token names.
- Do not implement visual styling from this analysis without confirming our own
  design source.
- Preserve the distinction between design analysis, public API contract, and
  final component implementation.
- Circle/icon-only buttons must require an accessible label.
- Text buttons must remain semantically buttons, not links, when they perform an action.
- Focus state is unresolved in the inspected component set and must be designed
  before implementation.

## Validation Commands

```bash
pnpm typecheck
pnpm build
```

## Examples

Figma source inspected:

- File: `New York State Design System (Community)`
- URL: `https://www.figma.com/design/otL8MTLehdw3tXsfAPmsOK/New-York-State-Design-System--Community-?node-id=3950-17603`
- Page node from URL: `3950:17603`, named `❖ Button`
- Main component set: `NYS Button`
- Component set node: `3981:8292`
- Component key: `7a8138514163f8320916f39ff8f1fcc6b2534d60`
- Variant count: `168`

Related Button search results:

| Name | Node | Type | Notes |
| --- | --- | --- | --- |
| `NYS Button` | `3981:8292` | component set | Primary source for this analysis. |
| `_Button Focus State` | `6178:38758` | component set | Related focus artifact; not integrated as a `State` axis in `NYS Button`. |
| `_Clear Search Button` | `3981:11543` | component set | Search-specific action button. |
| `_Calendar Button` | `15514:6108` | component set | Calendar-specific button. |
| `_Date Picker Buttons` | `15514:5865` | component | Date picker action grouping. |
| `_Input Button: Start` | `3981:10878` | component | Input-adjacent button. |
| `_Input Button: End` | `3981:10876` | component | Input-adjacent button. |

Discovered component properties:

| Figma property | Type | Default | Contract interpretation |
| --- | --- | --- | --- |
| `Label Text#1343:0` | text | `{text}` | Visible label text. |
| `Prefix Icon#1343:46` | boolean | `false` | Optional leading icon. |
| `Suffix Icon#1344:140` | boolean | `false` | Optional trailing icon. |
| `Aria Description#6342:19` | text | `{ariaDescription}` | Optional accessible description. |
| `Size` | variant | `md` | `sm`, `md`, `lg`. |
| `Variant` | variant | `Filled` | `Filled`, `Outline`, `Ghost`, `Text`. |
| `State` | variant | `Default` | `Default`, `Hover`, `Pressed`. |
| `Inverted` | variant | `False` | Standard or reverse surface treatment. |
| `Disabled` | variant | `False` | Disabled rendering. |
| `Circle` | variant | `False` | Icon-only circular treatment. |

Recommended code-facing names:

| Figma name | Code name |
| --- | --- |
| `Filled` | `filled` |
| `Outline` | `outline` |
| `Ghost` | `ghost` |
| `Text` | `text` |
| `sm` | `sm` |
| `md` | `md` |
| `lg` | `lg` |
| `Default` | `default` |
| `Hover` | `hover` |
| `Pressed` | `pressed` |
| `Inverted=True` | `inverted: true` |
| `Disabled=True` | `disabled: true` |
| `Circle=True` | `shape: "circle"` |

Size and spacing samples:

| Size | Min height | Padding Y | Padding X | Gap | Typography |
| --- | ---: | ---: | ---: | ---: | --- |
| `sm` | `40` | `8` | `16` | `8` | UI `md`: Proxima Nova, Semibold, `16/24`, letter spacing `0.0443px`. |
| `md` | `48` | `12` | `20` | `8` | UI `md`: Proxima Nova, Semibold, `16/24`, letter spacing `0.0443px`. |
| `lg` | `56` in token, sampled frame height `60` | `16` | `24` | `8` | UI `lg`: Proxima Nova, Semibold, `18/28`, letter spacing `0.0278px`. |

Notable sampled semantic tokens:

| Purpose | Token | Resolved value |
| --- | --- | --- |
| Theme default background/border | `!-nys/color-#/theme` | `#154973` |
| Theme hover | `!-nys/color-#/theme-strong` | `#0E324F` |
| Theme pressed | `!-nys/color-#/theme-stronger` | `#081B2B` |
| Reverse text | `!-nys/color-@/text-reverse` | `#FFFFFF` |
| Standard text | `!-nys/color-@/text` | `#1B1B1B` |
| Link text | `!-nys/color-@/link` | `#004DD1` |
| Link hover | `!-nys/color-@/link-strong` | `#003BA1` |
| Link pressed | `!-nys/color-@/link-strongest` | `#002971` |
| Disabled text | `!-nys/color-@/text-disabled` | `#BEC0C1` |
| Disabled background | `!-nys/color/neutral/10` | `#F6F6F6` |
| Transparent | `!-nys/color/transparent` | `#FFFFFF00` |
| Radius | `!-nys/radius/xl` | `12` |
| Round radius | `!-nys/radius/round` | `1776` |
| Border width | `!-nys/border-width/md` | `2` |

Variant visual samples:

| Variant | Default surface | Text | Border |
| --- | --- | --- | --- |
| `filled` | `!-nys/color-#/theme` | `!-nys/color-@/text-reverse` | transparent |
| `outline` | `!-nys/color-*/ink-reverse` | `!-nys/color-#/theme` | `!-nys/color-#/theme`, `2px` |
| `ghost` | transparent | `!-nys/color-@/text`, underlined | transparent |
| `text` | no container surface sampled | `!-nys/color-@/link`, underlined | none sampled |

Interaction samples:

| State | Mapping | Sample token |
| --- | --- | --- |
| `default` | base state | `!-nys/color-#/theme` for filled. |
| `hover` | `:hover` | `!-nys/color-#/theme-strong` for filled. |
| `pressed` | `:active` | `!-nys/color-#/theme-stronger` for filled. |
| `disabled` | `:disabled` / `[aria-disabled="true"]` | `!-nys/color/neutral/10` background, `!-nys/color-@/text-disabled` text. |

Icon and circle behavior:

- Non-circle variants expose `Prefix Icon` and `Suffix Icon` booleans.
- Text variants use fixed icon instances by size: `14px`, `16px`, `18px`.
- Circle variants hide visible text in Figma and render an icon.
- Circle `md` sample uses `48 x 48`, `!-nys/radius/round`, and `!-nys/icon-size/3xl` (`24`).
- Circle buttons need an explicit accessible label because the visible label is not present.

Accessibility findings from Figma lint:

- The inspected component set reports a missing focus/focused variant.
- A separate `_Button Focus State` component set exists, but it is not part of
  the `NYS Button` `State` axis.
- The lint run reported contrast findings on hidden Figma-only labels and aria
  description helper nodes. These should be reviewed before copying any hidden
  accessibility-layer pattern.
- Automated Figma lint is not enough. A real implementation must validate
  semantic `<button>` behavior, keyboard operation, focus visibility, accessible
  name, disabled behavior, and icon-only labelling in Storybook.

Limitations of this analysis:

- REST-backed Figma documentation/image generation intermittently returned rate
  limit errors during extraction.
- The analysis uses Desktop Bridge metadata and deep component samples, not an
  exhaustive visual diff for all 168 variants.
- Token names and values are references from the inspected source. They are not
  our final token naming scheme.

## Source Of Truth

- Figma Desktop Bridge inspection of `NYS Button`, node `3981:8292`.
- Figma variables from the connected `New York State Design System (Community)` file.
- The local contract in `packages/design-system/src/contracts/button.ts` mirrors
  this analysis as typed reference data.

## Related Documents

- [Figma Source Of Truth](../figma-source-of-truth.md)
- [Component Documentation](./component-documentation.md)
- [Storybook Authoring](./storybook-authoring.md)
- [Accessibility Validation](./accessibility-validation.md)

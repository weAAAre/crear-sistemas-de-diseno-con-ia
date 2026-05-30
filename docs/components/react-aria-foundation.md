# React Aria Foundation

## Rule

Public design-system components must use `react-aria-components` as the
accessibility primitive when React Aria provides an equivalent component.
Figma remains the source of truth for visual anatomy, variants, tokens, spacing,
typography, and color; React Aria is the source of truth for common accessible
interaction behavior.

Agents must not hand-roll keyboard interaction, focus management, ARIA state,
selection behavior, disclosure behavior, overlays, or composite widget behavior
when React Aria already provides the pattern.

## Acceptance Criteria

- The component proposal identifies the React Aria primitive used, or documents
  why no equivalent exists.
- The implementation wraps `react-aria-components` before considering lower-level
  React Aria hooks.
- The public API stays design-system first and only exposes React Aria props when
  they do not conflict with established design-system props.
- Visual variants, tokens, sizes, and spacing are traceable to Figma or an
  existing repository contract.
- Interactive states are styled through React Aria data attributes such as
  `data-hovered`, `data-pressed`, `data-focus-visible`, `data-disabled`, and
  component-specific state attributes.
- Storybook includes the states needed to validate the wrapped React Aria
  behavior.
- Any exception to this rule is recorded in the component documentation before
  implementation.

## Validation Commands

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
pnpm --filter @taller/docs build-storybook
```

Run `pnpm storybook` when interactive behavior needs manual keyboard, focus, or
screen-reader review.

## Examples

Good:

```tsx
import { Button as AriaButton } from "react-aria-components/Button";

export function Button(props: ButtonProps) {
  return <AriaButton {...mappedDesignSystemProps} />;
}
```

Bad:

```tsx
export function Button(props: ButtonProps) {
  return <div role="button" tabIndex={0} onKeyDown={customKeyboardHandler} />;
}
```

When React Aria has no equivalent component, document the exception:

```markdown
## React Aria Primitive

No equivalent React Aria component exists for this pattern. The implementation
uses repository-local semantics and validates keyboard, focus, and ARIA behavior
in Storybook.
```

## Source Of Truth

- React Aria documentation for accessible component behavior:
  - https://react-aria.adobe.com/getting-started
  - https://react-aria.adobe.com/quality
  - https://react-aria.adobe.com/Button
- Figma for visual decisions and inspected design-system tokens.
- Existing package contracts in `packages/design-system/src/contracts`.

## Related Documents

- [Figma Source Of Truth](../figma-source-of-truth.md)
- [Component Documentation](./component-documentation.md)
- [Accessibility Validation](./accessibility-validation.md)
- [Storybook Authoring](./storybook-authoring.md)

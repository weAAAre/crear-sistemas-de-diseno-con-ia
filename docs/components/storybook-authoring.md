# Storybook Authoring

## Rule

Storybook is the executable documentation for the design system. Stories must
show approved component behavior from Figma and make accessibility review easy.

## Acceptance Criteria

- Stories live in `apps/docs/src`.
- Stories import public APIs from `@taller/design-system`, not private source files.
- Each approved variant and meaningful state has a story or a controlled example.
- Interactive components include keyboard-relevant states and accessible names.
- Interactive components include states needed to review their React Aria primitive behavior.
- Story args use valid public props only.
- MDX pages explain decisions only when they add value beyond the rendered story.
- MDX component pages follow [Storybook MDX Documentation](./storybook-mdx-documentation.md).

## Validation Commands

```bash
pnpm build
pnpm storybook
```

Use the Storybook accessibility addon during manual review.

## Examples

Good:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@taller/design-system";

const meta = {
  title: "Components/Button",
  component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Save"
  }
};
```

Bad:

```tsx
import { Button } from "../../../packages/design-system/src/button";
```

## Source Of Truth

- Figma for variants and states.
- React Aria for common accessible interaction behavior.
- `@taller/design-system` public exports for component APIs.
- Storybook build output for documentation readiness.

## Related Documents

- [Component Documentation](./component-documentation.md)
- [React Aria Foundation](./react-aria-foundation.md)
- [Storybook MDX Documentation](./storybook-mdx-documentation.md)
- [Accessibility Validation](./accessibility-validation.md)

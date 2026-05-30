# Storybook MDX Documentation

## Rule

Storybook MDX component pages must be concise user-facing documentation. Start
with a short explanation of what the component is and when to use it, then let
the stories show the examples.

Do not put Figma analysis, API inventories, token tables, or implementation
reference material in the MDX page. Keep those in `docs/components/*` analysis
documents or in focused Storybook stories when they are useful for review.

## Acceptance Criteria

- The page begins with the component name.
- The page includes one short paragraph explaining what the component is.
- The page includes one short paragraph explaining when to use it.
- The page keeps examples visible through `Canvas`, `Stories`, or focused story blocks.
- The page does not include sections named `Figma Reference`, `Supported API`,
  `Token Fidelity`, or equivalent analysis/reference dumps.
- Figma embeds stay attached to stories through `parameters.design`, not through
  prose-heavy MDX sections.
- API details belong in generated controls, story args, TypeScript types, or a
  focused implementation reference, not in the top-level component MDX page.

## Validation Commands

```bash
pnpm typecheck
pnpm build
```

Run Storybook for visual review:

```bash
pnpm storybook
```

## Examples

Good:

```mdx
# Button

A button triggers an action in the current experience, such as saving,
submitting, continuing, cancelling, or opening an interactive flow.

Use a button when the user expects something to happen immediately. Use a link
when the user is navigating to another destination.

<Canvas of={ButtonStories.Playground} />

<Stories />
```

Bad:

```mdx
# Button

## Figma Reference

## Supported API

## Token Fidelity

## Accessibility Notes
```

## Source Of Truth

- User-facing Storybook docs should prioritize usage guidance and examples.
- Detailed Figma analysis belongs in files such as [Button Analysis](./button-analysis.md).
- Story-level Figma embeds use Storybook `parameters.design`.

## Related Documents

- [Storybook Authoring](./storybook-authoring.md)
- [Component Documentation](./component-documentation.md)
- [Figma Source Of Truth](../figma-source-of-truth.md)

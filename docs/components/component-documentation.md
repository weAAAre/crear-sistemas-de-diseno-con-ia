# Component Documentation

## Rule

Each public component must have documentation that explains only approved,
implemented behavior. Documentation must connect the component API, Figma source,
React Aria primitive, Storybook stories, accessibility expectations, and
validation commands.

## Acceptance Criteria

For each public component, create or update a component doc with:

- Purpose and non-goals.
- Figma source reference.
- React Aria primitive used, or documented exception when no equivalent exists.
- Public props and allowed values.
- Supported variants and states.
- Accessibility requirements.
- Storybook story list.
- Validation commands.
- Open questions or known gaps.

Do not document future variants, unapproved states, or speculative token names.

## Validation Commands

```bash
pnpm typecheck
pnpm build
pnpm storybook
```

## Examples

Good component doc outline:

```markdown
# Button

## Purpose

## Figma Source

## React Aria Primitive

## Public API

## Variants And States

## Accessibility

## Storybook Coverage

## Validation

## Open Questions
```

Bad:

```markdown
# Button

Buttons are clickable elements. They can be many colors and sizes.
```

## Source Of Truth

- Figma for variants, states, and visual behavior.
- React Aria for common accessible interaction behavior.
- `packages/design-system/src` for implemented API.
- `apps/docs/src` for Storybook examples.

## Related Documents

- [Figma Source Of Truth](../figma-source-of-truth.md)
- [React Aria Foundation](./react-aria-foundation.md)
- [Storybook Authoring](./storybook-authoring.md)
- [Accessibility Validation](./accessibility-validation.md)

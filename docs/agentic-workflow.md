# Agentic Workflow

## Rule

Agents must investigate before editing, keep changes narrow, and leave enough
evidence for a reviewer to understand the source of truth, validation performed,
and remaining risk.

## Acceptance Criteria

- The agent reads the relevant existing files before editing.
- The agent reads only the relevant docs from `docs/`.
- Figma Console is used before any design decision is implemented or changed.
- React Aria Components is checked before implementing interactive behavior.
- The change is scoped to the requested behavior.
- Storybook is updated when component behavior, states, variants, or examples change.
- Accessibility validation is performed for interactive or visual component changes.
- The final PR-ready summary includes commands run and open risks.

## Validation Commands

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
```

Use `pnpm storybook` for manual Storybook inspection when stories or component
rendering change.

## Examples

Good:

```text
Read Button docs, inspect Button in Figma, confirm the React Aria Button
primitive, update package code, add stories for approved variants, validate
keyboard/focus behavior, run typecheck and build.
```

Bad:

```text
Create a new Button variant because it looks useful, then document it after the fact.
```

## Source Of Truth

- Figma for design decisions.
- React Aria for common accessible interaction behavior.
- Existing repository conventions for implementation style.
- Storybook for documented component behavior.

## Related Documents

- [Figma Source Of Truth](./figma-source-of-truth.md)
- [React Aria Foundation](./components/react-aria-foundation.md)
- [Storybook Authoring](./components/storybook-authoring.md)
- [Accessibility Validation](./components/accessibility-validation.md)

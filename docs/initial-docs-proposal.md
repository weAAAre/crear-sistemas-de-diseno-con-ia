# Initial Docs Proposal

## Rule

The initial `docs/` folder should stay small and operational. Add only documents
that future agents need before creating or changing components.

## Acceptance Criteria

The initial documentation set should cover:

- How agents work in this repository.
- How documentation is created and kept focused.
- How Figma is used as the source of truth.
- How component documentation is structured.
- How Storybook stories are authored.
- How accessibility is validated.

Defer component-specific docs until the first real component exists in Figma and
is implemented in `@taller/design-system`.

## Validation Commands

```bash
pnpm typecheck
pnpm build
```

## Examples

Recommended initial docs:

```text
docs/agentic-workflow.md
docs/documentation-guidelines.md
docs/figma-source-of-truth.md
docs/components/component-documentation.md
docs/components/storybook-authoring.md
docs/components/accessibility-validation.md
```

Deferred docs:

```text
docs/components/button.md
docs/components/text-field.md
docs/tokens/color.md
docs/tokens/spacing.md
```

These should wait until the corresponding Figma source and implementation work exist.

## Source Of Truth

- Current monorepo structure.
- Figma for future component and token decisions.
- Storybook for executable component documentation.

## Related Documents

- [Agentic Workflow](./agentic-workflow.md)
- [Documentation Guidelines](./documentation-guidelines.md)
- [Figma Source Of Truth](./figma-source-of-truth.md)

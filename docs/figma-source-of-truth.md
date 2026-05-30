# Figma Source Of Truth

## Rule

Figma is the source of truth for design-system visual semantics and visuals.
React Aria is the source of truth for common accessible interaction behavior when
it provides an equivalent primitive. Agents must not invent component variants,
tokens, spacing, color, typography, states, or interaction behavior that is not
present in Figma, React Aria, or an existing documented repository convention.

## Acceptance Criteria

- Figma Console is consulted before implementing or changing design behavior.
- React Aria Components is checked before implementing common interactive behavior.
- The component, token, or pattern source is identified in the PR summary.
- Missing or ambiguous Figma behavior is documented as an open question.
- Code does not introduce visual variants or states that Figma does not define.
- Accessibility improvements may be proposed when Figma is incomplete, but they
  must be called out as proposals rather than treated as approved design.

## Validation Commands

No command can prove Figma alignment. Validate with inspection:

```bash
pnpm storybook
```

Then compare the rendered Storybook state against the relevant Figma source.

## Examples

Good:

```text
Figma defines Button sizes `sm`, `md`, and `lg`; the component exposes only those sizes.
```

Bad:

```text
The component exposes `xl` because the implementation made it easy.
```

## Source Of Truth

- Figma files inspected through Figma Console.
- React Aria documentation for supported accessible interaction primitives.
- Existing docs when Figma is intentionally supplemented by an approved convention.

## Related Documents

- [Agentic Workflow](./agentic-workflow.md)
- [Component Documentation](./components/component-documentation.md)
- [React Aria Foundation](./components/react-aria-foundation.md)

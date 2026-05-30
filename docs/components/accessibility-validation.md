# Accessibility Validation

## Rule

Accessibility is part of the component acceptance criteria. Agents must validate
semantic structure, keyboard behavior, focus handling, contrast, target size, and
motion behavior for every interactive or visual component change. Use React Aria
Components as the default behavior layer when an equivalent primitive exists.

## Acceptance Criteria

- Interactive components have correct role, name, state, and value.
- Interactive components wrap React Aria Components when an equivalent primitive exists.
- All actions are reachable and operable by keyboard.
- Focus order is predictable and focus indication is visible.
- Disabled, loading, error, selected, expanded, pressed, and invalid states are represented when applicable.
- Text and meaningful icons meet contrast requirements against their backgrounds.
- Pointer targets are large enough for practical use.
- Animations respect reduced-motion expectations.
- Storybook examples expose enough states to review these requirements.

## Validation Commands

```bash
pnpm build
pnpm storybook
```

Use Storybook's accessibility addon for automated checks, then manually verify
keyboard and focus behavior. Automated checks are not a substitute for manual
interaction review.

## Examples

Good:

```text
The story includes default, disabled, loading, and invalid states; the reviewer
can tab to the control, see focus, and confirm the accessible name.
```

Bad:

```text
The component passes TypeScript, so accessibility is assumed complete.
```

## Source Of Truth

- Figma for visual states.
- React Aria for common accessible interaction behavior.
- Component semantics and Storybook rendering for behavior.
- Accessibility acceptance criteria in this document.

## Related Documents

- [Storybook Authoring](./storybook-authoring.md)
- [Component Documentation](./component-documentation.md)
- [React Aria Foundation](./react-aria-foundation.md)

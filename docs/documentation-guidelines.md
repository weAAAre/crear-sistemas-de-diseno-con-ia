# Documentation Guidelines

## Rule

Documentation in this repository exists to guide future implementation work.
Every convention document must be focused, operational, and reusable by an agent
without requiring the whole repository context.

Use this structure for convention documents:

```markdown
# Convention Name

## Rule

## Acceptance Criteria

## Validation Commands

## Examples

## Source Of Truth

## Related Documents
```

## Acceptance Criteria

- The document captures one reusable convention or decision.
- The document includes concrete acceptance criteria.
- The document lists validation commands, or explicitly says when no command can validate it.
- The document identifies the source of truth.
- The document avoids broad onboarding prose and duplicated content.
- The document links to related docs instead of repeating them.

## Validation Commands

Documentation-only changes do not always need a build. Run these commands when a
doc includes package names, scripts, code examples, Storybook references, or file paths:

```bash
pnpm typecheck
pnpm build
```

## Examples

Good:

```markdown
# Storybook Component Stories

## Rule

Every public component must include stories for the Figma-approved variants and states.
```

Bad:

```markdown
# Frontend Notes

We should make good components and keep accessibility in mind.
```

## Source Of Truth

- Repository structure and package scripts.
- Figma for design-system decisions.
- Storybook for executable component documentation.

## Related Documents

- [Agentic Workflow](./agentic-workflow.md)
- [Figma Source Of Truth](./figma-source-of-truth.md)
- [Component Documentation](./components/component-documentation.md)

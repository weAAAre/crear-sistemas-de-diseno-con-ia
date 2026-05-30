---
name: create-doc
description: Create or improve repository documentation from a concrete convention, decision, or repeated correction in the current conversation.
---

Create or improve focused documentation inside `docs/` for this design-system
monorepo. Follow the local documentation standard exactly.

## When To Use

Use this skill when the conversation establishes one of these:

- A reusable convention for components, Storybook, accessibility, Figma usage, validation, or PR preparation.
- A correction to agent behavior that should prevent future mistakes.
- A new acceptance criterion or validation command.
- A missing boundary about what agents must not invent.

Do not use this skill to create broad narrative documentation, onboarding prose,
or duplicated content.

## Steps

1. Identify the single convention or decision that needs documentation.
2. Search `docs/` for an existing document that should be updated.
3. Read `docs/documentation-guidelines.md`.
4. Choose the smallest correct location:
   - `docs/components/` for component, Storybook, and accessibility rules.
   - `docs/` for repository-wide agent workflow, Figma, and PR rules.
5. If the doc exists, update it without changing its intent.
6. If the doc does not exist, create one file for one convention only.
7. Update the documentation map in `AGENTS.md` when adding a new file.
8. Run `pnpm typecheck` and `pnpm build` if documentation changes include code examples, package references, or Storybook configuration changes.

## Required Document Structure

Every convention document must use these sections, in this order:

```markdown
# Convention Name

## Rule

## Acceptance Criteria

## Validation Commands

## Examples

## Source Of Truth

## Related Documents
```

## Rules

- Keep docs operational. Prefer checklists, commands, file paths, and acceptance criteria.
- Do not document hypothetical components or invented variants.
- Do not copy Figma details from memory. Reference Figma as the source and describe only what has been inspected.
- Do not bundle multiple unrelated conventions into one file.
- Do not create documentation that only restates obvious code.
- Link to real repository files when examples exist.

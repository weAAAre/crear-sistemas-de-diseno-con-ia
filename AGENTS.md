# Agent Operating Rules

Respond to the user in English.

## Shell Commands

- Prefix shell commands with `rtk`.
- Use `rg` or `rg --files` before slower search tools.
- Do not use destructive git commands unless the user explicitly requests them.

## Repository Shape

- Monorepo managed with PNPM workspaces and Turborepo.
- Design system package: `packages/design-system`.
- Storybook documentation app: `apps/docs`.
- Agent skills: `.agents/skills`.
- Operational documentation: `docs`.

## Useful Commands

```bash
pnpm install --frozen-lockfile
pnpm typecheck
pnpm build
pnpm storybook
```

Run `pnpm typecheck` and `pnpm build` before considering a code change ready.

## Source Of Truth

Figma is the source of truth for visual design decisions. React Aria is the
source of truth for common accessible interaction behavior when it provides an
equivalent primitive. Do not invent component APIs, visual variants, design
tokens, spacing, colors, states, or interaction behavior.

Before changing a component, token, or Storybook example:

1. Inspect the existing code and docs relevant to the task.
2. Inspect the relevant Figma source through Figma Console when a design decision is involved.
3. Check whether React Aria Components provides an equivalent primitive for interactive behavior.
4. Document any gap between Figma, React Aria, and the repo before implementing.
5. Ask for clarification if neither Figma nor an existing repo convention defines the behavior.

## Work Sequence

1. Understand the request and identify the smallest affected area.
2. Read only the relevant files and docs. Do not preload the whole `docs/` folder.
3. Check Storybook and package patterns before adding new conventions.
4. Implement narrowly.
5. Add or update Storybook stories when user-facing component behavior changes.
6. Validate accessibility for every interactive state and documented variant.
7. Run the validation commands.
8. Prepare the PR summary with source-of-truth notes, validation evidence, and risks.

## Documentation

Detailed conventions live in `docs/`. Use this map to decide what to read:

```text
docs/
├── agentic-workflow.md
├── documentation-guidelines.md
├── figma-source-of-truth.md
├── initial-docs-proposal.md
└── components/
    ├── accessibility-validation.md
    ├── button-analysis.md
    ├── component-documentation.md
    ├── react-aria-foundation.md
    ├── storybook-mdx-documentation.md
    └── storybook-authoring.md
```

Use `.agents/skills/create-doc` when a conversation reveals a new reusable
agreement, a missing convention, or a correction that should guide future agents.

## Component Change Acceptance Criteria

A component change is not ready unless all relevant criteria are true:

- The implementation is traceable to Figma or an existing documented convention.
- Interactive behavior uses React Aria Components when an equivalent primitive exists.
- The public API is minimal and typed.
- Storybook covers default behavior, variants, states, disabled/loading/error states when applicable, and accessibility notes.
- Keyboard behavior is documented and tested manually when interaction exists.
- Accessible name, role, focus order, focus visibility, contrast, target size, and reduced-motion behavior are considered.
- `pnpm typecheck` and `pnpm build` pass.

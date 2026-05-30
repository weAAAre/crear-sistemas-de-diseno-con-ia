# Codex Worktree Setup

## Rule

Every new Codex worktree must be prepared with the repository-owned setup
command before implementation work starts:

```bash
pnpm setup:worktree
```

This command installs dependencies from the lockfile and validates TypeScript
across the monorepo. Use the full variant when the task needs a build-ready
baseline:

```bash
pnpm setup:worktree:full
```

Agents must not assume that dependencies, generated build outputs, or Storybook
static files are shared between worktrees.

## Acceptance Criteria

- A fresh worktree can run `pnpm setup:worktree` from the repository root.
- Dependencies are installed with `pnpm install --frozen-lockfile`.
- TypeScript validation runs after installation.
- The setup command does not start long-running servers.
- The full setup variant also runs the repository build.
- Ignored local metadata such as `.vercel`, `.turbo`, `node_modules`, `dist`,
  and `storybook-static` stays out of git.

## Validation Commands

```bash
pnpm setup:worktree
pnpm setup:worktree:full
```

## Examples

Good:

```bash
git worktree add ../feature-button-docs -b codex/feature-button-docs
cd ../feature-button-docs
pnpm setup:worktree
```

Bad:

```bash
cd ../feature-button-docs
pnpm storybook
```

The bad example starts work before installing and validating the new worktree.

## Source Of Truth

- `scripts/codex-worktree-setup.sh`
- `package.json` setup scripts.
- `pnpm-lock.yaml` for dependency resolution.

## Related Documents

- [Agentic Workflow](./agentic-workflow.md)
- [Documentation Guidelines](./documentation-guidelines.md)

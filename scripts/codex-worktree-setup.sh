#!/usr/bin/env bash
set -euo pipefail

log() {
  printf "\n[codex-worktree-setup] %s\n" "$*"
}

fail() {
  printf "\n[codex-worktree-setup] ERROR: %s\n" "$*" >&2
  exit 1
}

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"

cd "$REPO_ROOT"

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || fail "Run this script inside a git worktree."

if command -v corepack >/dev/null 2>&1; then
  log "Enabling Corepack so the packageManager field controls pnpm."
  corepack enable
fi

command -v pnpm >/dev/null 2>&1 || fail "pnpm is required. Install pnpm or enable Corepack before running setup."

EXPECTED_PACKAGE_MANAGER="$(node -p "require('./package.json').packageManager")"
EXPECTED_PNPM_VERSION="${EXPECTED_PACKAGE_MANAGER#pnpm@}"
CURRENT_PNPM_VERSION="$(pnpm --version)"

if [[ "$CURRENT_PNPM_VERSION" != "$EXPECTED_PNPM_VERSION" ]]; then
  log "Expected pnpm $EXPECTED_PNPM_VERSION, found $CURRENT_PNPM_VERSION."
  log "Continuing because pnpm is available; Corepack should align this in managed environments."
fi

log "Installing workspace dependencies with the frozen lockfile."
pnpm install --frozen-lockfile

log "Running TypeScript validation."
pnpm typecheck

if [[ "${1:-}" == "--full" ]]; then
  log "Running full repository build."
  pnpm build
fi

log "Worktree is ready."

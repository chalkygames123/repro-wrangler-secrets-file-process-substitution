# Wrangler `--secrets-file` process substitution repro

This repository reproduces a failure with Wrangler 4.151.3 on macOS.

## Requirements

- macOS
- Bash
- Node.js
- pnpm

## Reproduce

Run this command from the repository root:

```sh
bash -c 'pnpm dlx wrangler@4.151.3 deploy --dry-run --secrets-file <(printf "DUMMY_SECRET=value\\n")'
```

The command uses a dummy secret and `--dry-run`. It does not deploy a Worker.

Expected: Wrangler reads the secret and completes the dry run.

Actual: Wrangler fails with an error similar to:

```text
Could not read file: /dev/fd/63
EBADF: bad file descriptor, open '/dev/fd/63'
```

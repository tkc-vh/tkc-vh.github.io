# T42C2 – Digital Signatures Archive

This directory contains detached digital signatures and verification materials
for the official release files of **T42C2**.

## Contents
- `.asc` files: GPG/PGP detached signatures (RSA 4096)
- `T42C2_hash_ban_quyen.txt`: SHA-256 hash manifest
- `TKC-VH-public-key.asc`: Author public key
- `signing-info.txt`: Signing metadata and legal notes

## Verification
Example (macOS / Linux):

```bash
gpg --verify T42C2-EN.epub.asc T42C2-EN.epub


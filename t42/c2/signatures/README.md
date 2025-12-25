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

### Multilingual Legal Archives

In addition to the Vietnamese (VI) and English (EN) editions,
T42C2 has been released in multiple international language versions.

The cryptographic notarization for the French, Chinese, Japanese,
and Korean editions is documented here:

- **FR / CN / JA / KO Legal Archive**
  https://github.com/tkc-vh/tkc-vh.github.io/tree/main/t42/c2/legal-archive/FR-JA-CN-KO-archive

These records supplement the previously notarized VI and EN editions
and together form a complete multilingual verification set for T42C2.

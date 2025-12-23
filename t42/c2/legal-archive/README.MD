# T42C2 — Legal Archive (Digital Copyright Evidence)

This directory contains the legal and cryptographic archive for the work **T42C2**,
authored by **Tran Khac Cuong (Pen name: TKC-VH)**.

The archive provides independent, verifiable proof of authorship, integrity,
and publication status, without publicly distributing the original content files.

---

## Archive Scope

This archive includes:

- Cryptographic hash manifest (SHA-256)
- Detached digital signatures (OpenPGP / GPG)
- Signed legal archive package (ZIP)
- Author public key
- Signing metadata

Original EPUB/PDF files are intentionally **not included**.
They are commercially distributed via official platforms.

---

## Signing & Verification

- Signing standard: OpenPGP (GPG)
- Key type: RSA 4096-bit
- Signer: Tran Khac Cuong (TKC-VH)
- Key ID: 26281F7A
- Signing date: 23 December 2025

Verification example (macOS / Linux):

```bash
gpg --verify T42C2-Legal-Archive-2025-12-23.zip.asc \
            T42C2-Legal-Archive-2025-12-23.zip
Successful verification will output:
Good signature from "TRAN KHAC CUONG (TKC-VH)"

Files Included

T42C2-Legal-Archive-2025-12-23.zip

T42C2-Legal-Archive-2025-12-23.zip.asc

T42C2-Legal-Archive-2025-12-23.sha256

T42C2-Legal-Archive-2025-12-23.sha256.asc

TKC-VH-public-key.asc

README.MD

Legal Notice

Any modification, even a single byte, will invalidate the cryptographic signatures
and prove that the file is not the original author-issued version.

This archive serves as a technical and legal reference point for copyright
verification, dispute resolution, and long-term archival purposes.

© 2025 Tran Khac Cuong (TKC-VH). All Rights Reserved.




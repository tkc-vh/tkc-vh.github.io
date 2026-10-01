# © 2026 Tran Khac Cuong & Dieu Tam (TKC&VH)
> *All rights reserved.*

---

## 🔐 Digital Copyright & Authenticity Record – Legal Archive

> <font face="Georgia, serif" size="4"><b>Notice:</b> This directory contains a sealed legal and technical archive used to authenticate the authorship and integrity of the <b>TKC-VH Diary Works</b>.</font>

- The archive is part of the **TKC-VH Legal Library** and is intended to serve as independent verification material for legal, technical, and archival purposes.
- The original EPUB and PDF files are **not included** in this repository. They are commercially distributed through authorized platforms.

---

## 📘 Metadata & Legal Information

| Item | Details |
| :--- | :--- |
| **Author** | Tran Khac Cuong *(Pen name: TKC-VH)* |
| **Signer** | Tran Khac Cuong *(Pen name: TKC-VH)* |
| **Effective Date** | 25 September 2026 |
| **Signing Date** | 25 September 2026 |

---

## 🔐 Cryptographic Methods Used

* **Hash Algorithm:** `SHA-256` *(Algo: RSA 4096)*
* **Digital Signature:** `OpenPGP (GPG)`
* **PGP Fingerprint:** `4099 DAAA 3202 7AAC E7BA C507 5165 E6B6 2628 1F7A`

*All signatures are **detached signatures (`.sig`)**, allowing independent verification without modifying the original files.*

---

## ✅ Verification Overview

Third parties may independently verify this archive by following these two steps:

### 📍 Step 1 — Check SHA-256 Checksum

**macOS / Linux (Terminal):**
```bash
shasum -a 256 "your_book_file.epub"
```

**Windows (PowerShell):**
```powershell
Get-FileHash "your_book_file.epub" -Algorithm SHA256
```
> *Compare the computed hash with the matching row in the table below. An exact match confirms the file matches the official release.*

---

### 📍 Step 2 — Verify GPG Signature (`.sig`)

1. **Import the public key** *(one time only)*:
   ```bash
   gpg --import "signatures/TKC-VH-public-key.asc"
   ```
2. **Verify the signature** *(example for EPUB)*:
   ```bash
   gpg --verify "your_book_file.epub.sig" "your_book_file.epub"
   ```

```text
✔️ SHA-256 match   +   ✔️ Valid GPG signature  ⇒  Author-verified original release.
```
*If both the checksum and digital signature are valid, the archive can be considered an authentic record issued by the author.*

---

## 🏛 Public Archive & Timestamp

This directory is publicly hosted on GitHub. The GitHub commit history serves as an **independent third-party timestamp**, providing additional evidentiary weight for authorship and integrity claims.

---

## ⚖️ Legal Notice

* Any modification to the original content, even a single character, will result in a different SHA-256 hash and invalidate the signatures.
* This archive does **not** grant redistribution rights for the original work. It exists solely for authentication, verification, and legal reference.

---

# 📦 File Fingerprints (SHA-256)

| File Name | Fingerprint (SHA-256) |
| :--- | :--- |
| `00_MUC_LUC_TKCVH2025.txt` | `a5b377701625b922aec620b5a765d067b8a0c1a5118df9ed5b2024b7ddef6558` |
| `00_MUC_LUC_TKCVH2025.txt.sig` | `72423ef0cec00e83a0e066512393a0f4cb287af9fc6f1e5c6bd2b1659f91250a` |
| `SHA256_Fingerprints.txt` | `0e8c08132494187ccd5b3209a7750e8b3c203f0770096b4de73dc57ea47f3d51` |
| `TKCVH2025_C01-C04_VI.txt` | `dc05d20329ddefd60dde6dc0b6f0263778e934306d5acc00e2af6244f3c5329c` |
| `TKCVH2025_C01-C04_VI.txt.sig` | `e4980ec412509fc77a589934b1ad92ae64e6b719d74206d349acd39e795fa691` |
| `TKCVH2025_C05-C08_VI.txt` | `5d5b0eb44817ca7898d9fb04915da37800d73d542fed2fceaa60143f9d354dcc` |
| `TKCVH2025_C05-C08_VI.txt.sig` | `4dba21b002e97af936018e56a6e0f3fe08ded5c77958cb24a81b06b4b31c0178` |
| `TKCVH2025_C09-C14_VI.txt` | `baebea65de75e52c3eb303bfe30c1d9a00e45d5855c31fb9379b30fbd8c13b07` |
| `TKCVH2025_C09-C14_VI.txt.sig` | `a4a4fdcd76a83b1549e0df1d77bd42ae3596e1a2faf89c43223f340b88bc3551` |
| `TKCVH2025_C15-C20_VI.txt` | `f3f7f0eaabfa77e60fa95e7d827146c651627b6db9bdfdcb51bcb0a0be7d96e9` |
| `TKCVH2025_C15-C20_VI.txt.sig` | `0fcd07856ab19356fd326d7179088d8973311d4f26c6941223b0e7dcb8d2ed0e` |
| `TKCVH2025_C21-C25_VI.txt` | `cf495b40fea9ccebcc7a695b508a0bc31dde9295524bcaa4b698b51eb51a001c` |
| `TKCVH2025_C21-C25_VI.txt.sig` | `0ae4289e552214789362a2d7d6854f482ede9276dfdd585e245e866c241bae4a` |
| `TKCVH2025_C26-C30_VI.txt` | `9aa5554ac506386e995d2790282d8e3a28ccd4701b76fecf8f5f3bab811da64d` |
| `TKCVH2025_C26-C30_VI.txt.sig` | `3bc6b8643a9e7de984f16732809f3ec0e2c848372c96036571a25a2b5f3095ba` |
| `TKCVH2025_C31-C38_VI.txt` | `80a2d4358986c7b180f904652d99fc11231c196d574e82385216b41bf324e714` |
| `TKCVH2025_C31-C38_VI.txt.sig` | `d994dbfe61729414d46c49960ea7e8043908524cc5da8b9458a33a35fb708dc8` |
| `TKCVH2025_C39-C44_VI.txt` | `d0a7db1c5ea9db2319a2b8f6d393c494ff2670d00e5054ccd81f9dbf468227fc` |
| `TKCVH2025_C39-C44_VI.txt.sig` | `8194a38e3330eb1e5769563b0ce5d29ffc6983fa0113979d9b9f561c19fe722d` |
| `TKCVH2025_C45-C50_VI.txt` | `7533129933b494df86f8f2b6b1d727c5951b010dc440e955f7636f7c7f51a2eb` |
| `TKCVH2025_C45-C50_VI.txt.sig` | `73a47f9d29f60413aaa6f8d97fedab24ae0226cc925b554d2bbd50b2f6fce42a` |

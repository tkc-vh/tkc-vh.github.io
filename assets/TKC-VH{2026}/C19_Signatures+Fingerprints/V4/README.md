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
| **Effective Date** | 16 October 2026 |
| **Signing Date** | 16 October 2026 |

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
| TKCVH2026-C19-EN-V4.epub | 0821cffd525a768584fa53cab26cbd15aa286e18bfac0c1fe8a6e4093334e373 |
| TKCVH2026-C19-EN-V4.epub.sig | 4c2e08ad97c5b1482ad71ab78272cd3cc8ddd66b541d2e9b68990474a88d34e0 |
| TKCVH2026-C19-EN-V4.pdf | 079d5e4265caeb18bb76de89da6a0d28eb16e70f597a6e9f6d7fa3994d489a23 |
| TKCVH2026-C19-EN-V4.pdf.sig | 5932cbe08c6a4f00c060a895dcdbda959f5762c01fcf1e050b9f93234e99077f |
| TKCVH2026-C19-VI-V4.epub | f136ab902774678f1e42bb9dd5d1f56890f2ace1cf2d20259fab1e98c4ed8cd9 |
| TKCVH2026-C19-VI-V4.epub.sig | 3aaee5a296ffdac3cc2b952bed69031397cc47fd677cce425e98a38c07ef64eb |
| TKCVH2026-C19-VI-V4.pdf | 1e30d585e57a24c956ab967c0c1dc25937bc72adb1b962e38aa934d1365d1278 |
| TKCVH2026-C19-VI-V4.pdf.sig | f1ffa794289001940ead701aaa3a77d43c30f77351c5035eadca365b215d1a2b |

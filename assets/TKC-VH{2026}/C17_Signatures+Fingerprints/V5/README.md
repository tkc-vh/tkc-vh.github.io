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
| **Effective Date** | 18 October 2026 |
| **Signing Date** | 18 October 2026 |

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
| TKCVH2026-C17-EN_V5.epub | d2da3c99ee1d18526cabc37162bcbaa4985c900da5065bea8f5fcbd0ed1bec37 |
| TKCVH2026-C17-EN_V5.epub.sig | 85c7e7e2c7b34e6b92fd04be0d2043f3a9c61386725f2f616a690a23ec7e930f |
| TKCVH2026-C17-EN_V5.pdf | e96c10d9f9376df97941720a71d6e76225900dd7478976c707a73f447e8f0998 |
| TKCVH2026-C17-EN_V5.pdf.sig | 2ae62df7578e7232f133f446ed3ae379ca8ae2d4cab218e484ceff9a0199424b |
| TKCVH2026-C17-VN_V5.epub | 4d20900b36d796a73f2b1a1e6f908928546d9803e8f7ae4b94294701e00f59b3 |
| TKCVH2026-C17-VN_V5.epub.sig | 687e2a330b1cdc5e03303cd2defe6e0a797e12d413e755c080a008bc5344ba53 |
| TKCVH2026-C17-VN_V5.pdf | ab1e63b5d07a1ab06bca8a9196898d29390cef097cc279a45c28560c2222f382 |
| TKCVH2026-C17-VN_V5.pdf.sig | 7defb3a2651e6287720f3c7e95d1f7b8caa7cfdb40305ed6d1048cf25ceade19 |

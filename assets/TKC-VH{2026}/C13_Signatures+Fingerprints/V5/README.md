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
| **Effective Date** | 26 October 2026 |
| **Signing Date** | 26 October 2026 |

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
| TKCVH2026-C13-EN-V5.epub | fa7e4d833026e95455c27cac20b1ec72e37caa33426f999f2d9d93cc1cbf4905 |
| TKCVH2026-C13-EN-V5.epub.sig | 700e511e9fd863e8eb0a973f9a7788452847978af7bebdc0ee6569eade5d9b50 |
| TKCVH2026-C13-EN-V5.pdf | 86574e6aa492752ffe7fd5dd2482040f77ad86af39e9ea852872ef29b92f685c |
| TKCVH2026-C13-EN-V5.pdf.sig | 8884c613b8b766da18751e54e443f7de266726680290bcc7458444454502134c |
| TKCVH2026-C13-VI-V5.epub | cd4b90ff4f0d12105b34bb8961c9a453baaef1c6e9c426fe3eeb093b6d790d5e |
| TKCVH2026-C13-VI-V5.epub.sig | e410afe6ce354d395d539e0f3e8512c4034ef8da08893dfd2028c6e14870813b |
| TKCVH2026-C13-VI-V5.pdf | f4953526e5fe301b6999fa1aedd6c056f4ddcb6a6666da1e6fbecb53197c07dc |
| TKCVH2026-C13-VI-V5.pdf.sig | 6daca211dbde77004b4172710c57db87b129b90d8aba2ecd06b983a430f5896d |

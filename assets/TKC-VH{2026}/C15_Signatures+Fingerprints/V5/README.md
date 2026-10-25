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
| **Effective Date** | 22 October 2026 |
| **Signing Date** | 22 October 2026 |

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
| TKCVH2026-C15-EN-V5.epub | 138251b12b96b11dc7fad28a1047ec92eeea72460e33f9190231dfe205e2a9d2 |
| TKCVH2026-C15-EN-V5.epub.sig | 15f741c913c66fccfe2a0a95d1eb351b0ab20c97650b6d272fc5585107c453d8 |
| TKCVH2026-C15-EN-V5.pdf | f3c415b0776e56e70b10b74fed4979c48071ab690d3a4801e177dc96260aef88 |
| TKCVH2026-C15-EN-V5.pdf.sig | 8d2d18cb7f083d67688207bbcebc80feae9cdd79f50261266ff786e68150b5e9 |
| TKCVH2026-C15-VN-V5.epub | 21717aa8e735460a739e0b14c0d796b2e94a63900264ec493f6aea0b38911b37 |
| TKCVH2026-C15-VN-V5.epub.sig | 178f3faf936081f85710510e834ac1592c877800f3cb80ba2214176e362015a2 |
| TKCVH2026-C15-VN-V5.pdf | 9d70deb297fd124eb87ed2a973439f44095e2fd2a30540c39c1caec5be80becd |
| TKCVH2026-C15-VN-V5.pdf.sig | ea81c55337052d60444a93cd2c1862845326905d8a41a8764411a74dacbca08e |

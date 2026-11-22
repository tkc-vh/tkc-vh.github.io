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
| **Effective Date** | 22 November 2026 |
| **Signing Date** | 22 November 2026 |

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
| TKCVH_Diary_C29-2026_EN_V1.epub | ad2fc77c7f2c2859c39d87bda8ee2f8da3d7e718b3a7c375b165b81de712f81c |
| TKCVH_Diary_C29-2026_EN_V1.epub.sig | 71bdcc2bcbd9f9531645db57a620de9b972a56df1a70c35efacf065ef58d3e13 |
| TKCVH_Diary_C29-2026_EN_V1.pdf | 5a7907b7de8ef5daffd11c56119a26e3a8ef21155a5e19ce6dc68b381a1be796 |
| TKCVH_Diary_C29-2026_EN_V1.pdf.sig | b8850cdf29b6535aabfc716f20a03fd15119decad1e8a211c08b726814f20392 |
| TKCVH_Diary_C29-2026_VI_V1.epub | a96f3b2f8f88fff06fe9293344e660f951946905321c6942dc2be90c0082b4b3 |
| TKCVH_Diary_C29-2026_VI_V1.epub.sig | f1f9716a221e16d24077a17417113b5427536cc3de805ca8d0478883d84242f4 |
| TKCVH_Diary_C29-2026_VI_V1.pdf | 34569d405c8cca13a6c7bfe87a57086ffc142fee31ff7604941eddf62210db74 |
| TKCVH_Diary_C29-2026_VI_V1.pdf.sig | 49d51581ec26b694f3ea5f0f096fe45568af22c7d964d69aa289097f220328b0 |

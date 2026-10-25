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
| **Effective Date** | 25 October 2026 |
| **Signing Date** | 25 October 2026 |

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
| TKCVH2026-C14-EN_V5.epub | 0ceb7f44a708b6a0490968c3fd199fa39ef774301511e7f8ab1e3f4d19cdad48 |
| TKCVH2026-C14-EN_V5.epub.sig | 58cecf323ba7fd7edf8c1ad34c65aec33893ecf26bb2898079c6d18e7a4ebd05 |
| TKCVH2026-C14-EN_V5.pdf | 30d224e8c19b164f2ca3f4984ec28886c0715ddb8930e0b3658a1b38e7ac42fc |
| TKCVH2026-C14-EN_V5.pdf.sig | fd6282011421ed8e8c5a67a452facee621d7636ddb9e95d34bdb0e81e512dc24 |
| TKCVH2026-C14-VN_V5.epub | 7b2011f5885ba6966cf90dab13df6303f5618f0ec47098b9429896f468538953 |
| TKCVH2026-C14-VN_V5.epub.sig | c7e9207e5c0e5c3a3ae24ab2f40626195c6cf138729c903b2f7adc675d20b0c8 |
| TKCVH2026-C14-VN_V5.pdf | 74e5cc40f08129a6a6ebb76d1ad2d4d6088e3eaf621209111aab5a343c100b43 |
| TKCVH2026-C14-VN_V5.pdf.sig | 676aedd9afd5842589eb6f9984b55a22916f55274403254b2ec377b6e14b855f |

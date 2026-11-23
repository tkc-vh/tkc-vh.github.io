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
| **Effective Date** | 23 November 2026 |
| **Signing Date** | 23 November 2026 |

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
| TKCVH_Diary_C29-2026_EN_V2.epub | 15a2303773f213a33499019d49f36db74095583342714559b315849898e905ba |
| TKCVH_Diary_C29-2026_EN_V2.epub.sig | 4ccfd964a6e1cb494b9a4f3e7fb7381762ab80ab6c2bd0b1ee2b340b0587ee00 |
| TKCVH_Diary_C29-2026_EN_V2.pdf | 56e28d72e7228e62975e5fc2d72454c51ca4d2c63dfb481932df32ed8078afd1 |
| TKCVH_Diary_C29-2026_EN_V2.pdf.sig | bc1d1952af543881b4b9fd9a55f8a4e18a9b72654baa1a82abf0a7a7889d27ad |
| TKCVH_Diary_C29-2026_VI_V2.epub | 07959030bdee3d7c8033d71d8604a2dbe5eb3a8d3cb18d57ddfbf0e888283fb4 |
| TKCVH_Diary_C29-2026_VI_V2.epub.sig | a161b8d982d044265cadb5d58a75ef514cea8b31eb54d3c131aad09e51c6f050 |
| TKCVH_Diary_C29-2026_VI_V2.pdf | 9350b19467e903d0e97515c7b86c666b928d0b80b34966744e1cc0cd630698ff |
| TKCVH_Diary_C29-2026_VI_V2.pdf.sig | 4c0dc3b38498028b8d16023945e1c835aaad2862e90c408fb69a9e8a88e9faf4 |

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
| Mota_Google_Apple_Amazon.txt | 8fc973b52e3bb5c4f7866f6cfafac1d36dae557da115a112bdbdac3384fa8765 |
| Mota_Google_Apple_Amazon.txt.sig | 1a45927fcc7d02a387bdeb0537d5b2725ef46cc2bdbed797c9e022098c4e3b83 |
| TKCVH | 763a3beb6829b456d664918f09573c90dac1f3d7f571b188f6fa97ac798caf5f |
| TKCVH | 1850db1d4918ef61025815210efc49d0aa03d8e21cd0ded1280051eeb9528fec |
| TKCVH_Diary_C29-2026_EN_V3.epub | 0044f8089c496ba33b6c930ea5df193c619d9bac87a1f6168c8792392b504270 |
| TKCVH_Diary_C29-2026_EN_V3.epub.sig | e166e5ea8c76775e5da0358115ec17f78cfef0bc37970c4482ef44b93c282431 |
| TKCVH_Diary_C29-2026_EN_V3.pdf | b3c635c03e743b475bba8ba31d3888765a0bea6211789e48740c632139fd00b1 |
| TKCVH_Diary_C29-2026_EN_V3.pdf.sig | 2887349d08325e92083259bcc1c6b5c24fd268a4afce2ca78a1e15e3462c9fc6 |
| TKCVH | a5eb45cf4a0274c585f3c693ddfb4ae6ab2262e99cb44ec3a535cd3b05eb9b72 |
| TKCVH | cb1343fdc68c28f309a20a914791f864869b0c09f22cc27223c64367f40f8a2c |
| TKCVH_Diary_C29-2026_VI_V3.epub | 7f038972af5047f729531c1188c2638184de0a3fc08d69f2734c0acb70411925 |
| TKCVH_Diary_C29-2026_VI_V3.epub.sig | cec017fe306c65e2771b7a8b7bec48bebe208f4b8cbb2488f3cb8e8ca9c0d583 |
| TKCVH_Diary_C29-2026_VI_V3.pdf | 6886f3ca67a210f71f9304b2d4a1d3a0ca308c9b21a4ffc3ca545cd031be1140 |
| TKCVH_Diary_C29-2026_VI_V3.pdf.sig | 25e320c01205d5e685828afe9f27e750478eeb27034176bc23116bab23d5107a |

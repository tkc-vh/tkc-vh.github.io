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
| **Effective Date** | 27 July 2026 |
| **Signing Date** | 27 July 2026 |

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
| ` {C43, Sep2025}_EN.txt` | `9284c1360ba3ced6743a77609ce7e221b88c60d63d5e8083908c9bb4b76cfa26` |
| ` {C43, Sep2025}_EN.txt.sig` | `9b8b86154dc2614a74ecfb5d4636a5de6ed2de4f80bc1e822d93bc707a24107a` |
| ` {C43, Sep2025}_VI.txt` | `9a5b4bb8697f8e3a6afd2f4e516d08ce6873f105b78b9dc301a0488c8a46d202` |
| ` {C43, Sep2025}_VI.txt.sig` | `0330e135c5910854b2dac7e2eb472aec36a1dac2103c58c11301bacdd5d0f59b` |
| `SHA256_Fingerprints.txt` | `3dd86157d382b54fe3140345a431efc3d2001eb796dfe85f9bcb490bae5c60cf` |
| `TKCVH2025-C43-Corver_EN.jpg` | `46371673550e0eecf0bd13b44d9303eb0035b0be0c8e95fe801cb8df70e960dd` |
| `TKCVH2025-C43-Corver_EN.jpg.sig` | `60a21074f683a7022b9031add8bc2e653523fc76eda756b451925b2905657f65` |
| `TKCVH2025-C43-Corver_EN.psd` | `de2003d9a955dd3fe2109510eb171e881378c632952f778c6c23074a692224fb` |
| `TKCVH2025-C43-Corver_EN.psd.sig` | `3bc81a0bd83839ae73c8085a1d84bcf2db07ccc7b4032671375e8be478ba95db` |
| `TKCVH2025-C43-Corver_EN_APlE.jpg` | `2f41631ea3aa899f89a89b2cd7b88fdc3323614ea655bdf097b33bc09558d0a3` |
| `TKCVH2025-C43-Corver_EN_APlE.jpg.sig` | `3b03e3af30118ad5b68fc23ff2f808ec5be8ce5aaf8e2080b7274150591ab1c7` |
| `TKCVH2025-C43-Corver_vi-V2.psd` | `f0ecbaff45c7f4ca52a2c4f96d7ddb0ce774194973bbf18363f7404cf2d11126` |
| `TKCVH2025-C43-Corver_vi-V2.psd.sig` | `d44b15fddc77615ed996fa28a56ff99223f4d74f51e181df90bb559ebd0b61d0` |
| `TKCVH2025-C43-EN.epub` | `4b93b4a6eee0210a1eb07003fed5498c331619ed2e55962680ddd5cb25e83892` |
| `TKCVH2025-C43-EN.epub.sig` | `a5b8ded571590ab601c4ba41037330dcd6637023e8b9fff9775f837dacedf230` |
| `TKCVH2025-C43-EN.pdf` | `cd6fd43113271c84ccf39a4be7b6d0869528350f84bb91d0303647b284e00058` |
| `TKCVH2025-C43-EN.pdf.sig` | `4bc8e45fbbcf4d599a5918590db316f1ac06317650c9ef8fc6690ee5a61c9229` |
| `TKCVH2025-C43-EN_KDP.pdf` | `a992ad0de1ab761a71224d8c5a376401ec58efa3678751be87a07abcdbc06a49` |
| `TKCVH2025-C43-EN_KDP.pdf.sig` | `f73bbd7275e2c1b493af81faac79c7e64e450c29c824fe48d8b42d5266564b59` |
| `TKCVH2025-C43-VI_V2.epub` | `380c5e695e3dfd64ec5933e105eac43bb44c5fa7292156d2bf68206aa3e4ea0b` |
| `TKCVH2025-C43-VI_V2.epub.sig` | `8f87fabdbf115ac607e37d7c706b7f8ba4e3872aec9cdb7e7bef3503fefe18f1` |
| `TKCVH2025-C43-VI_V2.pdf` | `465eca28aeafb19b86f39896de474f4b755fd2616a3abbb6c05db51e2735ee80` |
| `TKCVH2025-C43-VI_V2.pdf.sig` | `b6bfc339f4f1659700079ad1f0927c4891edf1f998845fdf44c9a39ffc57ea4f` |

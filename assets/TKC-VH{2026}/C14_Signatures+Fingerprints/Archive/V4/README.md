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
| **Effective Date** | 19 September 2026 |
| **Signing Date** | 19 September 2026 |

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
| `CoverEn.jpg` | `9312b0ec050636433fb28ac6bac62e3f6b64d8a473fd6213f8092738af56c290` |
| `CoverEn.jpg.sig` | `2a01832a2ab3f6f9d43fd6a413a14d9dfcd8d14acf29c209eb2dfd7636c07196` |
| `CoverEn.psd` | `0228eee666308669c1e070a65ae939aa5937f295c18513f80c6c7b0d3a0ebb4a` |
| `CoverEn.psd.sig` | `c9b505490f72df4e14d4b9268793950897509a7b4ab2958eb6342b361a90dc06` |
| `CoverEn2400.jpg` | `a3ec6f166608f4e2f4843d6b18495f038cf42662a3b3204eb2555e1b628fdaa6` |
| `CoverEn2400.jpg.sig` | `94b792da6fa6133abc6408eb87ba4bf43a740c1c94d13f8e32fff395743cb8ba` |
| `CoverVN.jpg` | `ec71290f250f17b7db14e6ef4be245d731db9a48fc8d8107a0fa7ed5b2b848c9` |
| `CoverVN.jpg.sig` | `7330ade73d729ded30bd137b2de63dce1dc393f12331b649a9163b66595e4926` |
| `CoverVN.psd` | `979ab68fda64e6eb2be6d1695b03d20eba5b485cc20bdfbc48712cca414593e4` |
| `CoverVN.psd.sig` | `8d35bc4c0fc8eae350de435ffdad9f0f0853a5970a14f5a070850bcaae42e048` |
| `CoverVN2400.jpg` | `0a02dd07b78121e1dfd990ab7e207665ffa72af3470e515d2cda5d4217cee126` |
| `CoverVN2400.jpg.sig` | `9a9279afc05c13c1b9fac35b26ae6bfab2ff3cb83cfd609e84212c37ac03ae67` |
| `Eternal_Cosmic_Union.pdf` | `fb5338a20fda9148dee9d593077e82b4d7b37ecb6591890296e0272aba5d6558` |
| `Eternal_Cosmic_Union.pdf.sig` | `60d641c15566b8013240899b4d0c5ca9f3da62cd5e6d358f29dfd14c2a3844ed` |
| `Eternal_Cosmic_Union.pptx` | `b2d90dbef32030ece6bc280bac7240b417177a30f69edf0160d61579bb39412c` |
| `Eternal_Cosmic_Union.pptx.sig` | `a926d7593d0b3f25095aeea28d57abb41e899bcb338f7f8adeea28cd3fe017a6` |
| `SHA256_Fingerprints.txt` | `f0e3b4b0aa79e0ceb604bf42296636e1db6f46f02faab0be69ea063fefbe6ad9` |
| `TKCVH2026-C14-EN-V4-KDP.pdf` | `75647f9f89813e9eee7e11051f215137ac56733c53576497a1ba26daea748c76` |
| `TKCVH2026-C14-EN-V4-KDP.pdf.sig` | `0a50fb79072b6e71db65fbc106a6c15945536ad58920f47f90aa2c447b9b2927` |
| `TKCVH2026-C14-EN-V4.epub` | `f52577f854f4ddc5e51f3d354ff6555401f4f2eaf09b921fb7616431e280f11c` |
| `TKCVH2026-C14-EN-V4.epub.sig` | `931604a1eeff71a8aacef8e6ee8b12536e36cc2a2d0690a6d951595aa1ac4e21` |
| `TKCVH2026-C14-EN-V4.pdf` | `508a67cec64e7badd43dfd0bc0c36ec35da2f7217cf1b0a9c975f95bd30d31ce` |
| `TKCVH2026-C14-EN-V4.pdf.sig` | `7a548b3cfca0befd6118fe5685f5ff8b28306b7133b4b4faa2d1e814ed1f48e3` |
| `TKCVH2026-C14-VI-V4.epub` | `bbb9a14afc998491eca9120e37eec012a59e289cbe62dd4f1c36c8f7c339b42f` |
| `TKCVH2026-C14-VI-V4.epub.sig` | `77ee27638b192b8dd0c054e39cac1cdca92d940b5238bada8bfcaa582d52b92a` |
| `TKCVH2026-C14-VI-V4.pdf` | `d93747990a4246d35e2964f8ff37559b9528b79013bec7ad9e3196906ee67401` |
| `TKCVH2026-C14-VI-V4.pdf.sig` | `d4fe06f8333bf9e070949b83f24ad9d8e1d5aceed151a7281612f6097591d897` |
| `_ TKC-VH {C14, May 2026} THE EYE OF SUPREM - TRAN KHAC CUONG.txt` | `110ae3bd2e9dd84fd3d82dcf62b2e3c240aaabcf2f897af0efab6530debaefb8` |
| `_ TKC-VH {C14, May 2026} THE EYE OF SUPREM - TRAN KHAC CUONG.txt.sig` | `4eeaf88b81d1b39f1b1fc35b2048cce48636217ac4a458b6f427fcd0f1eeab0a` |
| `_ TKC-VH {C14, May2026} Mat Chi Thanh Dinh - TRAN KHAC CUONG.txt` | `f61216e78fcdd6f6b2323564045a4fe513eff59c51627604cd0416f707f72fd5` |
| `_ TKC-VH {C14, May2026} Mat Chi Thanh Dinh - TRAN KHAC CUONG.txt.sig` | `cc5c285f26cc58ea4bcc77c3546087e44fa65c61084c709d4e612339f37487eb` |

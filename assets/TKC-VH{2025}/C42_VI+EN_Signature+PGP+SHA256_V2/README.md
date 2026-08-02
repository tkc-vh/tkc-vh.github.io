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
| **Effective Date** | 02 AUgust 2026 |
| **Signing Date** | 02 AUgust 2026 |

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
| `Orion_Grimoire.pdf` | `439c50c79d2f757adb7919864c928d8e4d445913ff0a02cde987421bad675fbc` |
| `Orion_Grimoire.pdf.sig` | `6165964f29b3e8193bb09f14506dc5803d5277328f77eb4a19bd32d86c098b7a` |
| `Orion_Grimoire.pptx` | `e8bd4f4e40f76b6b67334c16026dd3d10f9e713039ae7fc9119ebdf65b6256f7` |
| `Orion_Grimoire.pptx.sig` | `4baaf85e7b73330332034091a05ef11172352cb19c2ee18a2dacbeb4e369ea09` |
| `Orion_Luminous_Scroll.pdf` | `2fd012ca76eea0e58c30739f0a9bbb45de5e30c2eef18c7c37a45e35c035296a` |
| `Orion_Luminous_Scroll.pdf.sig` | `2d4a35f92733887327ac2453f3cd4ee108665af7236c440ab642397556115711` |
| `Orion_Luminous_Scroll.pptx` | `0418607db0027bc4ca1409e9fa4922ba5db4bbd8b416ad3ec1189269c3b72c9b` |
| `Orion_Luminous_Scroll.pptx.sig` | `44a28de02d71f68662d340f97100bcda078d657767ab943f930e96f47df7833e` |
| `SHA256_Fingerprints.txt` | `ec9907223ad89215017770732b6cce066c6cb6cf035237c38702f41b3c9126f8` |
| `TKCVH2025-C42-Corver_EN.jpg` | `b0b9bf78e98bbd547d08dd993b51e8bdc71af7c08c5952fd2ec178de45953189` |
| `TKCVH2025-C42-Corver_EN.jpg.sig` | `a2c5e8ee66dbade4eb2bbf010a040346903b9c9dc2f8818ba4fd7139bf8a086b` |
| `TKCVH2025-C42-Corver_EN.psd` | `532bf315474ce078ca3a853382f2f83282b528a0c1754f72145d2aa98ce7c1a1` |
| `TKCVH2025-C42-Corver_EN.psd.sig` | `9509d5d9851d3cce160075a5d22314d92d825f7b1a3f2daf48cdc35abdadee88` |
| `TKCVH2025-C42-Corver_EN_APLE.jpg` | `d55815a133b85f447faa188a0f63a100970f46ce287c7fd56e691c9bc0d18f2a` |
| `TKCVH2025-C42-Corver_EN_APLE.jpg.sig` | `90aa7bc1146bbe7505527a888a2f68dc96426c6aaf47e4f813fb978710258359` |
| `TKCVH2025-C42-EN.epub` | `3134a149999af39c7ff48fd97475593882e781aa20bd48b564e26d247ec6f366` |
| `TKCVH2025-C42-EN.epub.sig` | `9e4fc1b1584d89b6f68180e31b2ee071288cff3b7396f872f4aeb73460b26963` |
| `TKCVH2025-C42-EN.pdf` | `adbe2191b6724a02fbbaf86e6ae2a9e7856a7713809c0783b785354f8e0ef21c` |
| `TKCVH2025-C42-EN.pdf.sig` | `e4b365feb9ddb8d83a14d6a8ef96c4ee5f3e26b23b3dbd657fac901e67ea7445` |
| `TKCVH2025-C42-EN_KDP.pdf` | `5b1787b96a7cf2902fbcf631da220cab616c10f2bf9de0504eb675add31ebda1` |
| `TKCVH2025-C42-EN_KDP.pdf.sig` | `cd3c556b417544a91f3030ceedaff7f31d7aeb62210bfd3f3b6d268342401683` |
| `TKCVH2025-C42-VI_V2.epub` | `b1d44ac22523e687a82d54defda092c4e446dfa6e0f97b7cdb8a20148d232043` |
| `TKCVH2025-C42-VI_V2.epub.sig` | `33321a998a9c74c378312e1fb26e528623624432b7db5f564735339b653bdc63` |
| `TKCVH2025-C42-VI_V2.pdf` | `033158c6678490ecbfbce334366944b2f17ff77c0f0f8fb2d768f54545efbaa5` |
| `TKCVH2025-C42-VI_V2.pdf.sig` | `bc2d1212ba4750e0fb2508f1319198aea8ad65b2ae460e9c6cabda64eb62a850` |
| `_ TKC_VH {C42, Sep2025} Soai Ham Orion TKC - TRAN KHAC CUONG.txt` | `9c2f722d5f7059ce3b84459ee2e74990ef960a930a28b129cf04dbf67431f287` |
| `_ TKC_VH {C42, Sep2025} Soai Ham Orion TKC - TRAN KHAC CUONG.txt.sig` | `d9e4d4dc42f2a03c5eaa4cccbd98ed184dcc39f1e43b51b3234ea9dab1362f70` |
| `_ TKC_VH {C42, Sep2025} The Flagship Orion - Tran Khac Cuong.txt` | `d31429faa8ca4c1a583adde1cfcca536594b27a553ab9250d695c32f207b81ac` |
| `_ TKC_VH {C42, Sep2025} The Flagship Orion - Tran Khac Cuong.txt.sig` | `f582b00cfaa50f3432f5a7ad14aea0340db5e09352fba31660c994045bffbee0` |

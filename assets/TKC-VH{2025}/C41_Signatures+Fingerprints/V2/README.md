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
| **Effective Date** | 03 August 2026 |
| **Signing Date** | 03 August 2026 |

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
| `Covenant_of_Twin_Hearts.pdf` | `f18c7418062beb6b3189bca79e414e66aa147f8131917159de97f99575f2ca07` |
| `Covenant_of_Twin_Hearts.pdf.sig` | `5387c3a656ab1cbd9589e8fb0a64aec695681712a7da9b63dd8854b91dbbc70f` |
| `Covenant_of_Twin_Hearts.pptx` | `c0204329e075a6178662314ed43cc453b976c2d0d0d5413dea76dd1cc67a0594` |
| `Covenant_of_Twin_Hearts.pptx.sig` | `e505ece9539733f72841baf9bac8ad6b6367b99913d96b5543958375995d63b8` |
| `Diamond_Eye_Dual_Heart_Covenant.pdf` | `0752d9ef56ab67334f471ed243f0f60c4314ed81301e2f9d44b29f18c4e558cd` |
| `Diamond_Eye_Dual_Heart_Covenant.pdf.sig` | `fa546a97849a996b8842f7e421372a7e85265b54466aeaae7db85e59fdcff1d1` |
| `Diamond_Eye_Dual_Heart_Covenant.pptx` | `b4f11fdbe2167b6cd0d2c51aa08ca6731b5ae2aabae4688c4b0fbffe7861ca64` |
| `Diamond_Eye_Dual_Heart_Covenant.pptx.sig` | `e0a955517aecb075f637941cb613f13ba4b134d05d5fa08f8cd26756287535d4` |
| `SHA256_Fingerprints.txt` | `3d7bc4b931dad54f6dea42bd2f685f3d4eb1fc3ddee0cb4a8b38f2d244b97665` |
| `TKCVH2025-C41-Corver_EN.jpg` | `ae8d2f40fdc29fe374ed5545c3f57faa32ce53a17648f1e2a2b768e1f87e9428` |
| `TKCVH2025-C41-Corver_EN.jpg.sig` | `2eb7eb19debb0e8c4e234ab6c417da5554aa5670d6a6baeff6d1bb1aa0e472b8` |
| `TKCVH2025-C41-Corver_EN_Aple.jpg` | `c215fb958095fb17eb9d45d4fbf27a6ce3374e66cab35add81b203585c86320b` |
| `TKCVH2025-C41-Corver_EN_Aple.jpg.sig` | `72a4f69478830f8b6f60a0de465454f57a6afd8f8142c2112478768dcf5a8be7` |
| `TKCVH2025-C41-Corver_vi.psd` | `304bbe1ccf704910c279ef1dbc9efde0b1f21762e6ac1dcacf6fd80c3e342775` |
| `TKCVH2025-C41-Corver_vi.psd.sig` | `a4c9b1f88e365c221f30133d3bebdba78666de0deb4af28d8ea8a9a7f48d6a51` |
| `TKCVH2025-C41-EN.epub` | `2e8dc83e9c1a93999889003ab776473f19883b6456aa5005332eb66f71a0a5cd` |
| `TKCVH2025-C41-EN.epub.sig` | `3a4396a14a37265f4df785ca35e59cd50b5bd8c0abaee616baa830512bdd138a` |
| `TKCVH2025-C41-EN.pdf` | `fc1b494a546bcddfab31bd5630b84c0bcd379115c770aa56789eaeebb4e11f2e` |
| `TKCVH2025-C41-EN.pdf.sig` | `1e83d079364c273803412e40a2af6b5c19c55112f7331118175135bf3d921bc2` |
| `TKCVH2025-C41-EN.txt` | `b66c58455d21a7e9a109b30b69d1dffb46d3fbf70d70c3de6f13bfb5c9a796dd` |
| `TKCVH2025-C41-EN.txt.sig` | `2cd152dca4706cf2d8e1e745176d04b34ba64d896bb2d510a98e2ad79e3b4edc` |
| `TKCVH2025-C41-EN_KDP.pdf` | `f2f42f3eb78287822dc568785be321e4bb66fc891c992b260352b3ba34c5af8c` |
| `TKCVH2025-C41-EN_KDP.pdf.sig` | `773e974a0d922b72bab0ee0ddd728dfb8dc27fee434137cb7a395387fee407ff` |
| `TKCVH2025-C41-VI_V2.epub` | `0d50ce7a4a06eecff5e6061a328800b232cd84a850835da8c75eb916e7d462ef` |
| `TKCVH2025-C41-VI_V2.epub.sig` | `46d2d64db763855a21a34cff913556348705a4cc18640ec0df965b7713a73971` |
| `TKCVH2025-C41-VI_V2.pdf` | `2209f106b6a3a7098d2b1cc241883aadbf0c9ea1b4f53b7ba320c29b5f23369f` |
| `TKCVH2025-C41-VI_V2.pdf.sig` | `268ba029d45fc2844680f6cfc7cfe02cdf064b131d5a6bbff8656490c11cc996` |
| `TKCVH2025-C41-VI_V2.txt` | `064fb1921dda9ea1ac1354bf61caf150bdbe3168d349cb7c5119f73d06bee094` |
| `TKCVH2025-C41-VI_V2.txt.sig` | `3eda15b843bb9d8f9a3a81f5abe3fc29abd285f7f569d86339351ecdb7794c50` |

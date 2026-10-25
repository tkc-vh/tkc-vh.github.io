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
| **Effective Date** | 20 August 2026 |
| **Signing Date** | 20 August 2026 |

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
| `C19-2025-EN.txt` | `10755848b000f9f758848bccedb972e14c221222a3f3652cd3e237d024cd86e1` |
| `C19-2025-EN.txt.sig` | `5cdbbdb8b4d1a1732d68854d0941c27a0050e5e42aaedf75086b011252d2663c` |
| `C19-2025-VI.txt` | `f47d5aabf96b8148d4f638cc22bee4b0086a3df976d4c08519c7765af8af7304` |
| `C19-2025-VI.txt.sig` | `da52ef5d8f26d68e5ac29da536e154e75165fe3ebb818c7c8e72128ae58b03b0` |
| `Eternal_Star_Alchemy.pdf` | `f85ad064069a0a056980ddf3ff876eb05d3bf6a8a523bfd388e412d8460e3af8` |
| `Eternal_Star_Alchemy.pdf.sig` | `dff97add8d13058db4120da2bc1cb8a2ed08bd225699821392db8150c94206e2` |
| `Eternal_Star_Alchemy.pptx` | `94265952acb37f9b3587693b05453930c91d7d7f9dfa52253ae5ecc4bac190b2` |
| `Eternal_Star_Alchemy.pptx.sig` | `d457ebaf3941cd3e71bbed087dc0623cca9706150aded952ebb3f1f3b6c70a0d` |
| `Eternal_Star_Grimoire.pdf` | `3e1822658d033c7d1815185825a097f1f7892148174d2a3e75d4e531cdd8f78a` |
| `Eternal_Star_Grimoire.pdf.sig` | `a052c9e32b696b1e6c0b3481fc211995b75e45e476ff7105307bbe208659f5cf` |
| `Eternal_Star_Grimoire.pptx` | `2e693ce50d1281a2ca9c61943a84b74a247a818abf1af7bbeea1623db2b588fd` |
| `Eternal_Star_Grimoire.pptx.sig` | `3be8829f94493bcb9a680f7510b0df78580d8b6231d3a6f7c3d8c6fd28e5356c` |
| `SHA256_Fingerprints.txt` | `faf3179ac042b274d162295befac212692a4fc988f76d461f05be299d53412c5` |
| `TKCVH2025-C19-Corver_En.jpg` | `cd3f089e1a5992edc4703d6656cffce26218352fa6d31d0789f185c2c27ff2fe` |
| `TKCVH2025-C19-Corver_En.jpg.sig` | `9e16e9dd4848a064cbcdb84eb46e068e82c0338482c815a82e387d23b35e489a` |
| `TKCVH2025-C19-Corver_En.psd` | `a13a5898e2ca5df1e43bab6ab140786b7a17dbce306e1f4685e7edfdaa5d0750` |
| `TKCVH2025-C19-Corver_En.psd.sig` | `73ebb39438d23d4b68fb461abca972a032fe2af6cc7e08474c21ed1be54cd7cd` |
| `TKCVH2025-C19-Corver_En_Aple.jpg` | `1df5c27e4c807ad3b9b73da9337434d0224690338f494a5ad4d7b1b531688afa` |
| `TKCVH2025-C19-Corver_En_Aple.jpg.sig` | `79b2640f722e93624cee529b4d5bbeebb314ae188451b0cfae637215462a4c6c` |
| `TKCVH2025-C19-Corver_vi.psd` | `ed82ea6006d3ef61b51fc0cc7c5882b6d6bd4c3611c7223d46d20f85fbfb7c46` |
| `TKCVH2025-C19-Corver_vi.psd.sig` | `63d4d4b8991b8299a95e75fb314e2e1cbd81c03c6f0841779f580d71945cfe25` |
| `TKCVH2025_C19_EN.epub` | `3140848be0e3f353cf716ab866f5c2b7c01166b7c9c2547ba005c29cfd01934b` |
| `TKCVH2025_C19_EN.epub.sig` | `ba0177b6f148a8cac8a5617760fa83f24182ab936035ee08f65ccce4c902d382` |
| `TKCVH2025_C19_EN.pdf` | `7b9896f91c39580c1eb4aca2eb21733ad5ef260e750bebea8d02076f8ff12a00` |
| `TKCVH2025_C19_EN.pdf.sig` | `64d50bc0e0dfb2a1872e7b19395e1f8b275e097a3ce0b236fe523d0f0cc1496e` |
| `TKCVH2025_C19_EN_KDP.pdf` | `89b18edef3c8fa6ba46704f83163c93639b513457f3a4e32a96019bc79f904bf` |
| `TKCVH2025_C19_EN_KDP.pdf.sig` | `13c5d6f87617d2bc08279b4062341accff8c329c87ca001b64a58e4a270e9774` |
| `TKCVH2025_C19_VI_V2.epub` | `d5712dae9a4b02d327f32113c406224c9273af8991369ea3186d0f5a8358ecf7` |
| `TKCVH2025_C19_VI_V2.epub.sig` | `df51789a95d514a4e69687ccfc6d84f3741e50ef586a3876c01b82d7514d38cd` |
| `TKCVH2025_C19_VI_V2.pdf` | `7abef95802c5daaa4c6d9b0826fa7282b527fe4b3fdee6577230ebb410791506` |
| `TKCVH2025_C19_VI_V2.pdf.sig` | `cab2eeb0694ef49f40296aa961a1205bd82b1ba27ee06cca2250275a98ad23c1` |
| `_ TKC_VH {C19, Apr2025} Khai Mo Mang Quang - Tran Khac Cuong.docx` | `06aeffc675434c92a81b1eae8165aa2dcd1d85b2401f84aea1f8f0230d279081` |
| `_ TKC_VH {C19, Apr2025} Khai Mo Mang Quang - Tran Khac Cuong.docx.sig` | `2d9128b0e39b6a310e70eff4f426eb2b234fad805c05a1c01d360798c40081cb` |

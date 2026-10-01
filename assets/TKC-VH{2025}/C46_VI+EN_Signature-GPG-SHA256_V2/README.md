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
| **Effective Date** | 29 July 2026 |
| **Signing Date** | 29 July 2026 |

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
| `Celestial_Heart_Seal.pdf` | `1c9376ed350bab473341fa0f953e1c88e8b72b4c0425c03c6cb06cf5eec87919` |
| `Celestial_Heart_Seal.pdf.sig` | `34d0345c35029cfa36e57f8dc508d45bfd0bc8dbeaf7c8bc8ea7870d5ccebf7a` |
| `Celestial_Heart_Seal.pptx` | `55a3dad56d2ec59f4825cb47c65ab796522399ae3fdaddd08a254b0592c53fb2` |
| `Celestial_Heart_Seal.pptx.sig` | `6c9e17ac01f48939dba60308f7e446626c8102905fbf846e7d704d9e2cdb7fd3` |
| `SHA256_Fingerprints.txt` | `3c18cf450f3d03b67bd91c04766b3aece1a1d7e61afb2364da240b2360f3b50a` |
| `TKCVH2025-C46-Corver_EN.jpg` | `e21e512086c7abc198f0bc6896a08b85526bc0dd512506075f16333d8b0bb5a4` |
| `TKCVH2025-C46-Corver_EN.jpg.sig` | `a8aa5837005b302e0afb649754f4c18459da4e9c68d5cc048abad2cc608dabbd` |
| `TKCVH2025-C46-Corver_EN_APLE.jpg` | `d5cd446560eb0ad8bfbbfc966e519abf88c9c53b260eb7c187d1f52d2cdf2183` |
| `TKCVH2025-C46-Corver_EN_APLE.jpg.sig` | `677320d2c3ad0bc43aaa48d2924cfe8ecb0838182a80ac5d71fa508bcbbcd8e4` |
| `TKCVH2025-C46-Corver_vi.psd` | `53647518f25ea483b552d9babe03e4ef6b22bc77e2cbae8d88f458a530033c70` |
| `TKCVH2025-C46-Corver_vi.psd.sig` | `2269360a837505128120b1e50423d54991c2deeef834cdb1ded53c322c2e8243` |
| `TKCVH2025-C46-EN(V2).epub` | `a7791816707cb7419428bccdc820aa4451f89c6ea805f1e2498b4e371280bd7a` |
| `TKCVH2025-C46-EN(V2).epub.sig` | `ca8efcd97aab1aab4426985208d7381797f2754a1476aaf4b891198e7ecac364` |
| `TKCVH2025-C46-EN(V2).pdf` | `63bad8fef3941a14bd5e026536564db74e96b6561089e7d158d94acab4307c4c` |
| `TKCVH2025-C46-EN(V2).pdf.sig` | `18b88d2eb248df224aaebf96d0e8d6e9676714350adf87fdf26b26f699c7ab90` |
| `TKCVH2025-C46-EN(V2)_KDP.pdf` | `cf011fdd7ec6b2c230f8a0a3ae6d97de5b4438136e3cfcfb1715eb65bfa46667` |
| `TKCVH2025-C46-EN(V2)_KDP.pdf.sig` | `e39d6a7c19d653ecaade27fae8b604418ace79ac2afb9a967da28d990e440d82` |
| `TKCVH2025-C46-VI(V2).epub` | `fd842085134541aea4c76764e626c086258ef71c4f55eb0b97b3989804bc60d1` |
| `TKCVH2025-C46-VI(V2).epub.sig` | `3cf186fc3b09f9dba3ebb2c8c69801406e6e370b854f198748363c575e9fd58b` |
| `TKCVH2025-C46-VI(V2).pdf` | `4078ddd8033d701efa2f916a9fb693027ffde725612d169b204237882212ebe6` |
| `TKCVH2025-C46-VI(V2).pdf.sig` | `41b7f77ae881df2ae8f5ef93f019838275ca475528422f5952523378af60e82b` |
| `The_Diamond_Scroll.pdf` | `c2a8ab6c6015c1ae7fce0f646700e071c6404238858df33cf455307a78809910` |
| `The_Diamond_Scroll.pdf.sig` | `c8a481703cb7f13341795c9a119002e028a143e9ff89f9e82add2af315c2d38d` |
| `The_Diamond_Scroll.pptx` | `f875cdba8fa8ff554075965085a2a148ae894dfffa4dd87548e3b68e54057e2e` |
| `The_Diamond_Scroll.pptx.sig` | `e4a87cb31b8aa01ff3668ecc76c4208cde9102d6f6a09d4dec71abd8af0dcd66` |

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
| **Effective Date** | 31 August 2026 |
| **Signing Date** | 31 August 2026 |

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
| `Eternal Sacred Union - Unknown.pdf` | `1aa97563f7437c20af251cb7fe9da134e6232bc296d136348fe16afeec12e265` |
| `Eternal Sacred Union - Unknown.pdf.sig` | `4bc1d3f710da0db4cc0f127e7e40ba01e9d3eaa91dca88f9aaa99b809430b122` |
| `Eternal_Sacred_Union.pdf` | `1aa97563f7437c20af251cb7fe9da134e6232bc296d136348fe16afeec12e265` |
| `Eternal_Sacred_Union.pdf.sig` | `fb7301db8c26421d3e5f521d4be6cfabffd0fa7f5cad98db8bf7cd662a8ac4be` |
| `Eternal_Sacred_Union.pptx` | `c729ad26695cd2bd7954f5e492cd3619285ce11cd1f1677682f2a843f13ac65b` |
| `Eternal_Sacred_Union.pptx.sig` | `274f8eafae156c66faa05c4c03dfbf9d074eae5aa34b9d66eccea84585e91923` |
| `Obsidian_Quantum_Codex.pdf` | `c4b914a8ce90cd5df6d2c221c3357dec83f8f0c7d123f8f35c1f16be3330ddfa` |
| `Obsidian_Quantum_Codex.pdf.sig` | `827daef5ef04c01d6b04fbb898bc8e6558682d7cc5018b868108a80f5e242242` |
| `Obsidian_Quantum_Codex.pptx` | `01ab4a66d3a6a749d4e1b5a074def98e036f86b9e72614e02b749e89f717a556` |
| `Obsidian_Quantum_Codex.pptx.sig` | `f50e1d370313f86f175474ca93fee63d11fb3bde2324ce61a884e345efd09d5e` |
| `SHA256_Fingerprints.txt` | `ae9d6652f7fb17ca98f9984c8b223d9e7a838cc60727cfa9eeeaf12aea1e6764` |
| `SongHamOrrion_KhaiMoDongSongAnhSang_CotSongLung.png` | `9865bf80327b97f9c9e4cb3e576fb6c19825370083b7f9c91c3f021591ca39b6` |
| `SongHamOrrion_KhaiMoDongSongAnhSang_CotSongLung.png.sig` | `d385401187dd4bdae631979a7d25700a49ccd5a8100230f8c72d0b7afda74e0d` |
| `TKCVH2026_C23_EN-KDP.pdf` | `a2c57b75ebe9916c74b37e61bfd8b902e389626c0644ea9afa6c23964a0fd367` |
| `TKCVH2026_C23_EN-KDP.pdf.sig` | `d7497009e2cfa1c7c6f14ee97c84a5346c3d167b7464b59f223b4085cc04881e` |
| `TKCVH2026_C23_EN.epub` | `cf6236053dc21c9165b791550644fc04a82e4ee5905833dc6c320a100e895383` |
| `TKCVH2026_C23_EN.epub.sig` | `1d1826f1c008870f4d8728caa57ce6ab4c597fd54cf1520436cd7c0d8b6c9d73` |
| `TKCVH2026_C23_EN.pdf` | `7c264bdfea9cc67a9cdae8b34afa3102494eca5abc80f7caa22eef0f4da50ba5` |
| `TKCVH2026_C23_EN.pdf.sig` | `4b05e1b95f90a3157a3dc2bdf454ea593ab026d6030a002f32c77a4331bd78ce` |
| `TKCVH2026_C23_EN.txt` | `87cb8adbb70be0ae0081dbf6d19f32813ff4eb21b022c3e9f661b128b2c4f991` |
| `TKCVH2026_C23_EN.txt.sig` | `e64b62e4b8408e2351b922cb68e13d0bf4445aceddb0b3b7b9f4ddc14733fbe4` |
| `TKCVH2026_C23_VI.epub` | `4510f9c4f2453441a96736f8891fd1c6cb75e2d106ab41290d9bf2002c2ead18` |
| `TKCVH2026_C23_VI.epub.sig` | `c1859ab366a5188a0bdfc0a22d6d2b001833347f2246106d2800ca1cc8f307d4` |
| `TKCVH2026_C23_VI.pdf` | `5bcf0763d72dd0b2870da176c4097ac5388dc2e86881d92e75dd1631957354bd` |
| `TKCVH2026_C23_VI.pdf.sig` | `2385a413d1d68d0e0f3b6611655c00041087853fa36f2ac4b9ddf829838ef15e` |
| `TKCVH2026_C23_VI.txt` | `b437b8816c66e0df8efb77fae2c83e1d8a5a406494ec55a6659ff18b90af9e28` |
| `TKCVH2026_C23_VI.txt.sig` | `5e41f3c7ac05ea18f414aa3bacc157f08dd50c5ada601f7a3d760a31f95d8a0e` |
| `VuNoBigBang-CuongCuongCuong.png` | `a4e1726d1739a262f50f98c730eb554444aefc2a8c8fb01fd86361710e102448` |
| `VuNoBigBang-CuongCuongCuong.png.sig` | `d6e47c741ff25b1bb85df7d6e80d1e7912348856246e3ba43794f6540cf924de` |
| `_ TKC_VH {C23, Aug2026} The Roar of the Wh - Tran Khac Cuong.docx` | `5691975cc856080d621280003580c0559a626b15d83773bf84eff2a245bb9a8d` |
| `_ TKC_VH {C23, Aug2026} The Roar of the Wh - Tran Khac Cuong.docx.sig` | `6207ed9e01aa07b57408634fe285c777b3726abebf01a726eb4044ce95a0dea4` |

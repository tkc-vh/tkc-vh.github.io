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
| `Cover_En.jpg` | `b84850b68b8a7df54d86a4cd450382d17e1281aab68177ff84473b8d210ec1a6` |
| `Cover_En.jpg.sig` | `df3a43d751d783ab4c8795249f103b22099139eb4e67ccb31fc5fb49ba165706` |
| `Cover_En.psd` | `d5ef11276e0401e396f7f3036669b59d0af9533bfac1a467a0ccb26b3d573f76` |
| `Cover_En.psd.sig` | `3b4584d967eef0e89e946bb6e07be84a68a92ec39120b419cfb5c2a604ac1638` |
| `Cover_En_Ale.jpg` | `5ffe5c7c67b3a546cd4fae5a390a9da46ea33c574a795d5b696bebf12a908bfd` |
| `Cover_En_Ale.jpg.sig` | `65db2dbe5dd1c820c234e9f29cb26905e69af31ff1520bf06a2f569750e3fe09` |
| `Primordial_Divine_Unification.pdf` | `b602176b11d860df40489eb49fbc7db53b6f284c14c09a6624afd66789d16261` |
| `Primordial_Divine_Unification.pdf.sig` | `edc286b46ed2ffc5e9147ede12db8fd1866e1ae820970ee736af3bac65912434` |
| `Primordial_Divine_Unification.pptx` | `e6c3fab53970104b0c74810c4b356445199c010ca8bd14ec9db153ed4d6588a8` |
| `Primordial_Divine_Unification.pptx.sig` | `3f1c31ecb58cd24716f50eddefb8adfa65c410641992a8b25f2f6c74e2053028` |
| `SHA256_Fingerprints.txt` | `e77edf5ea4af3a6e047e273f3a8c03648823c074499779ae3f397054b51d0096` |
| `Sacred_Cosmic_Unification.pdf` | `6dc0eb457411ab45795942c45bb310f9187f5122602d6ea5e7c0a0855968544b` |
| `Sacred_Cosmic_Unification.pdf.sig` | `50cd9ced054714a5b483f0efc33d47f15c9f7480cf33dda7d8974de868ad347c` |
| `Sacred_Cosmic_Unification.pptx` | `ccdabb7f083dc13026964a66eddcd9f7241de73add2be991993a2a47149bddc0` |
| `Sacred_Cosmic_Unification.pptx.sig` | `f28c794f90d05078fe4a87c880323e210e2ba63177b00886171575c5b67733e1` |
| `TKCVH2025-C18-Cover_vi-V2.jpg` | `7e83f0be3981e4594fbde7c656b12932f0a77c962346a52eee4525396860fa31` |
| `TKCVH2025-C18-Cover_vi-V2.jpg.sig` | `293195d57fa151dcf84d5f885caeb02a66f9b1f5d8c824258b2e27076039b263` |
| `TKCVH2025-C18-Cover_vi_APLE.jpg` | `4d56a8fff52476172fc11b6beaed781dfdbd679fe6c82553fcc83f9ab2370f54` |
| `TKCVH2025-C18-Cover_vi_APLE.jpg.sig` | `b8647a6ddead7e3dd18eb4d8555dfc0d00e8090691d20896b2777fa15f21be08` |
| `TKCVH2025-C18_EN.epub` | `69e789752338d04faa5907b42640b819fdbbaff0401ee704c81d34f414dca8b2` |
| `TKCVH2025-C18_EN.epub.sig` | `7b7b93724844eb223498097d657f1fce9f6d6137d6cd5dc08f284da6493a0673` |
| `TKCVH2025-C18_EN.pdf` | `16524b549a9da74193a067f7ed343711b47f5fcf99b318f79357d6a4f2ee079c` |
| `TKCVH2025-C18_EN.pdf.sig` | `f2f229c02a38f2ba7ed4f58e6ac1bb1c2ba32d2aeb13269162218750b31d043a` |
| `TKCVH2025-C18_EN_KDP.pdf` | `61aca88e60c99ed84a887d7cb6eab90015836f949349e751116ae10b81fcd57d` |
| `TKCVH2025-C18_EN_KDP.pdf.sig` | `48375651cfacc7e814657429a168be9716a2069123a733a421ff1f3e870cda73` |
| `TKCVH2025-C18_VI-V3.epub` | `32e329640d7151c6d7a184f314c94d8e27d42a1b119013d8d37901b7392f11ad` |
| `TKCVH2025-C18_VI-V3.epub.sig` | `c917dc021c50b22b6d334acce84e8fcc7d4eb8846b164b52b620a860aa857910` |
| `TKCVH2025-C18_VI-V3.pdf` | `be2483ea5dab2ec1c8769fc5cf9f82fca4b387ef5fd2c7e33f6d1b75adf8bf2a` |
| `TKCVH2025-C18_VI-V3.pdf.sig` | `c7531482b155da8b0f12319413810fc83f2dcd271eba52f587126235447b91ce` |
| `_ TKC_VH {C18, Apr2025} Hiep Nhat Cac Than - Tran Khac Cuong.docx` | `99d23916c76ad5be94ec0d576b675092039b64c9fe545627c3b00a0769ecbfed` |
| `_ TKC_VH {C18, Apr2025} Hiep Nhat Cac Than - Tran Khac Cuong.docx.sig` | `8be8193012dff90b7ac94432199a004d40cce188450e06ea74fdbbbb12efc47e` |
| `_ TKC_VH {C18, Apr2025} Hiep Nhat Cac Than - Tran Khac Cuong.txt` | `145f3a79eba4a10d1dbc9835823c545f040bd4c4ffb06b1d5d9b26f2c53ddab7` |
| `_ TKC_VH {C18, Apr2025} Hiep Nhat Cac Than - Tran Khac Cuong.txt.sig` | `b14f227ebb2c275ad33fa3c8e0b470f2932069e2caa01395e1b849a5d5ce24cd` |
| `_ TKC_VH {C18, Apr2025} Unification of Pri - TRAN KHAC CUONG.txt` | `d6aea807c1d5b8532e50a1d12cff70a1a9e6aa658c51a3b2b4f6535c67c30514` |
| `_ TKC_VH {C18, Apr2025} Unification of Pri - TRAN KHAC CUONG.txt.sig` | `7ca7051562dee7967f3285a88ec8eb9d69d8586a530efe9e5aee7c3417665d51` |

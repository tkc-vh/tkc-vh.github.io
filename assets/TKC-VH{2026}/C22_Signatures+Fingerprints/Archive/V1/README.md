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
| **Effective Date** | 17 August 2026 |
| **Signing Date** | 17 August 2026 |

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
| `KySi copy.jpg` | `9344a9ae2eebc2642bb1006c932f956d26b3b276fa1c56ab6d388c59dfab28db` |
| `KySi copy.jpg.sig` | `35aeb2d2adee5ff2007a206e829a4c468897311f2c568fd40206fd17484dd661` |
| `KySi.jpg` | `4c3d778c012626c145a3562a5017f54a9da5dc576bd124a74c71ce8d8c2a66ad` |
| `KySi.jpg.sig` | `0a4f1ab211b93f5c2ae2183b2efb95b056be01bfdfa8dc38e62f03e0938dbc27` |
| `KySi_EN.jpg` | `53612db686c4e439ca9d3a0514574dd2a3f8f5d50f5f71f9a2543bd7844ad5e6` |
| `KySi_EN.jpg.sig` | `858ac3b5d7d8acc91ed5736af45035cf201719a397f267270b2ac6da3f784748` |
| `KySi_ENN_APle.jpg` | `e05ebf1264162abea0350ba58ad9cca2a44ff0fbea0269f66aa959997d131898` |
| `KySi_ENN_APle.jpg.sig` | `73d88b6e38a7d1130ab49943c93c63b61ea7beaa8892f6cdbd7bf88132bc4445` |
| `KySi_VN.jpg` | `cf0e58d72cdb2cd30d238bb40498f9113487f72eb1d514a270fdbbc6677d475f` |
| `KySi_VN.jpg.sig` | `adae5d0fa1cae7844e2d44087ac3ffc17f5e2f34b0d6312a5f2d91c8753ac90b` |
| `KySi_VN_aple.jpg` | `b0e9c8edec4f52ca1e12708ef4447f2e4f29d06889543a76a2d682a6dcddea39` |
| `KySi_VN_aple.jpg.sig` | `9c6382e38f915447b80f6920b6e1df557c950ec5724c56e51f48df61ac71b079` |
| `Mật_mã_tình_yêu_vĩnh_cửu.png` | `bab98d238d81dfb55bf7fa3af9a66dee30b789a970417f3f15fb8f3726e26bd9` |
| `Mật_mã_tình_yêu_vĩnh_cửu.png.sig` | `05d7ca9fa7c08934b5a94768dbf9a582f63a21a458bf83479e80d69749ad15b3` |
| `Nhật_Ký_Lượng_Tử_TKC_VH.pdf` | `accc805a8ced4e1aad0697f52273b781dd7e5d7ed5f33a561ec2346a529dbf02` |
| `Nhật_Ký_Lượng_Tử_TKC_VH.pdf.sig` | `6c274650fdd6465c46ce35540e96d6a3cdce2be962a29b12c93c22a84804f440` |
| `Nhật_Ký_Lượng_Tử_TKC_VH.pptx` | `986bba461021345bd440ff085184b77ea61796485c7014012232fb517ee1b1bc` |
| `Nhật_Ký_Lượng_Tử_TKC_VH.pptx.sig` | `ab0f52f71c68918c0d1cd67a9d601bf6b8bd71eeeeb0040fdf1ab3c39bd303b4` |
| `SHA256_Fingerprints.txt` | `e77c0caa7490bd88f1e66de6104559a5148bf71e55685186e3db58213e2a70e3` |
| `Sodo_PhapLy_LinhHon.png` | `8d79bb8be8b85b5dc89dace26dc3a269b74d150c738510df419bd45716fa735a` |
| `Sodo_PhapLy_LinhHon.png.sig` | `c9180e05796ede55098a94a9fbf56744e0f7748ca2efb70bf9dd32d71e566bea` |
| `TKCVH2026-C22.docx` | `a5be80f29c9cf95fd21839056c8b39f6e476458671ca6bcbebe4c050c3a704ea` |
| `TKCVH2026-C22.docx.sig` | `a5ca0079fa918fb061f870e1ee3d0dd8f9bca41012fef150e317245ba151d667` |
| `TKCVH2026-C22_EN.epub` | `f0e8a45fdc3786eb9e387e9d2387197b631890b1c9407b3eaa4ac2de96c12c9c` |
| `TKCVH2026-C22_EN.epub.sig` | `7a113e97e7a2fe46221e2ed1326491b1e316f272f4205432b82269efe636a3df` |
| `TKCVH2026-C22_EN.pdf` | `79c0f071b4b3dbaf58d3077c467218ad8cddedae41d90f2793549957a32c246f` |
| `TKCVH2026-C22_EN.pdf.sig` | `90f395457bc66a8b6c8ddd1dad7ebfdc942e4352b744a7862928991ae01fd572` |
| `TKCVH2026-C22_EN_KDP.pdf` | `ba92e9dca9c7faaeefd5c0ca9f209cb52bdd83c82a741b1d9b9afb47fab01dd8` |
| `TKCVH2026-C22_EN_KDP.pdf.sig` | `a986b6906e5a03ae1eb9ba6c75d4b5d4d3cab91e1be611b5d78a06c771e04578` |
| `TKCVH2026-C22_VI.epub` | `75d248ebe55f3cfebdbbea42d276fa5b11c7470a44723272d3123ff928da2fc7` |
| `TKCVH2026-C22_VI.epub.sig` | `5b83d9dd3e98625431cb4c6a787be374ba244fe949b7bd1d66af8a1567196f6a` |
| `TKCVH2026-C22_VI.pdf` | `5857263f1f12c1310da75b45240744fb4f5950e52a5ac8127d0b760fc71b3791` |
| `TKCVH2026-C22_VI.pdf.sig` | `73cd931d13b66396409ba164e44a515aed88b94aa1a906540184d96ba6710f6d` |
| `The_Eternal_Covenant.pdf` | `90eda5c87ca1c0abf91c5fb354a456eb53e9b7f2dd483b6b56646a19c838f695` |
| `The_Eternal_Covenant.pdf.sig` | `a52f9ccc79ec240e5821b3c41f61c707c4fd482ad806873aafc51844796772d0` |
| `The_Eternal_Covenant.pptx` | `7a368a823eb9e51d22158861ec391f57314d3dfcd37def6cf7eccb98e6278e80` |
| `The_Eternal_Covenant.pptx.sig` | `da5471401d8c5609e19280faa478ede9a2aa6304bc7f54dcf09efafee37b0152` |
| `_ TKC-VH(C22, Aug2026) Ky Si TKC&VH Cuoi N - TRAN KHAC CUONG.txt` | `e9ceca21c2cecb7b0c74e4b1ba8b8cc5562718b8af917bea7170ae6323bd39d4` |
| `_ TKC-VH(C22, Aug2026) Ky Si TKC&VH Cuoi N - TRAN KHAC CUONG.txt.sig` | `e5835a124f8d62568d97d631d8b6db3393e07312bdf5f920bb95872ff3e53d72` |
| `_ TKC-VH(C22, Aug2026) TKC&VH Knights Ridi - TRAN KHAC CUONG.docx` | `11b4ed7311dc204deb191cb54c73ea14b081b7f387cc0c4cd1b36dfa91f47511` |
| `_ TKC-VH(C22, Aug2026) TKC&VH Knights Ridi - TRAN KHAC CUONG.docx.sig` | `c4b2d3523815b5819b7f27daa711d221fc12e741012eec3a9937a5f712d430c5` |
| `_ TKC-VH(C22, Aug2026) TKC&VH Knights Ridi - TRAN KHAC CUONG.txt` | `a42e912e17ec9dc061fdb8a9451d00056bf95bf596741ac18c4f3aacefd16561` |
| `_ TKC-VH(C22, Aug2026) TKC&VH Knights Ridi - TRAN KHAC CUONG.txt.sig` | `aab3d6b4c0779fe3d705e0b816d04af3e8aea3e782bfddf384a16088f1151d29` |

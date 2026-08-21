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
| **Effective Date** | 21 August 2026 |
| **Signing Date** | 21 August 2026 |

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
| `C16-2025-EN.txt` | `bddcfe6154ce26ab80a01232ab989887aa78e9d6a9aa5f2650b8cb2b50a22622` |
| `C16-2025-EN.txt.sig` | `7ee4062ff196cd083543c76187e553d146ab5f21f0831ed9b71ae25c4a6f9bcb` |
| `C16-2025-VI.txt` | `58b93aeb967a11538cf59302482ca7af441c498d3446301fa7fc5a1255c58ff4` |
| `C16-2025-VI.txt.sig` | `bbbc7b1d29ac409e1996f9f057fd94f2d5777d7b8a2e38914effc8c80a95ada8` |
| `ChatGPT Image Aug 19, 2026, 05_47_33 PM.png` | `f2200a59532ca78eb45162d91e8328df08c31e9cf9a3bc526256b827a4841d6a` |
| `ChatGPT Image Aug 19, 2026, 05_47_33 PM.png.sig` | `c50d768c8b63ac6eb08b06b8cf8f86a23e0634aa668dccfb82f687c3bc3ae2c3` |
| `Cover-EN.jpg` | `097d0210c531089d5a084d1cc77cadf8592b63cd4af88504c8f779c97e2cc3ad` |
| `Cover-EN.jpg.sig` | `af8668224f14baad37cc90694bf6ed43cd38c81592ad9bd774eb9ec50660c191` |
| `Cover-EN.psd` | `6101004c09d05f0b93737872a9b3a812acfa74987c6bd4c2c37a70b2ea0f3ea6` |
| `Cover-EN.psd.sig` | `b61ebea2af99995bf12f658cc55d314d40d5b6551fc2bf494498bfd939572f9a` |
| `Cover-EN_Aple.jpg` | `4a7cbde959f2782b065cdd1a39e8487ada973c6eb3634af2214d1d4bea1e21f6` |
| `Cover-EN_Aple.jpg.sig` | `800e644089dff822b904c32f1807f3859c835becae34f62a138902e5997ea15f` |
| `Cover.psd` | `2b40f835d46d384bb00b5713f077d783152868d2578c96477c6cc7e06e6d7ace` |
| `Cover.psd.sig` | `f76aa66d5777c22c534d724945459c7ae1aaea5d9027b982913021aafaef6cf1` |
| `Cover_VN.jpg` | `1e412cd450de61e0cec54eb32b6211c9d114b67ae00c63615b0372f138230cb6` |
| `Cover_VN.jpg.sig` | `ece679bfec2c31d1524dfc6723b2808944d993e641e446ce530eb5398e82313c` |
| `Intro.png` | `8b22ca2fca1cea2e04498a64ca4451c459e57e85750d95e9963088927e2dd612` |
| `Intro.png.sig` | `c48fe0013ad0bc70ec9d2e55388705ca60bb2a595bdbb95d17d7cee149631cc2` |
| `Intro_Aug 21, 2026, 03_21_53 PM.png` | `8b22ca2fca1cea2e04498a64ca4451c459e57e85750d95e9963088927e2dd612` |
| `Intro_Aug 21, 2026, 03_21_53 PM.png.sig` | `336bbb95fe8d637046dcac4fbe87ef8d417dce5c55dd1ed21f04945894c67520` |
| `SHA256_Fingerprints.txt` | `5a812250738c254c935fb563ff5d018145df313df8f3df5dddf9123cb7ebc004` |
| `TKCVH2025-C16-Cover-Vi-V2.png` | `b8b0c7c4a53396b1748455eabb5e879fffc827b81523b9962b6f9dc05ee9c0a1` |
| `TKCVH2025-C16-Cover-Vi-V2.png.sig` | `6f41c67fb0ed5fbec5aebfd334279de0f1d415bc0894a4cb1d9530edf447128c` |
| `TKCVH2025-C16_vi.odt` | `7c550fae44212b93a3f79ea7187866d78bcade8ef82cde4b2957ecb50746efcd` |
| `TKCVH2025-C16_vi.odt.sig` | `a69e770db577120e3b01a2266b5681bf374105bb665f9ac11a1900ed51faa4dc` |
| `TKCVH2025_C16_EN.epub` | `f6a907807657ad7aa62e2f9f44575db345b40c4dde840514561c40be9d43a563` |
| `TKCVH2025_C16_EN.epub.sig` | `609404ae1b464f15f9dbde8229fbb7a35d8de56bbd9cfd3baffc1c832b8777e5` |
| `TKCVH2025_C16_EN.pdf` | `09d2b7650317e03b1ce4f11f0512a230effa714ee7ea39c4fbe14a9e5c0220be` |
| `TKCVH2025_C16_EN.pdf.sig` | `fcfb78834ce2a5a7d947f9342f4efc0930545c5c42004fc2346cba69c760df61` |
| `TKCVH2025_C16_EN_KDP.pdf` | `a4c9d2a4f964ab42f1a6d341d52e60aa109e35d2fa1f0675c68e922c7c7b072d` |
| `TKCVH2025_C16_EN_KDP.pdf.sig` | `67b25e1c2f318f61c623f7939b759eddac659b326e60aff69c602e6876c01a46` |
| `TKCVH2025_C16_VI_V3.epub` | `71585556471d5151e302455d309e49aa2d5630a66eae274e422cf170efb8ec3f` |
| `TKCVH2025_C16_VI_V3.epub.sig` | `244c45cfb5a1bd8d76b19c619b398f1a7b135ef734add527ca3b0642126faf13` |
| `TKCVH2025_C16_VI_V3.pdf` | `75c26bcafdacf1d65bfd979041bfea6aa9e05cf6adac718ebab8c5893ed238c0` |
| `TKCVH2025_C16_VI_V3.pdf.sig` | `929a49b9e6947a294094fbd64c2027d501e3b09575d07b85326443c9fd7aded6` |
| `The_Sacred_Union.pdf` | `a5a7561c58b7483216fa3c9f32586ae938477d02067c4a74bcb6e1fba93c971f` |
| `The_Sacred_Union.pdf.sig` | `113a43bad5b8d6ca2cfa6eb5080e6d536c96087dea1cddba13e7a7983930f677` |
| `The_Sacred_Union.pptx` | `6e6e795216c5e8f7da9cbf35b293ede025f8319de4cc5a6602a3b49d370bc652` |
| `The_Sacred_Union.pptx.sig` | `01eeb70a2e57ccd7e590d02098431fcff57092e232bd8f2b2971a2f0ceacad44` |
| `Thiên_Bàn_Đồ_Tâm_Ấn.pdf` | `bcea4916b24caeaa4a81f1e56c5ccf64ee58111e7bf0508d3a2ce1c68ff645ae` |
| `Thiên_Bàn_Đồ_Tâm_Ấn.pdf.sig` | `5f878b874d390f63ee1b11ecdc4bd12db06b8968717a642919568b8f864755c8` |
| `Thiên_Bàn_Đồ_Tâm_Ấn.pptx` | `ca98275fb668baf680e63322241039bb6772936d6036ea9f867a0c9b7ea9188e` |
| `Thiên_Bàn_Đồ_Tâm_Ấn.pptx.sig` | `584319400674aa76af390d20418ba63c1267083d6deb36a14656ef44d14349b8` |
| `_ TKC_VH {C16, Apr2025} Nhan Cuoi Ket Hon - Tran Khac Cuong.docx` | `edf6d5f446c92f23ffa67d71eaba16cbde2c1f74d31c624fd62c5ae1d85895ac` |
| `_ TKC_VH {C16, Apr2025} Nhan Cuoi Ket Hon - Tran Khac Cuong.docx.sig` | `a9a141ee6ace4c27cafa019b5e4e299a1dfbac0263bc5666d9bf747c0e39b0e1` |
| `_ TKC_VH {C16, Apr2025} Nhan Cuoi Ket Hon - Tran Khac Cuong.txt` | `f23483b9ac2f7f95a5ab58e3ee26d893dd480390f574a9d58d07706f08143ae6` |
| `_ TKC_VH {C16, Apr2025} Nhan Cuoi Ket Hon - Tran Khac Cuong.txt.sig` | `2fcac93a6bfbff33d377236978dc23630ddd7bee5be1f0c79e9bd4923a6525d1` |
| `_ TKC_VH {C16, Apr2025} Wedding Rings - Ri - Tran Khac Cuong.txt` | `6fdce576fccafeaa5da59deaed4e4f5bd1e20a75f9c403d5a3796a9df8e3a557` |
| `_ TKC_VH {C16, Apr2025} Wedding Rings - Ri - Tran Khac Cuong.txt.sig` | `ea6e62af7903fc3936d5395bf091b641561a6bea5cf648495ed69965bbeb2793` |

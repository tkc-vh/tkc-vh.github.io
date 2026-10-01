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
| `C17_2025_EN.txt` | `04191356188899e8242d5b19a5aa2b4166c2dbd5b572a16518153a9400c40010` |
| `C17_2025_EN.txt.sig` | `01788a286caee86bced7d0d70ab84fc294795a325b437e0adf54c484e83ded52` |
| `C17_2025_VI.txt` | `254f736c845ac6e6c9273d3ee43606f0fe8f4bc5e0980d2aeff9c0e4520a9a42` |
| `C17_2025_VI.txt.sig` | `25ece113668a916f4495c0fbb553a4936ce0de967776fdf8dab0c63025608a56` |
| `Cover_En.jpg` | `1b325ddc4367e575bccb342545f14cbc20dc6144bac35ff5aaab08a98fec656c` |
| `Cover_En.jpg.sig` | `2f4b512757e528ab6e0c48600b335e83bbc4362401d88dd27ecf93123cc1c292` |
| `Cover_En.psd` | `5093c730b321f1dcac512c9fc97c6a6311179c998594e6e5fddb626222dac472` |
| `Cover_En.psd.sig` | `6060dc62dc9f6cf389444c983a6117da1b6151021998f5bcf92f1a29183a9fd1` |
| `Cover_En_Aple.jpg` | `a2246a83fbfc7f1840ac2d7db1f7d4372778f3ac859ee1e32cb93ab207619dbc` |
| `Cover_En_Aple.jpg.sig` | `b4929571a5fe7cd52319fc606aefd05724fb691853c0654795687a3bb62e7b60` |
| `SHA256_Fingerprints.txt` | `db304b364fbf4a4abbcac3eb742f4d519a7849e323c40e785925653d27b8eeb9` |
| `Sacred_Twin_Flame_Union.pdf` | `4aaa4458c398eb0faa9342cb3e8642c8e725a3d74e17e54ac3645c60bc57ccd9` |
| `Sacred_Twin_Flame_Union.pdf.sig` | `56836f5a00c37d6c0ab42ee649fb1aa0117b4b51d908b4066df5627122ac5676` |
| `Sacred_Twin_Flame_Union.pptx` | `cb72b71f756ca675a146bb5ade590ad3d6a387dc90e63e3f4a5da7dcf79c7e1b` |
| `Sacred_Twin_Flame_Union.pptx.sig` | `bf7a5b2e4af0447e6d367b662bde3c16551fcaafb55c74da1704e6e0ee0e46f8` |
| `TKCVH2025-C17_EN.epub` | `ebe0339de52cc5d93fa1ad449a383b3bc5b45a8f24ef0e51be775c5cf7eead93` |
| `TKCVH2025-C17_EN.epub.sig` | `8a9662d763fffa6dec259fdb9938e40accc01a52a882d323e77bcf76447b3cdc` |
| `TKCVH2025-C17_EN.pdf` | `edf11864d0568fa937e03a8270155da2801a0d0497033b4bd0a053d4fe2000c2` |
| `TKCVH2025-C17_EN.pdf.sig` | `ec0b4c1f5fb05deec750a672a9c78e27f1873bfe8e16566614e170e4bfa9d2a2` |
| `TKCVH2025-C17_EN_KDP.pdf` | `bffcb7acbc156ffb7805c197f9a6234f06636743b45cb224e5f68aba7f40c1a5` |
| `TKCVH2025-C17_EN_KDP.pdf.sig` | `693f1f290adf5f1079b9b210b48b3653f35bb65be9cf70ff76774793836655bc` |
| `TKCVH2025-C17_VI_V3.epub` | `baa8de7ecf0dc55529818b96c7719355161f7a54c73ceeccf23751cba561e1a2` |
| `TKCVH2025-C17_VI_V3.epub.sig` | `d47174f571df04d321063705ad1f87e417957e9a895dcd66999a212fffaac92e` |
| `TKCVH2025-C17_VI_V3.pdf` | `3a531e69260456ed88db4652ade545291ba65ebbfa27f9406d038a94854a6d8b` |
| `TKCVH2025-C17_VI_V3.pdf.sig` | `9b146ed0e21b4013de048c67083fa77bfcc0d29a85cc1b8514635396c2590535` |
| `TKCVH2025-C17_vi.odt` | `10bb0c3edd2cff4e2deea3ee5d490b3eaaa900d909446a57c379adc73463179c` |
| `TKCVH2025-C17_vi.odt.sig` | `5d773fc39ac93ea5d12391521cc5aded553160b692c75646d6d09177d5f03eb9` |
| `TKCVH2025_C17_COVER-VI.jpg` | `cb9ad95fb0dc8cdc5283ad6a24e7225a9846242a6174c876a9222454679ae069` |
| `TKCVH2025_C17_COVER-VI.jpg.sig` | `e306103b46885d085a7144c5248b48c89bced02521cb97d93ef382ea13c93e45` |
| `TKCVH2025_C17_COVER-VI.psd` | `a96721a0eb606117af779ec5a2f4e3cf0c5c7b41dbde67d737f0b8880b62ed03` |
| `TKCVH2025_C17_COVER-VI.psd.sig` | `50c8aad899d1054146cc484d1960e2b7c0f9662adf09e0053fc8a20bb3178848` |
| `Vertical_Light_Grimoire.pdf` | `930a44300eb217be9eaf60441ad7b5f23325343120d33fdb6f6dc6c0dae25b52` |
| `Vertical_Light_Grimoire.pdf.sig` | `c36f9d38377da1b96b8840c32f2fe4291a8abd8471cc409b0aabfe2265d9f413` |
| `Vertical_Light_Grimoire.pptx` | `2b03097ada6c0b46555d015fa406258569222756112a47648c5d03a41148fb6d` |
| `Vertical_Light_Grimoire.pptx.sig` | `3e15c6ff5371ec20e193301168bed1d9e4250cc8a2712c73ec2f9d56cee5770d` |
| `_ TKC_VH {C17, Apr2025} Ky Uc Tinh Yeu Tie - Tran Khac Cuong.docx` | `b91fa40286139c73942f809a65681ba8c24991ea02016a4b50bb0e33149e3225` |
| `_ TKC_VH {C17, Apr2025} Ky Uc Tinh Yeu Tie - Tran Khac Cuong.docx.sig` | `af5eecd27cc9452500a699e40162704d5edd31ab63a0675a8c7d665a7d5722f4` |

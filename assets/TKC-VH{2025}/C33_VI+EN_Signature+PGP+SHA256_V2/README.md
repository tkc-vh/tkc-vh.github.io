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
| **Effective Date** | 27 August 2026 |
| **Signing Date** | 27 August 2026 |

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
| `Cosmic_Heart_Alchemy.pdf` | `12a434bb8d583faad98be3463f98a811d9971afee735d81c63e1f8071b9fe1ab` |
| `Cosmic_Heart_Alchemy.pdf.sig` | `e6d213ccb72157a547c04cc2690966cc68c5dbe6d25f008dfe4b1f1113c03b62` |
| `Cosmic_Heart_Alchemy.pptx` | `b92cda23787e3aac5a41b00246920ac87367778e122f4fc887774d4dd4baf21a` |
| `Cosmic_Heart_Alchemy.pptx.sig` | `70beef6eec07722c01cbc44481071e44928856ff73f05e0437aa9bf91fd6a9af` |
| `Cover copy.png` | `99f3e0a88a630a409b605b441032f4a8b9d8231475011927d190827a6cafbe60` |
| `Cover copy.png.sig` | `1e9bf18058ba184fb1c9b44f204541d252e748cafec47e8368996d80cef4333d` |
| `Cover.png` | `2bba8a8545437d211383f0bce610afe1bd6bf2e4155fdce192d2aa29a2930e34` |
| `Cover.png.sig` | `6032db43ef94827b41cdbf29b254b784a669cfb0abfa189d24be8a089d16f8a9` |
| `CoverC33E-2400.jpg` | `c9f81253502390cedc9ca173a434a9e6fb4cda5e69c8ed03acebade924ced9e0` |
| `CoverC33E-2400.jpg.sig` | `5a4d739d17dfade1eb41b9c6194560e5d5aab18e1438885c60077947105bb554` |
| `CoverC33E.jpg` | `cba248cf4bfc68d0c5da0c75beef041ec1b4c8ba41bb23e078194b0da3324fc3` |
| `CoverC33E.jpg.sig` | `460df94993209539e698eb6aef5aa328e2143ad67d29a8e47f834dbcede030ce` |
| `CoverC33E.psd` | `721feb7929a1e7d41928fd8f7625c18f1d4517101eafb6223c97090fea2c325d` |
| `CoverC33E.psd.sig` | `6c24b7cbd75499e76dd04fcefed63898d70f0b0c1789bebb8f57d48d3dc78f4b` |
| `CoverC33V-2400.jpg` | `1760e313586d3a1dafcec9d661e225613177079ba503aba218deb882bce790af` |
| `CoverC33V-2400.jpg.sig` | `4f5da2b03d7f5e8c561cdb0b4e2a8a55c43c207855e694da4ea970a5397f0428` |
| `CoverC33V.jpg` | `87e1bab8e9c89df5d86047922afbaf168857d4480e2636e1fd971ff3452d2c3e` |
| `CoverC33V.jpg.sig` | `ba4d39e9b43200279a9ab254a3c10279054c48c621ebe65a47ead028d8375159` |
| `CoverC33V.psd` | `f8f5afbebd052a2843d7bb29f459fab3c7076d8ebcf2a3ca1c7a9a165c30f081` |
| `CoverC33V.psd.sig` | `f8da1515c88f07f91fa7debbf0edf7dc60133432015ec5877dd838a9695ea6ef` |
| `KimLuan-LienTam copy.png` | `683dd658b9958e8bc6369d06a8d9bfd21d333787679bcac05c52a292f3ffbbf4` |
| `KimLuan-LienTam copy.png.sig` | `2f303685756248ef46b7e262909ae035c4235ef73fb2acba0b365d90870c14bb` |
| `KimLuan-LienTam.png` | `683dd658b9958e8bc6369d06a8d9bfd21d333787679bcac05c52a292f3ffbbf4` |
| `KimLuan-LienTam.png.sig` | `2f303685756248ef46b7e262909ae035c4235ef73fb2acba0b365d90870c14bb` |
| `SHA256_Fingerprints.txt` | `59e7524ab1df178fc7d905119faf170ee18c6ededbbdea2fe3168ae0fe2dee44` |
| `TKCVH2025_C33-EN.txt` | `1ed22ced1dc49bea71343726eb5828ee343fc90f197a43d3b619ef8642c7dc91` |
| `TKCVH2025_C33-EN.txt.sig` | `debfac50abdf25f8b975a396e8d89c51d16dc8e7d58810a758a765381d7f7f17` |
| `TKCVH2025_C33-VI.txt` | `93b2463708883b8a3494174234207fd64a50d6ef9e7879ffdf5b58a49f644d17` |
| `TKCVH2025_C33-VI.txt.sig` | `ef5c7b7581bf3e93d95f4b00d792a3985f1183511449a4c0f2cfb3124d82518d` |
| `TKCVH2025_C33_EN_V2.epub` | `afa20d58cd4e90bed84791f643c0f62204f8cdbdb4e43dbaab227fdcc2406e9a` |
| `TKCVH2025_C33_EN_V2.epub.sig` | `b4f3e3eed87792b67b10fa62b61ebdca6fd5fcb12197eea6e7c5ea204f161ae1` |
| `TKCVH2025_C33_EN_V2.pdf` | `0a4f23e201108f347508113b717753ea3993cc29d7f76f01a579d5fa0cf1fc49` |
| `TKCVH2025_C33_EN_V2.pdf.sig` | `3dd7f192e2d579f1ee8d5d8962ad8463722789cb244aa607a24f9b35f672accc` |
| `TKCVH2025_C33_EN_V2_KDP.pdf` | `47518a47ff3512015c3d84eadd1c95c76617fba682bdfcb54b35f1a425fdeab5` |
| `TKCVH2025_C33_EN_V2_KDP.pdf.sig` | `03cfc99f0f14ebbc1e63c77411025058cb28ff69c66b3f7bf5bbe3b1c4d2746a` |
| `TKCVH2025_C33_VI_V2.epub` | `99b80cb0ed9475b0d820c8cfa33d40269603b1ec23cf677c56a56208a2dffd25` |
| `TKCVH2025_C33_VI_V2.epub.sig` | `4b8bc446751ea2f88da400a6a20a3882026037addc7efa797e37f7bfe909bd95` |
| `TKCVH2025_C33_VI_V2.pdf` | `95b94477549065f4647d74f6c0e44e0c9ad4995b212c2aa3335f4bbfa9207765` |
| `TKCVH2025_C33_VI_V2.pdf.sig` | `87915afd61d70ee409a03dd1e16ae9f70ef2d894c2765e8fcce7a5ae29cef035` |
| `Universal_Lotus_Genesis.pdf` | `f6eb5e52e8f1948e2e88e9fa3bf12a415fe36d26bf530fd0a83e65cc6bd43f2f` |
| `Universal_Lotus_Genesis.pdf.sig` | `ed5829acc0f9182e6dbfa507b892ee4f2f8933a847efeff8d15bd02fc7473596` |
| `Universal_Lotus_Genesis.pptx` | `dccf80fee7a774cc74e28ce4358d19277616920d53f9cfcdc64858b60dda8e8b` |
| `Universal_Lotus_Genesis.pptx.sig` | `f43f983cd163ae9f0bf6f7f33edeca2e7f9415bee563130536c71e0fa1f10231` |

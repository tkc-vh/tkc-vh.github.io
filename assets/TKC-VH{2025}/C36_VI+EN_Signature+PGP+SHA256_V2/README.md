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
| **Effective Date** | 05 August 2026 |
| **Signing Date** | 05s August 2026 |

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
| `SHA256_Fingerprints.txt` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| `TKCCVH2025-C36-COVER-EN_APle.jpg` | `a0b32b974a03ea42bf36d73044f5ed8e9c8f099b13209d7d5d3480bc2c6f1742` |
| `TKCCVH2025-C36-COVER-EN_APle.jpg.sig` | `62a94a5cd71fc0620074220d12a98b1a453d63b2338aae5347047a82dd67b5c6` |
| `TKCCVH2025-C36-COVER-En.jpg` | `8aec3637747823a2cfc694cbccd81fe54d003d880d829925e5187791175a77ed` |
| `TKCCVH2025-C36-COVER-En.jpg.sig` | `c7bba6a846116eb8f839c6c3805ff988a01956fdf2cd89f8858b66ffafb5f03b` |
| `TKCCVH2025-C36-COVER-En.psd` | `20517bc385f0ef7ab13d72ce2fd138005706dadefab9763c4725e48e31acaa85` |
| `TKCCVH2025-C36-COVER-En.psd.sig` | `da6f2e1b31d5a473ccef6c23a9b644443be90e2efd45ce3ed6da8ade8fec86ee` |
| `TKCVH2025-C36-EN.epub` | `0a6456ea3772e9acaf73bf32fcc4581a92e98c5fc2111225e8ee10bb5ab3e29e` |
| `TKCVH2025-C36-EN.epub.sig` | `ecb0e259248636e98cb676656c308c65983ef625e5e0de75ba4448d472855028` |
| `TKCVH2025-C36-EN.pdf` | `f14f9eb334ce0c9dd02973d456f884d42a8ae9c766798da1fda9a86be4056149` |
| `TKCVH2025-C36-EN.pdf.sig` | `0a61264c0825990227ae8be9e5f4d1a2e7c432da37d27c389a7288a80a2ba0c3` |
| `TKCVH2025-C36-EN.txt` | `e5daaa34d415edf4db82ce4da73a1f3bbc39b71d1b8f1bb4c960677f80f147ba` |
| `TKCVH2025-C36-EN.txt.sig` | `b56a8970c5920fc64d6fb6a0d9095c6d7c6d5342814b895f58cf6bf30ab13c7f` |
| `TKCVH2025-C36-EN_KDP.pdf` | `6f7906e44e4bacca9540692f9a9385d101dab8a75658b9d862ffafa295f8562e` |
| `TKCVH2025-C36-EN_KDP.pdf.sig` | `78dd5e10966920928f3ef10a67b8a17e7d7419f02be79f1c42dd720d45fa2e68` |
| `TKCVH2025-C36-VI_V2.epub` | `53088a3638e0d9f7c79f064196fa7d9573e8e907f1426a2d57368eda2cd6d93d` |
| `TKCVH2025-C36-VI_V2.epub.sig` | `a5795e62ec60340361715ef88ab3611559b0a01d34ab89d50f2cca36655a191a` |
| `TKCVH2025-C36-VI_V2.pdf` | `b9f03c71448671c1c84254f7b79266dbd65cb046b3a496f55b86f747c46b1ba4` |
| `TKCVH2025-C36-VI_V2.pdf.sig` | `87dbc4f2cae859fe9133a898adc3bea024f778a1a6c1abddb4047294adbeeba5` |
| `TKCVH2025-C36-VI_V2.txt` | `8372f579e4e455ea29a92161be9510e062d1843d5e1cb434bfcf7c41f118edfa` |
| `TKCVH2025-C36-VI_V2.txt.sig` | `bf0cd70194111790aed9ad40f322f414ea7719c9c81277073cb90a3e0e5acaf1` |
| `The_Diamond_Silk_Symphony.pdf` | `a2ccb2b2b396fa114338b22727a42ca4e594aafc426bab5c96df0dc132525f1c` |
| `The_Diamond_Silk_Symphony.pdf.sig` | `efe6057628085ec47ddf38bd982fb5f84ed43f9718c5b836574847d293a43aee` |
| `The_Diamond_Silk_Symphony.pptx` | `2bd99b2aadeefaf3125e9b163b80f62070f0a397bb07f89684640f80fcf5342e` |
| `The_Diamond_Silk_Symphony.pptx.sig` | `0414ac0f2ce657f97d6cce4c6f1e0c96552e71d1c9269913c0cab437c4661e33` |
| `Twin_Heart_Alchemy.pdf` | `0891838974f86eb9a8bb6f71f08e95b7009dab5ecd2fcbeab0e9944587b886e5` |
| `Twin_Heart_Alchemy.pdf.sig` | `6ba2aedb16787e7435b4fa9c3bd8b12945c649bea5abb7625966f3c621565ac9` |
| `Twin_Heart_Alchemy.pptx` | `ca0e49ec2c443c183b186e493f35e4e413daf8c774b8dc2dd414311bf843cf99` |
| `Twin_Heart_Alchemy.pptx.sig` | `550c1da1f802bc48eaf338dec8d47530dc586c88b1bf0a61a6595b984a6f8672` |

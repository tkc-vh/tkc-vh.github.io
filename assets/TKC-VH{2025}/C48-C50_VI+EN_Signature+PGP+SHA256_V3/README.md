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
| **Effective Date** | 26 August 2026 |
| **Signing Date** | 26 August 2026 |

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
| `SumC48-C50_VI.docx` | `f3d6a4632319092a3ca2ab6f16976d69d576b213afd0fd2e6433e50f5323ae72` |
| `SumC48-C50_VI.docx.sig` | `f4f723558165c8a14354ab7e0d18b0e280a35f51e2e1f58b02e708ff0324b41f` |
| `TKCVH2025_C48-50_EN_V3.epub` | `039af657fa592f54ad8a2086e538c46d251af9b3df36502df677971eb1c21917` |
| `TKCVH2025_C48-50_EN_V3.epub.sig` | `e20e49d6fe1a4a731da0f6680ca200031ca2c7750c83f2f07e04db677c809394` |
| `TKCVH2025_C48-50_EN_V3.pdf` | `775ba855ff5f0855031fbc2263e68e184223879f63de68c39e6ecd2f9c46b6ec` |
| `TKCVH2025_C48-50_EN_V3.pdf.sig` | `facd82ba9219999e2ca5a8a80ade7c169ee616ff4c8a985f6b0ab9ba15beea8e` |
| `TKCVH2025_C48-50_EN_V3_KDP.pdf` | `48888c87baff4f303198d2a04047f3941fea655b84bc4bc0717f1badd3af3269` |
| `TKCVH2025_C48-50_EN_V3_KDP.pdf.sig` | `01b95b2176464edb010514f0fe2486ec92fc592c686eb85c38a562ddf2a2baf2` |
| `TKCVH2025_C48-50_VI_V3.epub` | `eda9d7c69d4854b591128b45001d173b63352f0c74ca213eedf0a64bec80e224` |
| `TKCVH2025_C48-50_VI_V3.epub.sig` | `8e0004ee8c165e83699648312b705433f94004f31bea5554a4d9e15adadbeed6` |
| `TKCVH2025_C48-50_VI_V3.pdf` | `6058f72fde438f8cef97ef31cc5cf0993378394d0f20bc39c9efd4301a61c3a5` |
| `TKCVH2025_C48-50_VI_V3.pdf.sig` | `22d5eede3622ed2f887e5c3cc045f197e02d0e47aed16ee6bc7eeeee28e15d20` |
| `TKCVH2025_C48-C50-VI.txt` | `1288dba6f34cb44b5017ff2c9ad9d37fa0fb047cc1eac16ba0d442e28daa3ca5` |
| `TKCVH2025_C48-C50-VI.txt.sig` | `36ea74199bbde96ce9300a90dd71b423bdffee7a06da2a284599fbe9cce50b03` |
| `TongQuan Aug 26, 2026, 03_27_07 PM.png` | `92a6bd53461132572da324d86b81a125e187f1da90b9e4222673646d95370a4e` |
| `TongQuan Aug 26, 2026, 03_27_07 PM.png.sig` | `b168c6c88b3e8f10153e2fcca1b94f60c0189fe175421a6a14f9b18f8fa1197b` |
| `TongQuan.png` | `92a6bd53461132572da324d86b81a125e187f1da90b9e4222673646d95370a4e` |
| `TongQuan.png.sig` | `b168c6c88b3e8f10153e2fcca1b94f60c0189fe175421a6a14f9b18f8fa1197b` |

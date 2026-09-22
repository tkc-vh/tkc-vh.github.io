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
| **Effective Date** | 09 September 2026 |
| **Signing Date** | 09 September 2026 |

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
| `C21-2026.txt` | `d4149c18637a89c0d7cbec290ea286060287c8b282efd0f628a8c51f5ba46a0a` |
| `C21-2026.txt.sig` | `d38c6c60b3c6beb25ec14eb0aaee8dc0836f492ebae96629effe40046460f07c` |
| `C21-2026_Cover_EN-2400.jpg` | `2424c9e6f51ab044e8ed5ada938838f75484e8cf3ba721115ae8444e323e6a45` |
| `C21-2026_Cover_EN-2400.jpg.sig` | `a385544a4e71dbc75e14d67cd43807744b4f6e1328d6b80afc4cd207451054f3` |
| `C21-2026_Cover_EN.jpg` | `22945db10342d2fcb694ddd24d8300f186c223e120febaa9f326e10c378af2c3` |
| `C21-2026_Cover_EN.jpg.sig` | `46bf049c1db231f3771be88f08cbf28995fbccb64386cb4b725d85b312e990aa` |
| `C21-2026_Cover_EN.psd` | `5493d143f1028e13020d0e31a286c20ef48c6cad6f96db55c1e3e221f48268de` |
| `C21-2026_Cover_EN.psd.sig` | `fb8740cb496ea639cb9c69636776c90c7ebcc314ec4de29c7c1d4129690050a4` |
| `C21-2026_Cover_VN-2400.jpg` | `bdf68bcab843dee210291858d978ea895df3d774d3406613102e253f077393f4` |
| `C21-2026_Cover_VN-2400.jpg.sig` | `ecb8b128b544c1f08d9c535a43b531efff18bd890b2ed0115a3e1a2e3dc3b9d6` |
| `C21-2026_Cover_VN.jpg` | `7df72a82007bc667e6e1f7f7213ee48f10b86b0a87934fde38cfd2622ea11fb3` |
| `C21-2026_Cover_VN.jpg.sig` | `d76c4a1083ff979ce9c8559ba4491aa3642e20ed503f33ae2b11272ef8be5e43` |
| `C21-2026_Cover_VN.psd` | `9a2567f670e0718317f9baaa2c23d9b5a1d5ee030c825232b9a04d2091af82ee` |
| `C21-2026_Cover_VN.psd.sig` | `d2b552972be1e14da507c2edaec3a0dccbc3854e69d71bd21585367b00f76220` |
| `SHA256_Fingerprints.txt` | `e669fa1349b5de3962d75a8e931f558847a88d93bbab2ccba8f786c71341dbe8` |
| `TKCVH2026_C21-EN-V2-KDP.pdf` | `c4ae16ad799abb3c5dcc3c3a188131f6aaf0de1fef1e458193e14388fff14417` |
| `TKCVH2026_C21-EN-V2-KDP.pdf.sig` | `765d758e6631b1e6d00535920cc2ffc700f45eddbe012015b68ef739fc44a5a3` |
| `TKCVH2026_C21-EN-V2.epub` | `3ca7377f03a3f0fb0953439306830f631bb847ba7b8edc7b47c8dd6ff0268f73` |
| `TKCVH2026_C21-EN-V2.epub.sig` | `8fbe8ccc66dd0f2bccd29574425fd8584f1466480dc738a84f9906a102999681` |
| `TKCVH2026_C21-EN-V2.pdf` | `bcadf958270919dc0a0cb744dec3f9674b34bff6fbcbaa9467332a27a60f52ba` |
| `TKCVH2026_C21-EN-V2.pdf.sig` | `fd7cb7871fdef7a2e9b0b99e607de83f20333d4a0354d3a1dc794aa001401b76` |
| `TKCVH2026_C21-VI-V2.epub` | `c553bb2b24012600d96489e0c02b9faa98281e8607da0195b66f9a7332bfb87e` |
| `TKCVH2026_C21-VI-V2.epub.sig` | `90339df71ea7b738bc2bdbe39a225a6397848a8faca065d56898b850d30eb4b0` |
| `TKCVH2026_C21-VI-V2.pdf` | `58743152a8322f221275000a5f5ac0637ef4c07aa658599efb35e8f61b2bc9cb` |
| `TKCVH2026_C21-VI-V2.pdf.sig` | `4b04b7eaa00ee1157ad6c3376b0844e7725eb7c837a3c1f3ebc067f2d26733ab` |

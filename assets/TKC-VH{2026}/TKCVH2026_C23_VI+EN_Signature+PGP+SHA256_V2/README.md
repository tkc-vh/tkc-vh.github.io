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
| **Effective Date** | 02 September 2026 |
| **Signing Date** | 02 September 2026 |

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
| `Cover-VI-2400.jpg` | `db26b2d8c45ac6350d389f5e9795471ab099e19f9d22c8c6d3a6d4c6abcbe8ee` |
| `Cover-VI-2400.jpg.sig` | `28e757ba15d9c4543c7742000ac21e130458c61bdaf68a7a95a1b6faae4dd125` |
| `Cover-VI.jpg` | `9bd2f3cd2a9dc4a293c2382340c0179e3d1fdff622e7ae07bddcc7782f7ed073` |
| `Cover-VI.jpg.sig` | `75e3325953aa955e3ab3bb70521592b5e701ebf071fbe1786002db401d0997d6` |
| `CoverEN-2400.jpg` | `2b73e268b8687729b26ce643cb3f70d763af33a1c9bb4d97c29ac64a5419993d` |
| `CoverEN-2400.jpg.sig` | `46f4ed36e81a102202f3a9b04ed50476a8583559cd6f9143b0dd113e3ec001c4` |
| `CoverEN.jpg` | `98caf5ecb20b8f80b0096a9cd3499ee2637f317c663a08629fb2ed8fb00a5016` |
| `CoverEN.jpg.sig` | `ee10bdc8dfa0de17989cfb7a401b16460b6a683a3df20a15e79b79725dc2ce71` |
| `SHA256_Fingerprints.txt` | `d606419e8a655dda23922f9269e939369d87502d6baa4f66cfb814ad64fa37e1` |
| `TKCVH2026_C23_EN_V2-KDP.pdf` | `5a0ff71711fa617fef2cebcfd80ee0836cc30c93e14fd501f1323c5c0fc8491d` |
| `TKCVH2026_C23_EN_V2-KDP.pdf.sig` | `17346acc8c1f671a920666bb8f6ed4e8d4c8580f606d360dbee1f9b983125c8e` |
| `TKCVH2026_C23_EN_V2.epub` | `53a201a9bff5cd885b4210a3ad0f2e0a1170a0f15384ecf9cc7f723564713388` |
| `TKCVH2026_C23_EN_V2.epub.sig` | `bcfeba72cf10d020b0d0a10df2bc914191f707c1558c16b49502c0caac47ff56` |
| `TKCVH2026_C23_EN_V2.pdf` | `120322b098c4ceb7de4ac369f6eb9070a4310faa493fd5b479aac0877d4c77a7` |
| `TKCVH2026_C23_EN_V2.pdf.sig` | `9c834b4a46f4747c03d92c35a85b9224689caff4a8bafae8870d7624b3534ef0` |
| `TKCVH2026_C23_VI_V2.epub` | `193a6ba8fd6a4958b92246a856c02b052df66ec1b532477ded4340dc92dc8be1` |
| `TKCVH2026_C23_VI_V2.epub.sig` | `675d9ee2ca2794f65289ae015d459472700e303f99113dc39f1ceda39ee2c845` |
| `TKCVH2026_C23_VI_V2.pdf` | `b410447ea3106c546a7138c57e55852d078786f58fe252bebd91a65881ef4d7d` |
| `TKCVH2026_C23_VI_V2.pdf.sig` | `f80ac1a0e97cca2fa22100322b990b24caa3d5f1d29b12a0b39d1c321c36cfca` |
| `_ TKC_VH {C23, Aug2026} The Roar of the Wh - Tran Khac Cuong.txt` | `5f94bef0e239dd79115d530dfbdc3227cc83d478cfaad3d7b1e0391468abc61b` |
| `_ TKC_VH {C23, Aug2026} The Roar of the Wh - Tran Khac Cuong.txt.sig` | `12ca94b1a2f3faebbe98af8dffa46121da4fa8f3e3fe2571064c32651aaf7938` |
| `_ TKC_VH {C23, Aug2026} Tieng Gam Bach Ho - Tran Khac Cuong.txt` | `cca4efe5405bcb536b3c16ab06fae5b33e0639a560c4a7d0e60ed714b1e4935b` |
| `_ TKC_VH {C23, Aug2026} Tieng Gam Bach Ho - Tran Khac Cuong.txt.sig` | `5f3ecb0ce725899dd59b5984c6d91974c67b6f124261f2f4a968e3585f67969e` |
| `image22.png` | `e845a21b61248b15d679eef4741ce3d4f3b3e2ad656242bd9dbb6a9ebb322c7e` |
| `image22.png.sig` | `120d8550e7a0848240c2d996cf47b861b2e7f3fe7dbda04f79a5c5c78b6056af` |

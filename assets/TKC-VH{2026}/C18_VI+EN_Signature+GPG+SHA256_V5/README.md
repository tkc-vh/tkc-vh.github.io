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
| **Effective Date** | 16 October 2026 |
| **Signing Date** | 16 October 2026 |

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
| TKCVH2026-C18-EN-V5.epub | eabcada1dbafc00666954e6522cbdcab231ef58b26b5499c5561613d5a39be0b |
| TKCVH2026-C18-EN-V5.epub.sig | 0d0e6a9cf71a16b87e61dadac06906a1286446e43c29891ee1c26097bd48b46b |
| TKCVH2026-C18-EN-V5.pdf | 673801541d8a46b1c6a8b9169cc1f7b840a15feab65ce12511b2a2b643f1052f |
| TKCVH2026-C18-EN-V5.pdf.sig | ddb17335bf111837ad824178965629c60442da307f36dc5b13e442db36458774 |
| TKCVH2026-C18-VI-V5.epub | 2a22174e8ede5dcdc8a9ef42c0b92efa7797a5c4a5d93e006a07a1b853ac10f3 |
| TKCVH2026-C18-VI-V5.epub.sig | a8e3f6c9f967655c83a8c9c0977fbaa9333753f80e1edf5db93b4e0b15f3908b |
| TKCVH2026-C18-VI-V5.pdf | 2b4056708330c1d07e17618d04661c688059ea3e62d5bb87a0dbe84639212338 |
| TKCVH2026-C18-VI-V5.pdf.sig | 93ccffcff3d9ea84bb0dd1d998a17a743e6982dbff1083316a4a774d18a57fa4 |

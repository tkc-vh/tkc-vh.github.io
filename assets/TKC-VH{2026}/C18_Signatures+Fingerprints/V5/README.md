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
| **Effective Date** | 17 October 2026 |
| **Signing Date** | 17 October 2026 |

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
| TKCVH2026-C18-EN-V5.epub | 3f0fcf61a1e01f22f111415051461569feed5b94bf0155cdce4397a7acf295e7 |
| TKCVH2026-C18-EN-V5.epub.sig | 1fb47085c98af9842ff2478d916299a362c1057d73a69ba8d5df503bc4ba2602 |
| TKCVH2026-C18-EN-V5_KDP.pdf | f860fbc9ec32ec51a189c4fcb68dfd6bff73c4a32f5203ef89c7c24a81b590ce |
| TKCVH2026-C18-EN-V5_KDP.pdf.sig | 880e30089e4ad35ddcf75b27a20973db8477f35f41ac4a48016cc6d98fa84871 |
| TKCVH2026-C18-EN-V5.pdf | 673801541d8a46b1c6a8b9169cc1f7b840a15feab65ce12511b2a2b643f1052f |
| TKCVH2026-C18-EN-V5.pdf.sig | 0c69b4c719969222336a0886df9e9e9ed157ccd194edc70009be21e07582ded9 |
| TKCVH2026-C18-VI-V5.epub | 60a666d1c5af7d33d34d27740310dcc7f8a2726fbdedbc96f6b5cd999f6b4908 |
| TKCVH2026-C18-VI-V5.epub.sig | 03ccc21297fb875eafc7619def5a83ac021fc401e775d63c9124003df32ba164 |
| TKCVH2026-C18-VI-V5.pdf | 2b4056708330c1d07e17618d04661c688059ea3e62d5bb87a0dbe84639212338 |
| TKCVH2026-C18-VI-V5.pdf.sig | 0d6a1a9fe328ac0457ba5d5a62048cd3691fb98d9062485f19e2041fe447a7d6 |

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
| **Effective Date** | 31 October 2026 |
| **Signing Date** | 31 October 2026 |

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
| TKCVH2026_C28_EN_V1.epub | 7818345e93af5680d0c89eb63aeb4d14d995313fbc27b510444c0e8a8cc8a78d |
| TKCVH2026_C28_EN_V1.epub.sig | 512e3e492d6760432f83aaf325d3f1f0bb85a2b6b1e9b34621703d276c17cfc0 |
| TKCVH2026_C28_EN_V1.pdf | a2c7f36510280028ae0ecbb2b49d73bfa90f21359426bfc2e3121602afe1639b |
| TKCVH2026_C28_EN_V1.pdf.sig | e8b69aaf625b26a30bb9df094679e76bb90c58ca0a0e64806df335f21dce8a43 |
| TKCVH2026_C28_VN_V1.epub | 69e2f8f653d17ae948c808151065bd3e96cca5aa7f29bd97a4925b0d21ee55e5 |
| TKCVH2026_C28_VN_V1.epub.sig | ea5080372ad205838ffff4e1fa87ac977d63ff14a4140eeffce82bdad8b19174 |
| TKCVH2026_C28_VN_V1.pdf | a8971b78ecda5f0de26c7d18f33885198a98c20b2a12fceee2e3e98f0ca74e81 |
| TKCVH2026_C28_VN_V1.pdf.sig | 4bc09fb2762b52ed1397969356083d587c40a30045d037f421288c90522878ab |

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
| **Effective Date** | 23 September 2026 |
| **Signing Date** | 23 September 2026 |

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
| `TKCVH2026-C05-EN-V5-KDP.pdf` | `58cf29b3467030b1e7b4315cb7030394e6f4b22ac0c79b2cd3a9a88343353460` |
| `TKCVH2026-C05-EN-V5-KDP.pdf.sig` | `f7518d0f0aa50a36496d77b392dff71d8847946ee961a0fb0b76a930e7c36186` |
| `TKCVH2026-C05-EN-V5.epub` | `a7cce381eacea5f47c7a1510128e4e43566248f0f2b472175a1485497ca8eb75` |
| `TKCVH2026-C05-EN-V5.epub.sig` | `ca6f044a7e4b9fb9c37907287656504ef81af0c06f80bf9aa6f19d233192946e` |
| `TKCVH2026-C05-VI-V5.epub` | `cc60b77de806df4d9523eaea9d4054b9fdfae1ec150e36b0d1a95400a90e4267` |
| `TKCVH2026-C05-VI-V5.epub.sig` | `7fb5f789b851ab2edc72c30ea5564cbe22976c051e6b70b044198078fff0c81a` |
| `TKCVH2026-C05-VI-V5.pdf` | `5d60664ea629cbef64a43fbea93a82e03594e895e0430c6d166d469033813f29` |
| `TKCVH2026-C05-VI-V5.pdf.sig` | `d4c0694b0eee8072917456c2696d148613a2862f0ea8d2c02c9aee9c63c287b2` |

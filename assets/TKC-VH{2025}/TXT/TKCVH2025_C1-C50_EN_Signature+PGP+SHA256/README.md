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
| **Effective Date** | 08 August 2026 |
| **Signing Date** | 08 August 2026 |

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
| `TKCVH2025{C1-C8, 012025-022025}_EN.txt` | `1e04f82171d4652c2f43bb86154b1246181529dd9fdd3dc4f8950a3c137541ab` |
| `TKCVH2025{C1-C8, 012025-022025}_EN.txt.sig` | `43a3a7d7072d5962898fc5c5f7611aea2546d1e18c4be60421ad876179189582` |
| `TKCVH2025{C21-C30, 26042025-14072025}_EN.txt` | `ed862db1ae2cef4431a408d4a7839994702a39f3e9638953f32893f2860426c1` |
| `TKCVH2025{C21-C30, 26042025-14072025}_EN.txt.sig` | `639a50b2e0eeade64cd242f97f7de290465702b51c68794b4388f455069aab2d` |
| `TKCVH2025{C31-C38, 08082025-26082025}_EN.txt` | `04839d459eb5e01274f147e941b771470a82a78be3eeb7330407101f19930e45` |
| `TKCVH2025{C31-C38, 08082025-26082025}_EN.txt.sig` | `b280238c1425332a233fc98b5de6dc099e3be42697e2f3f827772a94e4996929` |
| `TKCVH2025{C39-50, Sep-Dec2025}_EN.txt` | `f630233eb32cd9feb87d94bc8331e52fe1302d5c80debf25771000513b79d9bf` |
| `TKCVH2025{C39-50, Sep-Dec2025}_EN.txt.sig` | `e01ccd35dcde44be4853d19c5ff7afe82d538e676d13d111b3327397be1b0cd5` |
| `TKCVH2025{C9-C20, 19022025-25042025}_EN.txt` | `b5e3609f280d6b3cf020a298a7ce8805dddf01a710d79fc7bfed72e6de957469` |
| `TKCVH2025{C9-C20, 19022025-25042025}_EN.txt.sig` | `aa1355af7ee734b1a09352ee079569420e6af7f2d36fc3b13137bf63886a46d0` |

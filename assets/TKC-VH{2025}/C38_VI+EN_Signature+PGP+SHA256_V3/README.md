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
| `SHA256_Fingerprints.txt` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| `TKCVH2025-C38-EN_V3.epub` | `d88df366d89db56dd4ebe79a12256eacf3ae3cd1815caa158fd8481abadc4539` |
| `TKCVH2025-C38-EN_V3.epub.sig` | `4bb5d9b440e3a8cce13884c1bacb9e3dcff29f4c65c90f899176591a81f1b13d` |
| `TKCVH2025-C38-EN_V3.pdf` | `9bcf1eea5185e0dc199497fbd87379f2fa02319bae2c0db9116efc69c41dc462` |
| `TKCVH2025-C38-EN_V3.pdf.sig` | `b1482fb54393c4641624bc26b01e04d4f109e7f203007f63243796ad6b309e3e` |
| `TKCVH2025-C38-EN_V3_KDP.pdf` | `8f2a89a6dfc822cb332de8d001ed427795dd40ba6b9f6cab098ae7c66129d34d` |
| `TKCVH2025-C38-EN_V3_KDP.pdf.sig` | `a897a1a76e415169e35b6a3a02617dcf24a264a49070d877ccc6191a05707091` |
| `TKCVH2025-C38-VI_V3.epub` | `1abfee78c5d0c94238f304bc8b1c1dbd59402e9634c1223cb1d84840e86bbbd5` |
| `TKCVH2025-C38-VI_V3.epub.sig` | `28712847c96a83a0beee965cfb18488a0a96eb92d98c58d88ea07fb425b29bf6` |
| `TKCVH2025-C38-VI_V3.pdf` | `e835ae07c0d575f47ea679b79dc753c5cab237ab831da10174827aeb2c84c8d0` |
| `TKCVH2025-C38-VI_V3.pdf.sig` | `0deae474d028e59f47322736c408c4eb760ae626b95398be1ab57ddc33706e10` |

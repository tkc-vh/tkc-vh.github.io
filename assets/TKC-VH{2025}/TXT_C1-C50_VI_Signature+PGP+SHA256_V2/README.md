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
| **Effective Date** | 25 August 2026 |
| **Signing Date** | 25 August 2026 |

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
| `TKCVH2025_C1-C8_VI.txt` | `e4f8ff7f19d4454d07474eaa4b7fa755f089b053b4ece5a34ed2d2a6233137db` |
| `TKCVH2025_C1-C8_VI.txt.sig` | `372fc5978f93e870fd29f1dcca5f9fcfdaf82009df9297e43ea52f841255939c` |
| `TKCVH2025_C21-C30_VI.txt` | `1ada358404a6d2a419c68e89f385c165e3ea4691b4dd34127dcbe3bde8191b5b` |
| `TKCVH2025_C21-C30_VI.txt.sig` | `4d0e92f20db585f4dcb65b7f765dcb39bc00eef89754439edc5a445795a2de0a` |
| `TKCVH2025_C31-C38_VI.txt` | `8007b90314f65e26a6ff7aee14b4c7858c38826f37fc9796db7fa272b8ab4fd6` |
| `TKCVH2025_C31-C38_VI.txt.sig` | `fc1e834460bad5aba8d5345c55f753c865018e7fb1a876faafd86123993036e8` |
| `TKCVH2025_C39-C50_VI.txt` | `a7f6e5f1f652aaff68ae25d1bcadd70b39f937c3a6b380bddd7996773030189f` |
| `TKCVH2025_C39-C50_VI.txt.sig` | `62ea225cd5ff9db54f3ab1ef4c81156f8c1ee08bfcd68c04c511e6cbd56bfd16` |
| `TKCVH2025_C9-C20_VI.txt` | `bd316f0e8ef830d94dfc825fc4fbe7886ab80a29c0de3e0c48ee402a9c00643c` |
| `TKCVH2025_C9-C20_VI.txt.sig` | `f24b48410ef48a20c1d0e5e5c0d4d0a8ba21a00948762b1072a741f6ec0c70b2` |

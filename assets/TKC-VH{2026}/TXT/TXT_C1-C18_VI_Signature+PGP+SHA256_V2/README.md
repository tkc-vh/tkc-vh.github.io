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
| `TKCVH2026_C01-C08_VI.txt` | `ff4de1dde25abec2358f662e89cd022e33f78486319cbce47c1582ccc0631aad` |
| `TKCVH2026_C01-C08_VI.txt.gpg` | `7a06e585e260e834e951ddc8de64ab462375476ec342855c629142f131530b48` |
| `TKCVH2026_C01-C08_VI.txt.gpg.sig` | `2126d0870593ee6d66ba542f0dd4a621900dbd9a73ae162c0ac7c94179103421` |
| `TKCVH2026_C01-C08_VI.txt.sig` | `6e0480feefd06bc231d33dc755996453c018c96f4e1e33f6961a869f00b04600` |
| `TKCVH2026_C08-C14_VI.txt` | `6be9c92315976414e3122b3cd0706f3eaf28dc3a3ae707c45a0127c77e0e4a7a` |
| `TKCVH2026_C08-C14_VI.txt.gpg` | `86412f8930691e416ca33ee5013f0314b2b189d78ff29673d257a98e5efce039` |
| `TKCVH2026_C08-C14_VI.txt.gpg.sig` | `8592fae2e927e8398743df9bf649659ccee1a84561587e0f8a41341f146a3a67` |
| `TKCVH2026_C08-C14_VI.txt.sig` | `71a8dbe84a4b03af90b1806fddb8746fdcb3933d3ae2e185785a50f9152c47d3` |
| `TKCVH2026_C15-C18_VI.txt` | `70b5f6f991f012a0bae3c2dec74098956eb03eb3fd41812b32664f3927de04e2` |
| `TKCVH2026_C15-C18_VI.txt.gpg` | `a91704c9e912501f02b2ede79b298afb65ac83e03d45007005408efa5496156a` |
| `TKCVH2026_C15-C18_VI.txt.gpg.sig` | `e1a57c7a4bd8e7acf2091057de3cd477141c8d62c3b75967ee217bc41cab0760` |
| `TKCVH2026_C15-C18_VI.txt.sig` | `068807647d1d6af4592ed1744fb93bad3906fc6c96258ccbaaf39e65a4d1c503` |

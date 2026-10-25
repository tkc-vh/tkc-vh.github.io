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
| **Effective Date** | 25 September 2026 |
| **Signing Date** | 25 September 2026 |

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
MUC_LUC_TKC-VH2026_C01-C25.txt: 701f1aad513eed86273dbf5d4d8c649b7f24eed73ba3eab7c44220a6d8c2b165
MUC_LUC_TKC-VH2026_C01-C25.txt.sig: 1f8638dd20397a1da70df553dd337606db45e2ec5321891e0c355f748f33618f
SHA256_Fingerprints.txt: 49fda8d89363bac73aee28ebd32171b43900b18536ec4e2783a13de48abe6824
TKCVH2026_C01-C04_VI.txt: 0926a9c8e0998b5b21312cda0c494b208aae5cb99ecfbc560cdc712c84d06447
TKCVH2026_C01-C04_VI.txt.sig: 312eed6d8398090556772c618357abee7abb563a40b3c2f53c5ae82b70bcbd07
TKCVH2026_C05-C08_VI.txt: 7c30d0623595b0fb1e1ac67271b48a67a17d19b13207429ce23fd470d2c49d12
TKCVH2026_C05-C08_VI.txt.sig: 9ccf9b73e6fac4aae91ce9ca2c884f3596104639d65f781573ba062e198d6185
TKCVH2026_C09-C11_VI.txt: 4466919311a66af4b862015dac2f03f373e251d4697699e2bbd80ae0639ac211
TKCVH2026_C09-C11_VI.txt.sig: dd8b7561150ca18c533d5ba6232cd9fc1abe9509a6fa34a53b64025d48b9c020
TKCVH2026_C12-C14_VI.txt: e34d3fcfd406fad7e55acd28ba2b1bb461e9dc6246a70f30a30c70bcdd964ba8
TKCVH2026_C12-C14_VI.txt.sig: f3d453660e6df0b76c7a35b65577f41e7cf28bea26f4d514962f47dfd77cebdd
TKCVH2026_C15-C16_VI.txt: 59c53708de4a280e9c378a15a3787250ceeebd29f8b764672b0e518abb98614e
TKCVH2026_C15-C16_VI.txt.sig: 682c8c5ef44015250efa7b33d20c821fb48da2e780d3d190ed95215b3a027c03
TKCVH2026_C17-C18_VI.txt: 4e8db7f441b3a2c1a5f3dbde4e0228735360d86fcc854fd472f62b5f94fd0148
TKCVH2026_C17-C18_VI.txt.sig: fbc8203765897e51327a407a8552920ba5cd9f52af6693432e0f4fd83a5a20f9
TKCVH2026_C19-C21_VI.txt: d008fb195f13c4cd347ec22e48daac88e57e81082894a250aab396692f586232
TKCVH2026_C19-C21_VI.txt.sig: 8b5ea2bdbef85e7c3555af53b21eb1744dfcea851e836c325d6fc251208d4941
TKCVH2026_C22-C24_VI.txt: 039e24016227f50f01246f6fb8d9926369a6a0ba308a9c1ab536ec7f5b38ee72
TKCVH2026_C22-C24_VI.txt.sig: 8deb898c89f7727f66d6f13b49c5e5981d477292dcb1d6039a2d9a0ea8faaada
TKCVH2026_C25_VI.txt: d511bade3879d78487620a86fb8776ed82c0ef774398bf9764c75a9cae146363
TKCVH2026_C25_VI.txt.sig: b3ab585f19577cad321d7d0d78390189d90ab9b480b1c993803148ce0e5b1506

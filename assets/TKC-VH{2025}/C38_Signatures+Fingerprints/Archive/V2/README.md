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
| **Effective Date** | 05 August 2026 |
| **Signing Date** | 05 August 2026 |

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
| `Cover_KDP.png` | `3997484fd157b4ce9e2f9522b34570a14869338be090498f7a45e48ee489b093` |
| `Cover_KDP.png.sig` | `2f13df314a88de02a29f3f433df055e1c003630b37e51d0db10a0f0fb1398f90` |
| `Quantum_Lightning_Symphony.pdf` | `030d3546d0ac91822471e20a906be216474d067f28fb2defb80f146feb15991b` |
| `Quantum_Lightning_Symphony.pdf.sig` | `30caa8b3d2584f586324222ffc9bc6d59daf762cdaa8f9b21d1a0400bbd1a4dd` |
| `Quantum_Lightning_Symphony.pptx` | `b65d07a1ef0fd30e8932957eaa04927e1ee9f83e6384237bdae17ca5bc346191` |
| `Quantum_Lightning_Symphony.pptx.sig` | `cb9a07e55ad961833bde7abc79d7516df4316ac122d8b9153ad8783f76648173` |
| `SHA256_Fingerprints.txt` | `9b35f9d5170b532c65179c544e34d1e820f63a7eac893cf21e1db59f23a78392` |
| `TKCCVH2025-C38-COVER-EN.jpg` | `e57c6b25c1065d4126853d70ce8a5ddded0f9d889d3026d42ba96598daba3f4d` |
| `TKCCVH2025-C38-COVER-EN.jpg.sig` | `0143866ed50fdbd90860505558be4e1310e1270a974688d1c0bd4fe4efe62ead` |
| `TKCCVH2025-C38-COVER-EN.psd` | `b70330fd53a06a6ec3801900ec592edff180e686fa4a7d83c39b7cfcecec2e84` |
| `TKCCVH2025-C38-COVER-EN.psd.sig` | `22b89c88539d0b3115376a0cd9159f8ecc59e4a7ee7965ee522db73fcabee5f1` |
| `TKCCVH2025-C38-COVER-EN_APLE.jpg` | `6ee897a8cb1dddc2c7e6b3badedde04cc9bea3b85f4e7d8a81d8eefabb107f3f` |
| `TKCCVH2025-C38-COVER-EN_APLE.jpg.sig` | `2337039540a9093fe326cc4c6fca0bba5f5b0af18d9205ddf63f8d5e9b98ff2a` |
| `TKCVH2025-C38-EN.epub` | `a33426b8c34fa2b37f90ea936cf8aada47565846845a52f293d2fabf4a11302e` |
| `TKCVH2025-C38-EN.epub.sig` | `c6cf79674398db8a7e31775433c9a7597ebd4a9c6b52885254d71f188edf0126` |
| `TKCVH2025-C38-EN.pdf` | `da6b22bf0bdcf55e6936ebe6bb3ff946c32cb0de4a81492ac044519b92ab037f` |
| `TKCVH2025-C38-EN.pdf.sig` | `76df1175f17f26f51e538fa410cb98124f09f3658c088f8a458642fd33b84390` |
| `TKCVH2025-C38-EN.txt` | `1aedf2b70c56836423a43addfe98580dfeba0d7e03caef7693fc85a5ea823f93` |
| `TKCVH2025-C38-EN.txt.sig` | `bb7092d1b4311ae49483cea15b4d3500ec095af96a51bb7b0bd196e461caf8a0` |
| `TKCVH2025-C38-EN_KDP.pdf` | `d6d2371bb2b6b3b62956b3c66196c7992ffa48fc8d04afad19ea2fce4065026e` |
| `TKCVH2025-C38-EN_KDP.pdf.sig` | `cdf8e23af04e09a83d3c1b6ffa3799aa3c571b59001d6d97585ba3a7805eaded` |
| `TKCVH2025-C38-VI.txt` | `77abe20d67a05dda2b90b7586ac6ad86d735a58a8a4ef10658a3eb6fca3e7631` |
| `TKCVH2025-C38-VI.txt.sig` | `9d635050f8d1b7f09d23011c386b3ae4849d4430a0735a4024f232c514bcc34b` |
| `TKCVH2025-C38-VI_V2.epub` | `3d1d332294818637b74dc39509d79d861a21a910e6118cb891595ebc796a6398` |
| `TKCVH2025-C38-VI_V2.epub.sig` | `14d054afd44e3f7f9da3559a8c5968e38eb9627d0cfff5e91bde77e115eab4cf` |
| `TKCVH2025-C38-VI_V2.pdf` | `26b8078747899c24b0e2352c4af44f779851409f037e565880f4be0762dbf68d` |
| `TKCVH2025-C38-VI_V2.pdf.sig` | `d27dd617d84cf6ea55f9cbc533e641306041c1c247f2fbe04928a4fd3c886ddd` |
| `Twin_Heart_Symphony.pdf` | `8ff67351b13a405cc58af27361f6ae7bb22e0b33bd45e46645759dbcf75fc1e3` |
| `Twin_Heart_Symphony.pdf.sig` | `692cc871a9c6ccdd4458cbcdc37526977f6a8d563eba5b564703a31aa2b671ab` |
| `Twin_Heart_Symphony.pptx` | `c5640cf7964e6c125828eb1850693284f732ec8020b2ccbf0d4e8860eed5989c` |
| `Twin_Heart_Symphony.pptx.sig` | `fd89ad92621d9da6c21f1659ef1bf5caee2ded2e8c5b775110163222a34c6f1e` |

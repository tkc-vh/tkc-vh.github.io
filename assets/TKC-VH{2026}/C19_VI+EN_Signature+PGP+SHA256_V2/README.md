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
| `Hợp_Nhất_Lượng_Tử_Orion copy.png` | `588e141b46048e095b7c94e998b233b5c27717de4d52dd5e3f81e321827660e4` |
| `Hợp_Nhất_Lượng_Tử_Orion copy.png.sig` | `1003f2599826b25ffda7077cffc89abf86c698129e8524b535af10a5897026f3` |
| `Hợp_Nhất_Lượng_Tử_Orion.png` | `872c61ba3342b22d2d67fdf76381dd20a66d633cb01b2e82f553de59a03c9b5a` |
| `Hợp_Nhất_Lượng_Tử_Orion.png.sig` | `891e9a3351a2800967888141ed538eb8c522f95b89dfa806784283946eb33cfb` |
| `SHA256_Fingerprints.txt` | `1dc513af68bffbba065c6fbdcb00b32046575fd94aff637af759e4ed59a85242` |
| `TKCVH2026-C19-1,4M.jpg` | `88209dfa48e2e73437951c4249cdab223a83e6bf5f563afd8704b43b9252a213` |
| `TKCVH2026-C19-1,4M.jpg.sig` | `697ea929e1d123d6d0ca2fc363d977ba8035df8824d6278f6d7e9ef8b71e1c97` |
| `TKCVH2026-C19-EN-V2.epub` | `ca97661b1b3c14d42ace3bca7945704fda4ad583c8c00107406b0a51d107ffe8` |
| `TKCVH2026-C19-EN-V2.epub.sig` | `efad664a738c26132436ab09a29770fbc6da9250a2381e0ff00a4038dbee160b` |
| `TKCVH2026-C19-VI-V2.epub` | `6a75ce2d23d728a89218b834460997e84466c0b625dc42c3cc557c089b9acb73` |
| `TKCVH2026-C19-VI-V2.epub.sig` | `7bfd27877d10ab9cc6ed55a0c1eac76d9eee3922bc7d44c51e9facbfb6d19569` |
| `TKCVH2026_C19_Corver_EN.jpg` | `2a22f6c3476c5054b601b74497806c6bd52e5668b6ba9212f19363af31a4f7dc` |
| `TKCVH2026_C19_Corver_EN.jpg.sig` | `04167de73570f70b1a429a70324c8c726e0bbf32e5dd0e56235d628fe329995b` |
| `TKCVH2026_C19_Corver_EN.psd` | `e83fa6dafd11dfb54c0e84b29dd255feaae0d0c2d47360caa092d8ce1744c549` |
| `TKCVH2026_C19_Corver_EN.psd.sig` | `2dae057c95881d4994fa1a1af9380c24ba7ce83fe3af95c7ff0e98fd7a4869a9` |
| `TKCVH2026_C19_Corver_EN_APLE.jpg` | `c8ca9120db85099e03348680c8d3b832229d6676b6fc79c6fbab9143c5812999` |
| `TKCVH2026_C19_Corver_EN_APLE.jpg.sig` | `a988de97bb5192ae40417a8415909ba5c45acc7d781be5c19401b8995fddfca3` |
| `TKCVH2026_C19_Corver_vi.png` | `59e6418cc9526e37f6e2d9550c8e51628a7aaf73c001bfc3df6f36322f71f76e` |
| `TKCVH2026_C19_Corver_vi.png.sig` | `1a13c1b80c67819051af6af37a89d9f415c35fa36f249a21aed2e34f4ed73b42` |
| `TKCVH2026_C19_Corver_vi.psd` | `275aa6443f6ec2d5a614bfb6432c8acaae4122b958e0f1efe12ee49db2f2bcae` |
| `TKCVH2026_C19_Corver_vi.psd.sig` | `d42c1025ba9cdf20a88f81795fc26a934849277ed0c4f1732a092b4c1fb7f7b7` |
| `TKCVH2026_C19_EN.txt` | `1c820f82eb8c63f36315b6edeb323e2c9a0879e14e2094dbaf0d27c320632d8d` |
| `TKCVH2026_C19_EN.txt.sig` | `80c8d165e569c83266f7ce25337870dc02d80f6c40d9c64423dde01f6c5e6123` |
| `The_Eternal_Breath_Alchemical_Union.png` | `76e9e81af3224ff420f2e21b25702da131b4981bd37b5a771e2999e408d5cfe7` |
| `The_Eternal_Breath_Alchemical_Union.png.sig` | `427dea9d30248e7533f554439d7bd6a8b799504e40326ab943cf358917855830` |
| `_ TKC_VH {C19, July 2026} The Breath of TK - TRAN KHAC CUONG.txt` | `4373e60158f79fa7a0b1ddb00e40ecff19463627ca0e3cdd2b72fb0724cc3462` |
| `_ TKC_VH {C19, July 2026} The Breath of TK - TRAN KHAC CUONG.txt.sig` | `8d0dcbc8e8d56b2a0e2dbf13895938f8c34d3cdb4b4bea4bc6cc411526b2391e` |
| `_ TKC_VH {C19, July2026} Hoi Tho TKC&VH Hi - TRAN KHAC CUONG.txt` | `44ca607034bd1d384196708aec754a3c199a9a2ee2ae8eecdcbfaeae08399987` |
| `_ TKC_VH {C19, July2026} Hoi Tho TKC&VH Hi - TRAN KHAC CUONG.txt.sig` | `ee6f75bff464d7482764a5257b8fabcd4eaa0a4c7c1d73f501daf30d45d54ffd` |

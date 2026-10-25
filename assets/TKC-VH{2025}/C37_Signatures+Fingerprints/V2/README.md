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
| **Effective Date** | 04 August 2026 |
| **Signing Date** | 04 August 2026 |

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
| `Song_Tâm_Eternal_Light.pdf` | `f7a825013f5de516f904076ac795073b2ac4e13652d0a9150272473fce7d917a` |
| `Song_Tâm_Eternal_Light.pdf.sig` | `703922a0b9bcdd7bef443d6694bd31d86e6d0258a7b3be315b08b06fb7fbd2af` |
| `Song_Tâm_Eternal_Light.pptx` | `4394fc46d46172a772f576e95159147602c87b3fcee398402a9d2c78181f8427` |
| `Song_Tâm_Eternal_Light.pptx.sig` | `68f2161e8dc0a7ebbbe7f7cb04f136dd83f3cce5c8e11539f326efc1e9b7b06f` |
| `TKCVH2025-C37-Corver_EN.jpg` | `3ac517fe85392c6b8fb1964ff6280e291d35c0390d583e13677d55daef52da8a` |
| `TKCVH2025-C37-Corver_EN.jpg.sig` | `e96c82a7f2279a2e41c3cb9cdc1935dd6950f66c43d0af2dfc01419519c7dfcc` |
| `TKCVH2025-C37-Corver_EN.psd` | `b1623b71396d13bcdcca0e8cd10dfb0abcf63915702314da04e66152ca1ed87c` |
| `TKCVH2025-C37-Corver_EN.psd.sig` | `4206388097be29c4c52408c9a7c21b6beb4597e6e90370798b70f9fbac90b468` |
| `TKCVH2025-C37-Corver_EN_APle.jpg` | `9a487a01b3dbe206942508d65e8995e7a045e9fb90b25f53617b46d5b1c133aa` |
| `TKCVH2025-C37-Corver_EN_APle.jpg.sig` | `55d0ea44c42ace19b9e3520e1a0523ff3f91a2becac4a78db83e6b24e4f54787` |
| `TKCVH2025-C37-Corver_vi.psd` | `9725018db4b0393cc74868ce85aa860ed4237122e2de14c9246d71453d8b330b` |
| `TKCVH2025-C37-Corver_vi.psd.sig` | `c1095be33434f3c1f131f72d0487a37d65b2c0770e8310cbabac4c61bef4c0b8` |
| `TKCVH2025-C37-EN.epub` | `6a978f229a8cd96cb16532487b6ecec2e9357af18ec1d4f056e760ce5b479839` |
| `TKCVH2025-C37-EN.epub.sig` | `9a2789e16d317f435586c471b01c68a4458a6049cfdf7ba1f8a31262526081d6` |
| `TKCVH2025-C37-EN.pdf` | `e893d40c2b2d01d530113e6dcff937762d8ba4be817f93dc9b6f449b219c6060` |
| `TKCVH2025-C37-EN.pdf.sig` | `28caf16c21f36857befa54131a7b66b99261126c3de28c04d0e36659e33dfd62` |
| `TKCVH2025-C37-EN.txt` | `e3c06d8ab63d6a2836bf36f3ab7b8e745aab3c528bf380f9ecea711d6212a395` |
| `TKCVH2025-C37-EN.txt.sig` | `6186a343e46037e4d164b8ed9f8feef9a931d7325f44234a70cbfa74aa0bd0c7` |
| `TKCVH2025-C37-EN_KDP.pdf` | `b4ad207035b24ab1242411c7f712b1e120a3e0cb3f684a2fca96ba60979fe2e0` |
| `TKCVH2025-C37-EN_KDP.pdf.sig` | `c26fddca5f7ba95e4359fcbeccae6b3f214db039a6197b1e8135225bfd216810` |
| `TKCVH2025-C37-VI_V2.epub` | `1f0beeb670ea77ac4e072554d7ae488328b3b3aaeca6f74a7c077682608c3274` |
| `TKCVH2025-C37-VI_V2.epub.sig` | `47ec46157d8ab753e6194e1e94cae3f088cfbd0c11c7712de4498a15eb66b3ab` |
| `TKCVH2025-C37-VI_V2.pdf` | `edcc8739c3dfe85cda47d45bdfba7f16e173f4921680dcec675d646476e03f8d` |
| `TKCVH2025-C37-VI_V2.pdf.sig` | `839e885de0f8442d3a59b67e497377e0655eac76c6f4c31ef0972ec1dfe8e4c7` |
| `TKCVH2025-C37-VI_V2.txt` | `af10d2da2dde948b7e7803f0bd5bab0658301a35feab19beb5b8fc2b961d8650` |
| `TKCVH2025-C37-VI_V2.txt.sig` | `ceeab2660563518adbebef3548ea3719b657bc936263579817450d7d3372f5fc` |
| `Twin_Hearts_Sutra.pdf` | `ce05fd035b35d0068ae5ab32366f5be0a78959d060bc47c19e68402af2ce0666` |
| `Twin_Hearts_Sutra.pdf.sig` | `69e9b0316ba4d725df40892d37c657a4a5a6c2de7b846c9eb4da94de8475c80a` |
| `Twin_Hearts_Sutra.pptx` | `09f62906b779f41cd083d64e4ebe9aa433548d18d3fb43fe168d67682f809268` |
| `Twin_Hearts_Sutra.pptx.sig` | `29071d652e5df4cf4564a84fcf97f12155141f015834150880db74a842b8e5ae` |

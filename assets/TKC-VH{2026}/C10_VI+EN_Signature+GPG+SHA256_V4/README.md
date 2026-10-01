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
| **Effective Date** | 15 September 2026 |
| **Signing Date** | 15 September 2026 |

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
| `CoverEn.jpg` | `1541a20146ec83ff104d2dd6a825945f4a11561c6216b25e2729c71d7c855701` |
| `CoverEn.jpg.sig` | `104d4f094ed4f0f8c8a412ba29ca0e26bf9d69e540474f4fcb2fffe7afa92106` |
| `CoverEn.psd` | `ec6e2339a0ebaba101b1b9841673b07ab8ce13a2f4cd4fcecb4acd7d02de26ea` |
| `CoverEn.psd.sig` | `a30f17eda636ae19714148cfac0d91922f8eb1ccf427033e663103fe5a30e84f` |
| `CoverEn2400.jpg` | `23f172fa9f5c4bee7cbc15a86ab853c3aaf457130cfae98691da8cf89441018f` |
| `CoverEn2400.jpg.sig` | `02207cf52cf9a50c71ee1bf09b807eab260dc59638e3d2c5785962fe641fffae` |
| `CoverVII1024.jpg` | `1b2a053aefd3dd3deee3e3229e5d69c2e9af8801bdab9c28624d1af2e0dbad3d` |
| `CoverVII1024.jpg.sig` | `b913180860f3596832459efdfbc052dbd84c5edb25867f414c736781078bb1d2` |
| `CoverVi.jpg` | `e908ed02783ede36438b90dda686e0763ad773a9d5e61ef31875efd194b275f6` |
| `CoverVi.jpg.sig` | `e7cc0b29a203d9862cca89f2b2daa35664496830c4701b5470c1933324f5a719` |
| `CoverVi.psd` | `131c09d8fa7fc31d5fc3dc628654749a90e9db7a098568e2cc7fcccc71ab2cc7` |
| `CoverVi.psd.sig` | `6f80bf8dbe6e76eb47c318cb690f66f43a86e128825752a934198887871c6941` |
| `CoverVi2400.jpg` | `e908ed02783ede36438b90dda686e0763ad773a9d5e61ef31875efd194b275f6` |
| `CoverVi2400.jpg.sig` | `f47f9b29ac5c88e2c81c904a68dc29ff8e0ac25afc7d8a5befa69fdb5dd0036f` |
| `SHA256_Fingerprints.txt` | `5088cf40b50bb4ec1a629e76f36aa82beaf44f63857280ce90426e5317c238a8` |
| `THE_DIAMOND_UNION.pdf` | `a7cc6f04ffd06a75b9a1964cfedd7b11a9ddf97cb5f3c94937e70fa7c917e133` |
| `THE_DIAMOND_UNION.pdf.sig` | `f0ff3a3d5a65a7027f11f8793953f41d5b2ba780ac3e1e424f260fe85b0ff771` |
| `THE_DIAMOND_UNION.pptx` | `e9fe220b77d3f131ab3b5f5497e45e383ce32e5bddd12f842c4f9b68c4f0a82b` |
| `THE_DIAMOND_UNION.pptx.sig` | `6c7a004f6d34e82567bcb1657774d72edd2ad399c141d69ac4601daf1ae04959` |
| `TKCVH2026-C10-EN-V4-KDP.pdf` | `1992853e0e0790228324e24134e2ef7f8e698511deb87d849bd26c8333e12734` |
| `TKCVH2026-C10-EN-V4-KDP.pdf.sig` | `2fe8709227c4ab80c26718529ec71fd2dae2aca724bd8d493c54f0bfd02aee83` |
| `TKCVH2026-C10-EN-V4.epub` | `2048bff114159bcfc5f0029ca1d939858ce7be587ca6039d4fa45a87a97fb950` |
| `TKCVH2026-C10-EN-V4.epub.sig` | `95e435b47e98ee0ad355a5c2e15397490682a67bed376c408622ae99ec7cc80f` |
| `TKCVH2026-C10-EN-V4.pdf` | `c91f14e403c4eaeae66e2ed485ba8d07371a6a80868997bfbd60d8a3c9d385c2` |
| `TKCVH2026-C10-EN-V4.pdf.sig` | `740a37fea8016f4f71be52cf81d1781db2c95bf4d7d8e4b04f74866e5fbe2f95` |
| `TKCVH2026-C10-VI-V4.epub` | `2f3158dcf49a20c2a19cbc4f7a72b675bef8f392908bd0a9d030992543a4c1a2` |
| `TKCVH2026-C10-VI-V4.epub.sig` | `886677b424eeff12a20439405d5c36caa50f05af754b551bca783b0129ca2841` |
| `TKCVH2026-C10-VI-V4.pdf` | `c230ff4ecd8b7264b3695a9c9dffb6e4b983b88bf9e5578b30e2bbcebab6461e` |
| `TKCVH2026-C10-VI-V4.pdf.sig` | `f58c7d28a5c922f2a3ca8fa30c6d5f5e993e7b453757d5471f141278d9a410e6` |
| `_ TKC-VH{C10, Mar2026} TKC-VH DIAMOND COUP - TRAN KHAC CUONG.txt` | `89bbf7f67fb388f956bbb917411bf6b5780f45a8db6c30e3993ecc792ce11a56` |
| `_ TKC-VH{C10, Mar2026} TKC-VH DIAMOND COUP - TRAN KHAC CUONG.txt.sig` | `2886dfac760bf6e979ecf5747a4b9474d3fe1628861ad8ada18268abb4acdb3a` |
| `_ TKC_VH{C10, Mar2026} Cap Doi Kim Than Ch - TRAN KHAC CUONG.txt` | `459f8567295dfdabf2db1b0dafd1ad9e99f328cff926363af7789c2422f1fdaa` |
| `_ TKC_VH{C10, Mar2026} Cap Doi Kim Than Ch - TRAN KHAC CUONG.txt.sig` | `10ce4a71133a2cec18440a9d2266d5d33b24638c8818d7bb96ecb9ff607c0372` |

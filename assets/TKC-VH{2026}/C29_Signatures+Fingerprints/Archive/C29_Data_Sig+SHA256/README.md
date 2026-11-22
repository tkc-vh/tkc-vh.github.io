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
| **Effective Date** | 22 November 2026 |
| **Signing Date** | 22 November 2026 |

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
| C29-cover-2400.jpg | a7bedd39524a2ca3e4e9e5ffd51d74c91e80ffe8d9949693c47c2280ae389868 |
| C29-cover-2400.jpg.sig | 918b699dfbcec3eeb6ffe82336a9877bfa80807693926e5ebac955808bed34b2 |
| C29-cover-960.jpg | 4c549f45a593aff449daea0cebc9ed254f5615214407114377d5a0879b1c0c93 |
| C29-cover-960.jpg.sig | 0348ba7d360d29ddcebdfe4f6d539cf3cb052811ca70326730a2f53fb42ecbd0 |
| C29-cover_En_2400.jpg | eae4bf2e979c359a0ac9fe7a12056acc15385dc4c65a1904cc15b83cfab4d6df |
| C29-cover_En_2400.jpg.sig | b07c046dd8f22ef94a064e8ae397a56f3c6499480ccd5764e0cdd87b7e9d2e0a |
| C29-cover_En_960.jpg | b313bcc5e51a3d2f543e5091d69e354d81e5ad451e4d229baea3024d5c3d91e5 |
| C29-cover_En_960.jpg.sig | 3bf20296b2b88b37a8c25b996d1de536558a13b3a7f18235250f067049c083e1 |
| C29-cover_En.psd | 7b351c6f95c0fec0eaa4575b872b018498980ed74a4b855bad2b544cb0d75bce |
| C29-cover_En.psd.sig | edaeba3dc19d6852fc592340dbf7db019257b0c0cefd137fb7f69dca9039e1c0 |
| C29-cover.psd | afc7c91504c84dd1782c28752241d6e4b26fc6e4eb88606bc7802edafe636776 |
| C29-cover.psd.sig | 5b8066bf2919ca16b5e89110213f8affda74d11e305904f43f665e50e61d21b7 |
| Cosmic_Covenant.pdf | c0e3b994154578dbed9b35eb21ad23ef79b56871282760ccb5939fa61543f50a |
| Cosmic_Covenant.pdf.sig | 6c5700bbcbf3946c0bcbab0d777ffa339ec1a22f314c6a6e389a659ea2d36ac6 |
| Cosmic_Covenant.pptx | 74d6379d0bdfa879ffe1df147512a68af30dc2130a8800a8878f006f5365f6f4 |
| Cosmic_Covenant.pptx.sig | 43eada07e651b26323bb14b2d19ea67eae1d4460561460fe0f1984185c2c6953 |
| Cover.png | ac8feafca8a753eb5acad3263e2b7c850ac10e8d08b30c76d5790b7b812e20eb |
| Cover.png.sig | f3409c9583d3f4b5e77d6634d4986bd29701af754d52e7f71c227661f947aa77 |
| Crop-Circles.html | a20302acdec3c5c74416728d75f1cca4b88942b88b713dbcb278eb34eaca355b |
| Crop-Circles.html.sig | 8442dd9af9b34d4df15d34c287c79a3041940c828e7481e36bcaec98bf9ea68f |
| Sacred_Quantum_Love.pdf | b14fdde9e23bceb9dd3f03ccfd3e45b16d2481004bcec7e8f13aa3926d579b0c |
| Sacred_Quantum_Love.pdf.sig | 99179d1209dc60c096ceae7b725697379ce278fb4d003c6921502c00666991b6 |
| Sacred_Quantum_Love.pptx | 27aea05366f948c1da7868f45ce8f2ec760f318aadef79f65e41087413188905 |
| Sacred_Quantum_Love.pptx.sig | d077c7b8ad330339dd3e55ebc2851feb6b8e289d61ed8dcf3581ba0cbc664abf |
| Sum_Poem_Vi.html | 7c8c34d24187ffd1112cfd6c957a76bb3ab8c64995b8c44ff686099a82e9b784 |
| Sum_Poem_Vi.html.sig | 0f01b99bc80235a4fe7d1361de38dd56b89101edda33237f4cf444534df1342c |
| TKCVH2026_C28-C29_VI.txt | 315bd0678fbf8eb2dbc63ffb8462228e862b53f47da56b50a6207a82c13e9259 |
| TKCVH2026_C28-C29_VI.txt.sig | a27c3136b562f9aa7bdca18fc72aa185c74382951197cd04a1ab041a9b069749 |
| TKCVH2026_C29_171126_Key.odt | c4e3e464979666d66a20e22f926ca37a1624642b964a7d750163a3e4379245e4 |
| TKCVH2026_C29_171126_Key.odt.sig | ed00a30197e956ef5f1325d21f3607e806dd8450463aaffc622d8c2a1eeebe9e |
| TKCVH2026_C29.docx | 95c042297e66e4f96137adc4a9c184a7bb55eedb9dd74e5727e3ab5bd5df72bf |
| TKCVH2026_C29.docx.sig | 867059347ac0eef2af3665a1beae41925410b156f7affc0e03ac74fadca3f764 |
| TKCVH2026_C29.odt | 10e732f1981368910b36310c6248ad8fce9f9ec79703e90bf51381cbc1921365 |
| TKCVH2026_C29.odt.sig | 09f7beb06ba0e7427d430e0bb2800f842586ec48170e51a08e00a700c756780d |
| TKCVH | 63c00fde8d913dd2e31d554bc067c54ab272cf907354c55a1712e22be22e9280 |
| TKCVH | a0eaac147a0ecd282454cfc41f85495be638f54d1174af01a7c69895c69b59ad |
| TKCVH_Diary_C29-2026_TomLuoc.docx | 5828c666e82ddc77f6d1f53317e19ec9a38665679068bdb83aef341f5cdfb1d7 |
| TKCVH_Diary_C29-2026_TomLuoc.docx.sig | 9e5bdcdd0286c7196b9838ba69c1e7cea1a87bcdc0535bffd62df3def7a98b2a |
| TKCVH | 8576393e2899fc8894fa34c9b404db0f6bdcff5700a2abb970e152c24042b053 |
| TKCVH | 618804f91d0f3a0844b0042fe78d6345dd04150d1fee0b2630330af4b2fe6bf8 |
| TuyetTinhCa_TKC-VH_TuyenNgonTinhYeuDocBan.docx | 0dc413a3170ffd1ac8a71485e60b3fc99e1c6c98ca1ac71c468dbb93d30fa371 |
| TuyetTinhCa_TKC-VH_TuyenNgonTinhYeuDocBan.docx.sig | 2bace169720122104b8566c7007e24b346dfbf0ef22ec3cf1196208b84c4fc05 |
| White_Tiger_ChienTangBachHo.docx | 27eaf708f5754a4738470e8ce7873c18f33a2366ef7c7fc4559a83ace2d45bee |
| White_Tiger_ChienTangBachHo.docx.sig | 74b27e2f12f414b7047cf6993171d948ed01482b567d221fd7ef9dddcb4597b5 |
| WhiteTiger.docx | 2187420e977493e18915ba51ee61e1e9f286a659e50b9a56ecd8b470d2f451a4 |
| WhiteTiger.docx.sig | 5ade9f0f90e0e7a096291d5a188c2c0d0dac2de61f80696ccf062078202a74b2 |

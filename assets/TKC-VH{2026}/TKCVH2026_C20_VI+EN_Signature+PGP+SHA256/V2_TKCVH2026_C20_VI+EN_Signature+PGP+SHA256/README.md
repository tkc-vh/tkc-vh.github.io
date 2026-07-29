#  © 2026 Tran Khac Cuong & Dieu Tam (TKC&VH)
- All rights reserved.

---

## 🔐 Digital Copyright & Authenticity Record – Legal Archive

- This directory contains a sealed legal and technical archive used to
authenticate the authorship and integrity of the TKC-VH Diary Worrks. 

- The archive is part of the **TKC-VH Legal Library** and is intended to serve
as independent verification material for legal, technical, They are commercially distributed through authorized platforms.


## 📘 Effective date & Signing date: 
- **Author:** Tran Khac Cuong (Pen name: TKC-VH)
- **Signer:** Tran Khac Cuong (Pen name: TKC-VH)
- **Effective date:** 27 July 2026
- **Signing date:** 27 July 2026

## 🔐 Cryptographic Methods Used

- **Hash algorithm:** SHA-256 (Algo: RSA 4096)
- **Digital signature:** OpenPGP (GPG)


- **PGP Fingerprint:** 4099 DAAA 3202 7AAC E7BA C507 5165 E6B6 2628 1F7A
- All signatures are **detached signatures (.sig)**, allowing independent
verification without modifying the original files.



## ✅ Verification Overview

Third parties may independently verify this archive by:

1. Checking the SHA-256 checksum of the files.
2. Verifying the GPG signature of the corresponding files.


- Step 1 — Check SHA-256
macOS / Linux (Terminal):
shasum -a 256 "your_book_file.epub"
Windows (PowerShell):
Get-FileHash "your_book_file.epub" -Algorithm SHA256

Compare the computed hash with the matching row above. Exact match = the file matches the official release.
- Step 2 — Verify GPG signature (.asc)
1) Import the public key (one time only):
gpg --import "signatures/TKC-VH-public-key.asc, .sig"
2) Verify the signature (example for EPUB):
gpg --verify "your_book_file.epub.asc" "your_book_file.epub"

If you see something like “Good signature from … (TKC-VH)”, it means the file is the signed version and has not been modified since signing.

✔️ SHA-256 match   +   ✔️ Valid GPG signature ⇒ Author-verified original release.


If both the checksum and digital signature are valid, the archive can be
considered an authentic record issued by the author.


## 🏛 Public Archive & Timestamp

This directory is publicly hosted on GitHub.

The GitHub commit history serves as an **independent third-party timestamp**,
providing additional evidentiary weight for authorship and integrity claims.


## ⚖️ Legal Notice

Any modification to the original content, even a single character,
will result in a different SHA-256 hash and invalidate the signatures.

This archive does **not** grant redistribution rights for the original work.
It exists solely for authentication, verification, and legal reference.

---


# 📦 File Fingerprints (SHA-256)

| File Name | Fingerprint (SHA-256) |
| :--- | :--- |
| `C20_Coverr_EN (APLE).jpg` | `ffc354abfb3986e6d78314283954c02da43a8b2bbeb7ad6acf2656d3e7afc3bb` |
| `C20_Coverr_EN (APLE).jpg.sig` | `66ae157384da2a30dfeaa358f1a98194d59f7d75f364af8d29b68bf89d6c0588` |
| `C20_Coverr_EN (KDP).jpg` | `55487089b5d2e4cb847304bafc3fb9ea3a99350db1ef4f6692e1f37f8002bffd` |
| `C20_Coverr_EN (KDP).jpg.sig` | `4a8a018b68a2cd5a0c7751e9cdc6e47ab8eb17c3a6ba0ec1e7229cc4032cc27c` |
| `C20_Coverr_EN.jpg` | `accb461b1d7fdada93f5e4f0b6e420008e63c21f6ca7817a9b2888e34b8f89d0` |
| `C20_Coverr_EN.jpg.sig` | `a36504eaf66d95c6d114e0738bde1863ef876a2909ffc3f7edfea109c888c796` |
| `C20_Coverr_vi.jpg` | `80ea207812fd7d2cdf2f8d7ab9ee0d96bfe5966d6abb4bf953f542896ff248ff` |
| `C20_Coverr_vi.jpg.sig` | `7428dae40d689b5eb6d2933f1200b8b07b8e113d2de68d0aecb1960c90418153` |
| `C20_Coverr_vi_APLE.jpg` | `8877e6b5e30da64c1c887013902c4e8002c790802288cc71aa2ec5ef040dc5f2` |
| `C20_Coverr_vi_APLE.jpg.sig` | `ad3cd914d0ac98d9c9ef1474f77826f46d998b1a9030a094706fde5694c388e1` |
| `Cover.png` | `a7615f77e8b7c029e0c680e9ad29224d4192cf8ac37180823906c61e7c61263d` |
| `Cover.png.sig` | `0c5b50220575aeba8d2d9603aa9bb93cfa72cfc85a3f1f2be872d13be6877578` |
| `SHA256_Fingerprints.txt` | `8c342b1721d145858569994a77080c51616fd81dd5bdc57cdf86fcb967998134` |
| `TKCVH2026_C20_EN.epub` | `6b844657a1d67edbed61cb86b008fc31f07d4fc55d3adea1803b4e694013f985` |
| `TKCVH2026_C20_EN.epub.sig` | `a0b4baed03731e7166b6b75bd713d7f52c951b05eb38b722d0f9fc42fc967dbb` |
| `TKCVH2026_C20_EN.pdf` | `45cd99659d5b02f75eecc4d5c7f7bdaacfbc78acc46d5de498f8db1288517e3e` |
| `TKCVH2026_C20_EN.pdf.sig` | `ab9a9c8575ea44f07b049ea029ff6f8b44579681f12568ab6320ec221294d3a0` |
| `TKCVH2026_C20_EN_KDP.pdf` | `9965ad90c4cf38ab44106109648047b00533d0f5ff0fb8ef2a61b953418d19ad` |
| `TKCVH2026_C20_EN_KDP.pdf.sig` | `97d4eb95b30c46898e50ef4d40932b278ffd171d9813a35e33dc08abc394d258` |
| `TKCVH2026_C20_Vi.epub` | `46334f86b7ddefe512d2a60b022647ad6e2223f61204d02d6ff5d478c8f6ceab` |
| `TKCVH2026_C20_Vi.epub.sig` | `0effc754ba50d7694ae198d04477c5f3c08ca9e3e19056939bc6d38f94653e1f` |
| `TKCVH2026_C20_Vi.pdf` | `a7bed23adf7622ab19ad41072816bedd23286441c6b026b748e1f9a2b315221a` |
| `TKCVH2026_C20_Vi.pdf.sig` | `2a0a9b00b68a521cd1fdf626d921b13fa7d8f13403a2c4551158195507d8a6b6` |
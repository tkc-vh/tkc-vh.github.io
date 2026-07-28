#  © 2026 Tran Khac Cuong & Dieu Tam (TKC&VH)
- All rights reserved.

---

## 🔐 Digital Copyright & Authenticity Record – Legal Archive

- This directory contains a sealed legal and technical archive used to
authenticate the authorship and integrity of the TKC-VH Diary Worrks. 

- The archive is part of the **TKC-VH Legal Library** and is intended to serve
as independent verification material for legal, technical, and archival purposes.

- The original EPUB and PDF files are **not included** in this repository.
They are commercially distributed through authorized platforms.


## 📘 Effective date & Signing date: 
- **Author:** Tran Khac Cuong (Pen name: TKC-VH)
- **Signer:** Tran Khac Cuong (Pen name: TKC-VH)
- **Effective date:** 28 July 2026
- **Signing date:** 28 July 2026

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

| File Name : SHA-256 Hash |

Diamond_Soul_Union.pdf: c070eafb4118757b232be0c81528869496b7ec334512022c5e2a894433a2c70d

Diamond_Soul_Union.pdf.sig: 7186b6e7ba0609cb846ca3ed57dc28268e09b51624353884366490fde327436a

Diamond_Soul_Union.pptx: 9602c340b295a2132473aeb9e4fe6f601a104ed0455dd3450138f2633fdc2a25

Diamond_Soul_Union.pptx.sig: 2da69bead6d2cf54550ea083a19637e02678d183e365eccc4881a308b1c106d7

SHA256_Fingerprints.txt: a18aec8d6dc2af39aa2c099cf6c9adfdd8229c5d74446561c2f0cc9144bbf57f

TKCVH2025-C47-Corver_EN.jpg: 1651b0a898db74b7c4736e519a6fb3f63e3ee590fe8af904990487d96612bb24

TKCVH2025-C47-Corver_EN.jpg.sig: fefba9a3aefc930f91c3ff7c138850cd6aa2f5ea642ccb4c2184b89957476e5b

TKCVH2025-C47-Corver_EN.psd: c4aafc32db9697263c0114edbe5dd10ad3c561fcc6b0366644a3bd35148266d2

TKCVH2025-C47-Corver_EN.psd.sig: 2635c9bc345e3210a233f2b084fc7fe4f4bc9311a7cc5846afa477da6a94233a

TKCVH2025-C47-Corver_EN_APLE.jpg: a2a7866e7c4d65bfd222154c26a5ca8b8ef7b42d04412979943c5dd8522f9745

TKCVH2025-C47-Corver_EN_APLE.jpg.sig: 2d6f83cff0fa9903338a49f790913d1771e3f95e0f2c1f57f5e8ae7488b26deb

TKCVH2025-C47-EN-V3.epub: 22de07a63b3c8f68c4249efbccbb8faea74c1aff7ec6c5bf83f9afcbd55fbce6

TKCVH2025-C47-EN-V3.epub.sig: 0defd3f709a587dadcab3f688a6fe9e677fc216737336cc289392b700e3cb04e

TKCVH2025-C47-EN-V3.pdf: cf967ac1d2bab261a5db32afb42a51974b1c4e69b2def34713a1826b6b6dca7d

TKCVH2025-C47-EN-V3.pdf.sig: 29e0766a1ca65cb1a4cd5f0d50fea75ec3bd77acfaa102f6f9d06954918f4cc5

TKCVH2025-C47-EN-V3_KDP.pdf: d92aea7e74fe05b30e12e56611d6815576fd9d1a3e460fb6796cf842af712bcd

TKCVH2025-C47-EN-V3_KDP.pdf.sig: 075e795a977343ab1a6ee061ad68b8e6ab3531e6cee18def24da68458a525db5

TKCVH2025-C47-VI-V3.epub: 80af8e0ff1867f08ce21c98eb5d3163d4884dfc886a54d7a5e15dc55c0378926

TKCVH2025-C47-VI-V3.epub.sig: a657ad1ad7c0d578cd593af72b68454c3e5f33bceb9b16b0d21512316c43ea23

TKCVH2025-C47-VI-V3.pdf: 4cd5442583529acceeabaa4a001d07df0a26fc479bc42d58e8a25aa9d459d5c8

TKCVH2025-C47-VI-V3.pdf.sig: 5a890b785b86360def4821293d937b1637d9aeff9b465f219ccaeee3d458b365

The_Diamond_Vow copy.pdf: 1f703f6188881565520e79c2e2cc7baccbf0692bc66d95291d3a36f2ef2b145e

The_Diamond_Vow copy.pdf.sig: b6f31aa54e97f398a54939423f355465395aa1a06229bac6b939e40833d005f0

The_Diamond_Vow copy.pptx: 25164c7f7611ecdeff6cf6fb24351f761bcb820c039728dd77890a281e0e513a

The_Diamond_Vow copy.pptx.sig: 126adea86e1d5d137627e5fec1ecb97447cf0294686ce391d3a800cd2f5044b3

The_Diamond_Vow.pdf: b7785701e986b765cc57ed2288a9b9c299f952308aba671f5462695421bfe4ec

The_Diamond_Vow.pdf.sig: e5b6f18848ef46b6f63c2806fd7fb8f489710cc1b95281683800e49cfae61057

The_Diamond_Vow.pptx: 133d1cb93f3bdfe61f3c11d1a27a6a16d0c28434cfafdb2086339ccfd5a15182

The_Diamond_Vow.pptx.sig: 595f43f2938b6c9c24b2381cfa23ffa7cf2da0dbd1cc92449141d1361dd4e0d5

_ TKC_VH {C47, Sep2025} Allied Battle - Sw - TRAN KHAC CUONG.txt: 0ce42b3fe1c1c85289052747931fbde885bea51489bcb7352e83dba05c656586

_ TKC_VH {C47, Sep2025} Allied Battle - Sw - TRAN KHAC CUONG.txt.sig: f0b11217f81f21d726da9304d0a8e0bcbf7c3395a6588969a3f4f11dfe1870e5

_ TKC_VH {C47, Sep2025} Lien Hiep Tran Pha - TRAN KHAC CUONG.txt: db613477126e4e346ea6dcb4f492f8e5b22d184961e51c9253ed989d018aefdd

_ TKC_VH {C47, Sep2025} Lien Hiep Tran Pha - TRAN KHAC CUONG.txt.sig: 14d8775955ba92d6cc21400634cf78669f1fc2931e9c98320ef02f63a7ce94df

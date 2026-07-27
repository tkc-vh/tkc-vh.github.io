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

| File Name : SHA-256 Hash |

SHA256_Fingerprints.txt: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855

TKCVH2026_C20_EN_V2.epub: 6f701be9c8607ae39b7a35065c7673f0f69c86c25856d5cace57fd3c84bf560f

TKCVH2026_C20_EN_V2.epub.sig: 2c41c23c648def7215f1eba49541e8dc74a83f9aa1016bf8f51c38032fc95161

TKCVH2026_C20_EN_V2.pdf: 40264b3572a199c64f800dc63b63f7360de39e22a1c607e107c34ca42b45de93

TKCVH2026_C20_EN_V2.pdf.sig: dcb62fa9d1eff551d77cfab7b9e7670746513f9fc150856c396a18b6a079810f

TKCVH2026_C20_EN_V2_KDP.pdf: c6659d2dd8263d28bb3a0f20ce78c9c2595a885d4aad5291d4c7b90f2a77019d

TKCVH2026_C20_EN_V2_KDP.pdf.sig: 78e9a731e7c76896ab7b0141dcff93cfc4020a37b203e9616f43bf90cc8981ba

TKCVH2026_C20_Vi_V2.epub: 2d2e2e870daea259b0629545d4a16385f54ff63dda98691329049d0efd78238a

TKCVH2026_C20_Vi_V2.epub.sig: 0d7c4872a1282543fb109227e71a9ba865651bb6ecdc786da1fef6d97f9bca33

TKCVH2026_C20_Vi_V2.pdf: 6d9e352eacee903fb894af2c53c485c0fdc6670078ffbb1e6765767e70694579

TKCVH2026_C20_Vi_V2.pdf.sig: 2e2806fc169f1bbdecdae04b413c6d9ffd9c220c50e51c9d140ec69bb2244d29

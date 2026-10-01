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
| **Effective Date** | 30 July 2026 |
| **Signing Date** | 30 July 2026 |

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
| `Mật_Tịch_Trụ_Ngọc.pdf` | `c2b401d9c79c2e5c4e2bb41e0c1129a75b3eadd29ef37e413eeb7cafdf74560a` |
| `Mật_Tịch_Trụ_Ngọc.pdf.sig` | `b49474f385c5625cbe3b292b0aa8ac96a20d96af7ee96459bdb6c0c1b642992e` |
| `Mật_Tịch_Trụ_Ngọc.pptx` | `c7e4ec0ac6f2f5f3113c65b9158c549f778976612f7ce35aaebe02e6d20b8b31` |
| `Mật_Tịch_Trụ_Ngọc.pptx.sig` | `acb55d681d977bfc9c873a900c9de21d06a248198b51b8e742d3a91ec7e15717` |
| `SHA256_Fingerprints.txt` | `156e5cb16f308d2444997459580deae57a839e4a29be825fb4c114706b0aed15` |
| `TKCVH2025-C45-Corver_EN-Aple.jpg` | `33decd2f13db6f966050315bf8e6d4edfb02dd2dff79a733067144405f015aeb` |
| `TKCVH2025-C45-Corver_EN-Aple.jpg.sig` | `60a2489a26e766a066d5f4aefb9c9f0b80f746ed206a9385c1c9cf8a7b7a739a` |
| `TKCVH2025-C45-Corver_EN.jpg` | `4a7c3113dcfe9fe9011add3a5451136c39c4f27d098081ac1e91e32a2c512f31` |
| `TKCVH2025-C45-Corver_EN.jpg.sig` | `b7c573bae7c9af2c50ed4824bfe227a264c2032d84d62683d4e5c9cbfdb9f746` |
| `TKCVH2025-C45-Corver_EN.psd` | `a218aa4765008d2edbeb74fb6697f4baca694fa807750c74d3bcd1087362f5e4` |
| `TKCVH2025-C45-Corver_EN.psd.sig` | `5852ac01b43459a1203aaa6ae87c636b0c86aad2f1adea716ec53aaad88a7ac3` |
| `TKCVH2025-C45-Corver_vi.psd` | `e0715d21d68a3f569bad1188d6c2772ef93cb054a9982398a451285c2bde668b` |
| `TKCVH2025-C45-Corver_vi.psd.sig` | `6f7ac56924de87e8b8ee5996fd805d60355e890b417f30f2e4ec0e93f383d4d5` |
| `TKCVH2025-C45-EN.epub` | `ff2daf9b013eb6920a61300b0d53302c4cc0df18a62b1db5f2ab98e6ddd0ad55` |
| `TKCVH2025-C45-EN.epub.sig` | `dbfea3e93a40e00ed7c7672a3659d45228f9aad45f090fe4328a46754ce8335e` |
| `TKCVH2025-C45-VI_V2.epub` | `fe621388fe265608e80d4dc3b3aa5320659864bb92f1737e5f074def817a8a95` |
| `TKCVH2025-C45-VI_V2.epub.sig` | `9b2c4a0d84acf7c12eeb2c026b40c0f06622a3c81f215d34119beb19e1a5f24a` |
| `TKCVH2025_C45_EN.txt` | `a150c2afcde7dcf29382131dabfeeedd220e5fdeacee97ba2ce25fb71fcf15c5` |
| `TKCVH2025_C45_EN.txt.sig` | `bb5843ce0082e1936ae557638e76ecc2abbfc93dbc6f9f77872667b93b7bb543` |
| `TKCVH2025_C45_VI.txt` | `c0c461da59c303b39dfd262fbcb6b3577f2f84daa4cdfe7fb814ea348cf51ca2` |
| `TKCVH2025_C45_VI.txt.sig` | `c90d7d8c1a9f5e5bcf671dbd9b162b0271f2a9f4231ccab09443254d9d043b73` |
| `Twin_Hearts_Diamond_Code.pdf` | `5ecc7ecc2ad5baae9b3e9e5391d76075bd353b1d71a6c53d6756f1303cc0f159` |
| `Twin_Hearts_Diamond_Code.pdf.sig` | `5f5962f8eaa5f9f0ea90b99748fdf379e247238c13a76d2f00001cb3b888dffa` |
| `Twin_Hearts_Diamond_Code.pptx` | `6462c281aee75049159525ec5833282674519f65a3767175a003a25859e1cbac` |
| `Twin_Hearts_Diamond_Code.pptx.sig` | `ed6281f3352290c2983885bd0ba01bed242b82e3526340c6b97bb034961f743e` |
| `VAJRA_TWIN_HEARTS.pdf` | `d029c962970618ad15bd9123058134c1015cb159882feeacf0c9170994d0fd8d` |
| `VAJRA_TWIN_HEARTS.pdf.sig` | `277aaf2715d3aa1c519cc80ca4aaac030870f0f425efe1ccdf949bded49f82fc` |
| `VAJRA_TWIN_HEARTS.pptx` | `868b9ab2d4a14cbf2366babe205b9c490cf3c9929ecabd522b0f0c1038e490e7` |
| `VAJRA_TWIN_HEARTS.pptx.sig` | `b526c389bb2ab87b8be41973d3e4bdffcd62b6809897afe485afe935ebf8448e` |

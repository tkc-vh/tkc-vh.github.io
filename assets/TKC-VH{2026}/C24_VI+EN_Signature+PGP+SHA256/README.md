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
| **Effective Date** | 06 September 2026 |
| **Signing Date** | 06 September 2026 |

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
| `C24-2026-Cover-EN-2400.jpg` | `9a38e169b19d0bcf1c6ec3628bd9bceb4b09b0e339667e61ad7ad0e76d2377b7` |
| `C24-2026-Cover-EN-2400.jpg.sig` | `9321eaa3481f661000ad0ed5c03bb1e3b06337c7a4c19fe6b0435df1a857daba` |
| `C24-2026-Cover-EN.jpg` | `4c96ce69dd30f03fc9c657a3917c8da01140424f815051e3c9266de82d09683d` |
| `C24-2026-Cover-EN.jpg.sig` | `a717df6aaead49151a8ace3c2193bdeaa3f7d8d9ec642232138652c78990df85` |
| `C24-2026-Cover-EN.psd` | `9b7f5d1ecd29adaaf408fb2fa388d3ead8a58332c8e47b0eb482dd67b29adcc0` |
| `C24-2026-Cover-EN.psd.sig` | `28319c98550f51aece5d001ea915d935bce1059a0a0c31d0b56c4c79045d2928` |
| `C24-2026-Cover-VI-2400.jpg` | `cf12bd89953b03daccfeca9f15506be7a16411fe6ee0742a409854d69f2a2e4d` |
| `C24-2026-Cover-VI-2400.jpg.sig` | `ec95daab84ee7f7eea10ccaad98d38edb32dc287f9c9d39764086256a29f4926` |
| `C24-2026-Cover-VI.jpg` | `335a7809d0820d017ac9c223d9cdeef31b605f3a033d007f1ea15877a0a337af` |
| `C24-2026-Cover-VI.jpg.sig` | `c3a67cd2620db1d56cb7296d074924b57f62651ce399748f0f0df9ad81ade073` |
| `C24-2026-Cover-VI.psd` | `ab7e8513c3cd1d5f4f79bad8c64b61314f475d5c80a016f96059b6d0e59b26af` |
| `C24-2026-Cover-VI.psd.sig` | `7128e478e8cc1e45a3fd12075fc6f2c43939dda069940d03c1520c8d9489b00a` |
| `Cover.png` | `e1d64fda2c68a126266046190bdc0257c4c7f786b5f5ce83decc2654057119cd` |
| `Cover.png.sig` | `bbc90471da479bf866c22a3c9a865fbcf08c6d5f386cf3f00fd55db94a4f39a3` |
| `Huyền_Kim_Song_Tâm.pdf` | `412690f640199204a6ac28683ee5388e78ed1e34e5048a76d3bcbf4ae754b2f5` |
| `Huyền_Kim_Song_Tâm.pdf.sig` | `5c512c37c276c78b3826de6b420943f3a49052eeb6645fff214d78e12e1bd0ae` |
| `Huyền_Kim_Song_Tâm.pptx` | `c08fcec6c627a374c9b16104db3ce6eab9e517998653b26963bc97df63a5bde4` |
| `Huyền_Kim_Song_Tâm.pptx.sig` | `9501bba9f56b2b25f4dfebcd64eca9741082137e6f94124779db513ccbdfd8c5` |
| `SHA256_Fingerprints.txt` | `a192a20da1584a233a0e06181735009bcb600e92df730caea61542db1fb028af` |
| `TKC-VH DIARY. C24-2026 - TRAN KHAC CUONG.docx` | `a0d16aa08bfa2f6d107abbefd095ae822d50eac5e08c3ad22999b2e509ff5d4f` |
| `TKC-VH DIARY. C24-2026 - TRAN KHAC CUONG.docx.sig` | `2bbc21b91230820c964d6da22b7852218fb5c2b25e634f0ea81f22a6aac9e63e` |
| `TKC-VH DIARY. C24-2026 -EN.txt` | `04a6bb1667325ac809a95f1d06761f1aed6d39a2d9b4fdd3de62e36c02fc277f` |
| `TKC-VH DIARY. C24-2026 -EN.txt.sig` | `0d716592ad24da84f65f1b686c046a61afc31978847d8dc211929537dbb89388` |
| `TKC-VH DIARY. C24.txt` | `55b59ff99005f86ddbca7326c8aeb428c09978e40b67463b45fead20f50798b9` |
| `TKC-VH DIARY. C24.txt.sig` | `8e1b3bc714f4cb882d610986e18704dc315192f792cffb0956d1b5a4a3b56188` |
| `TKC-VH DIARY_C24-2026-EN.epub` | `e397ebc1085f209f6381257cb4277a29f7f5ebba2253fc0cada0533224724a9f` |
| `TKC-VH DIARY_C24-2026-EN.epub.sig` | `6f971d3d6792fe607e82e319a049fddbd35354755e9f4220a576b944834a26d7` |
| `TKC-VH DIARY_C24-2026-EN.pdf` | `1fdb350043691fc24f3443c2237b226907d3573d247d40ba0474c52ad8ffd473` |
| `TKC-VH DIARY_C24-2026-EN.pdf.sig` | `629f731dfbb98623ef4b4adc7e53b231d00bfef3bf205b8213ceab0c168600da` |
| `TKC-VH DIARY_C24-2026-EN_KDP.pdf` | `9d22bed2fefa0cde3aed3f1b6cc6e9aa5a55703f39dbaed9b10ef6388c781256` |
| `TKC-VH DIARY_C24-2026-EN_KDP.pdf.sig` | `b261dd771e8dcdf08bad0ba9b7ac2f9853a847154a48351b8c3a85dc217dc2d6` |
| `TKC-VH DIARY_C24-2026-VI.epub` | `693950f32690a45c7b4e8b0bab5ee5bd0079e6720bdb232e6cec65757f947ca8` |
| `TKC-VH DIARY_C24-2026-VI.epub.sig` | `8626b443818b50456590958efecdff59c38bf5d65e189590a7379a1433b8784e` |
| `TKC-VH DIARY_C24-2026-VI.pdf` | `ac002afbbe4effa3243b667c91d872c8b8c8068608ac15f52f3711f6cebce41a` |
| `TKC-VH DIARY_C24-2026-VI.pdf.sig` | `0e129ad425e219e08575beb754f88bb4b3abde961f939c395d42d3c81ec73308` |
| `TKCVH2026-C24-VI.docx` | `a76e95425dcdabbd19dfd9dbc64012ec0a095a6bfc96ed79173e85591428df6e` |
| `TKCVH2026-C24-VI.docx.sig` | `2c2adeda6367df725314dbda2f08c45267305582f10dab962eb1f27176a2ee89` |
| `The_Golden_Heart.pdf` | `c83f912bf0b1340e8af9eefb20060e25a1900d55e5c3ab46876b44988746c97e` |
| `The_Golden_Heart.pdf.sig` | `22d9d0694afaa23ff1176ccbc6760de6f176faac7b2328bfd2ac4e3951673277` |
| `The_Golden_Heart.pptx` | `7f0786b3c9dd334bc1db81d4412d0175a73f2e23e612a57fcc6bbe172e8d36ce` |
| `The_Golden_Heart.pptx.sig` | `9a780c6e408e2f7536fbce1a4ad01ca780905f8987cb49bdee068d0ce8032d6f` |
| `_TKCVH2026_C24.docx` | `a95ff24623b77a7d0e948ea895f619302a92fb9a1ce77ab1c5a8b7425bb19fd9` |
| `_TKCVH2026_C24.docx.sig` | `c95adc93f48654b115f1b79374f1b57dd60aeafe21854443beca10dc0d4f6eb2` |

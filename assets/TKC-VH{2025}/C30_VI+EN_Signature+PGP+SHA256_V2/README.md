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
| **Effective Date** | 09 August 2026 |
| **Signing Date** | 09 August 2026 |

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
| `CoverKDP.jpg` | `cf34a614e2f6deef8ed67c1f70f8278a1519e6aa0b3c814a62ff153f2217ce24` |
| `CoverKDP.jpg.sig` | `fdac5caef8c58d50d2255c4cd90fbeaec5f5f8317e0df1a900082a6719fb22c8` |
| `CoverKDP.psd` | `945ea9db1adfccad76727f1ebc2e1dd7de6f7908fb894088e9a174489233fd23` |
| `CoverKDP.psd.sig` | `4beaf6032a9080d8a1d0bb556a55c3e86966500606aa700f987880d79cd78989` |
| `Ngọc_Ấn_Kim_Tâm.pdf` | `8c97767fe5a4b170d28f23ac8cb92ead52f299f69e853741107ece2330df88ca` |
| `Ngọc_Ấn_Kim_Tâm.pdf.sig` | `e17bad7402b2a4b9185c36649cefa726872171de6042398a1b317ac666802e4b` |
| `Ngọc_Ấn_Kim_Tâm.pptx` | `7a75888edfac876c91e73114b79073dd85c5d01ee37e7c889f7a3c868061ba39` |
| `Ngọc_Ấn_Kim_Tâm.pptx.sig` | `80f5590dbb06013fc4f48b05dc142753271fd1c14a69e9340b310cc18e926604` |
| `SHA256_Fingerprints.txt` | `cc201596d8d65d33236063b9432e90e500e2081829a5d20d1da29879623a59ed` |
| `TKCVH2025-C30-EN.epub` | `722fbf38159570b2c698060ab731d45d3a0844c349e72fa0ac697e1d5d06f39f` |
| `TKCVH2025-C30-EN.epub.sig` | `1e0b2a739b3be4f395d9b25c618845dce6ff381b6d8ac3bcb6929bc3acf166ce` |
| `TKCVH2025-C30-EN.pdf` | `2e07e77b3c30a3991e5e7028aeca8032ec14b082c3f43a12380b3b9ab8723311` |
| `TKCVH2025-C30-EN.pdf.sig` | `0706bd2e82dcfddcb51375ccbccd61fad05f954a10cf40d6cadcbb3499db8899` |
| `TKCVH2025-C30-EN_KDP.pdf` | `2ec9feafa043ac7f5da78f500f1f4de1f43d82f354eccb5cce1329f531203c3e` |
| `TKCVH2025-C30-EN_KDP.pdf.sig` | `b3a99ae0e96f6849f133ed69b3f59a60004b7d727bcc7ce6f04279d1417c72a3` |
| `TKCVH2025-C30-VI_V2.epub` | `0bb5cc039544c3b29e561f463d97e43f5e062da35ba38c953a1e53412442ff9d` |
| `TKCVH2025-C30-VI_V2.epub.sig` | `4c44e5bd0aadf550c521810ff284c14b84379a2c13ec6222853b2ecbf21c07e4` |
| `TKCVH2025-C30-VI_V2.pdf` | `c848c7bc871c46d1c06bb998bab8001a18fffd06a9c5e77f472b7ed29c27d0ac` |
| `TKCVH2025-C30-VI_V2.pdf.sig` | `e0856b6719a9c03d61641ef3c09d3d2ebd456abd537d067bedd725ff021319b4` |
| `TKCVH2025-C30-cover-En.jpg` | `91b934155de18ccfdfac2de9f80d43fca27e4d512b0282b052655ae4f500d92c` |
| `TKCVH2025-C30-cover-En.jpg.sig` | `994082e4cc5107b5a522efb00d55dc3695da2acd667898c365f6b7a5706fabac` |
| `TKCVH2025-C30-cover-En.psd` | `7cb6f9092e84d5a660d47832e31f4f8808fb60747dbe26adf43f8dd747b813a2` |
| `TKCVH2025-C30-cover-En.psd.sig` | `9f7c9080973a93ac713f2f7c66538457fabdc46ad1fdae4768570a66d67f48b8` |
| `TKCVH2025-C30-cover-En_Ale.jpg` | `f745bb3ce1e5d296701b05384dba5f42be448f0af74f4cccd4d329ef15c09bc2` |
| `TKCVH2025-C30-cover-En_Ale.jpg.sig` | `03c6efc5f37398f351ac5c909e2549705d197cef0e8a87d9c6f5d6f6e89a3016` |
| `The_Eternal_Covenant.pdf` | `c869a43dbdb2b44ebeab4d1b26eb4cd053d3812ae16bdecaf0187755328b4025` |
| `The_Eternal_Covenant.pdf.sig` | `b0308bc3c00ef94beeb69fa0629d57de2bf0b99fe4624b5801d7fefeab886b36` |
| `The_Eternal_Covenant.pptx` | `a8fdc2d86aaf244d99c8fc5b3722abb2b703b6efc3aff76c6c7ee66cc08ce718` |
| `The_Eternal_Covenant.pptx.sig` | `3c2d0fabbcea27abb03030f79b0bd23a2f3ba4fe7899cb0eb49c11121d24610b` |
| `_ TKC_VH {C30, Aug2025} Jade Seal, Golden - Tran Khac Cuong.txt` | `bc5dbbeb241f266375e8f2e31b87849f503c7064dfb373dabf815ae46f043d32` |
| `_ TKC_VH {C30, Aug2025} Jade Seal, Golden - Tran Khac Cuong.txt.sig` | `9f2b430d8c2c8d062c49acd70777bfd26cd4b8afa1ae204cfebe18c8e547fd95` |
| `_ TKC_VH {C30, Aug2025} Ngoc An Kim Tam Th - Tran Khac Cuong.txt` | `0ceacc18c6babea33a4a6a267fca5ef3cd293f64fbb89202f129bd136327d457` |
| `_ TKC_VH {C30, Aug2025} Ngoc An Kim Tam Th - Tran Khac Cuong.txt.sig` | `be862efd1f930d31ccab87f6642162f62f372e1e2e921cf74bc678bfd7c967f5` |

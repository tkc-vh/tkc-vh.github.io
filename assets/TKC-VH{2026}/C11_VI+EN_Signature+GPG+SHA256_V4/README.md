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
| **Effective Date** | 16 September 2026 |
| **Signing Date** | 16 September 2026 |

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
| `C11-2026-EN.txt` | `25353d6e6623219466beb1a1b5ac91c7834a730d18d1c0f4b2d076d4ad37150c` |
| `C11-2026-EN.txt.sig` | `17895de2a9fc8d15ccbf7a89ad838f67f16929df48942cc76ee4c64ad77c1ba9` |
| `C11-2026-VI.txt` | `68b7130c57cc4e1472530ecce55dd59a8e7850bb10b651a1a99ca41c1d950360` |
| `C11-2026-VI.txt.sig` | `dd9c145309311359a16a8bf0061a6abe86b56dfdb9040ec7fbc69343ae5e0db5` |
| `CoverEn.jpg` | `3fcf2a71f52dea4b839f1460031def7afef5c85dcabcc237eab14802082e1266` |
| `CoverEn.jpg.sig` | `813ede163dff92a1e975b50f74240d2fcdee9a25c1a150b5f31583f96e60f4f2` |
| `CoverEn.psd` | `9eb4f9bcea1c59c69c6def01c5449d00e393279adbd5835ab7b1bf1aeed26ac6` |
| `CoverEn.psd.sig` | `d99d967f489a20ec21ad061a7e0f510cd2d9f5875fac8988d9a79c76e06b38e2` |
| `CoverEn2400.jpg` | `8fdfe3616c1ac7137d865fe114013501a782d8790f57d7bf1a529b2e6ed8e7ff` |
| `CoverEn2400.jpg.sig` | `871ab39f8600256d3d16f6c38d0eefaabbed570226961768cb7dc50233f36b0e` |
| `CoverVI.jpg` | `174151397b528a8e480f67166810064cd26e9d8f88c18b1eb95b655605edd23b` |
| `CoverVI.jpg.sig` | `2f9b09fa6db31a491df555dd3605175332ea014158fca8429c01d80f18dd9acd` |
| `CoverVI.psd` | `55f4567c0df40f6edb6b0f66251a747df5350397033812e49801b09db069c533` |
| `CoverVI.psd.sig` | `fe34ddd28b5539eedd618199cacc0ad4866d949914869499ef2b5b4fed770cc1` |
| `CoverVI2400.jpg` | `0d3a03518431ab0554f40c5f50676777a04ed4d76264e0d5b751c6146ae33f0c` |
| `CoverVI2400.jpg.sig` | `05227879a2d00877187952fed13c19b8d3eca97c2cd73baecfb9732da2848776` |
| `Quantum_Temple_Stele.pdf` | `95658be8b8d97831a4e35ac8722e7a2bb4658a8396d992d3f086e739c72fddc6` |
| `Quantum_Temple_Stele.pdf.sig` | `5b6ad6cf85f052c71599d731cc9deecc2a4c5765429a598c372a1ca06a337f5d` |
| `Quantum_Temple_Stele.pptx` | `1bbf8cd195465e3597d0f892e3e7b3a1b7da141400a079f338251300f4f03880` |
| `Quantum_Temple_Stele.pptx.sig` | `eacd04aefa9edd6a48d6407400368e064fe8544e7173b0a4989d7692cdd9247b` |
| `SHA256_Fingerprints.txt` | `5abf142375a9c1a627e3cf7502a63d183f634d5389d539c535cf18ff257cd726` |
| `TKCVH2026-C11-EN-V4-KDP.pdf` | `8ec8101d8d7aa45c2057c12cb4e79aacb4e85a25626afd3366a5868655a9bab4` |
| `TKCVH2026-C11-EN-V4-KDP.pdf.sig` | `c993e8873ff58cd40928978b306d4e42dc7e2d5a0f5e5e0dc6ce157d0fd8568b` |
| `TKCVH2026-C11-EN-V4.epub` | `871e591ad337acd4a24cdbe9e9e9419f9039ace41977ee78693468dd2767b1dc` |
| `TKCVH2026-C11-EN-V4.epub.sig` | `a7f02c0d057c1ea996806abce13cad79857123c09a4659c6419e7e2eac3d63fb` |
| `TKCVH2026-C11-EN-V4.pdf` | `2bc3a7998abaaf085fc80759c794b57cef327e4b7e166ea8eed83e58a22e027c` |
| `TKCVH2026-C11-EN-V4.pdf.sig` | `3da787eb70c07b86cce628646a1f0acb2b7f069df87ad06da82659f9d1c96c8c` |
| `TKCVH2026-C11-VI-V4.epub` | `46fd284554a94da2ac813441217e9b4f22840edbfd5d99d47078bdbd0cbf6496` |
| `TKCVH2026-C11-VI-V4.epub.sig` | `ac435b6a2ced178868df4cf925a420add49e918bc5d6efe05c82e9cc9aa62d50` |
| `TKCVH2026-C11-VI-V4.pdf` | `d303780285dade133f28e0f83f0e59894a815606a27fed4791efe68ef22ed530` |
| `TKCVH2026-C11-VI-V4.pdf.sig` | `0f0003edd5890b145f1c9a5ef6852ca56a62da55e20c498a5b55dff046409e7c` |
| `Thiên_Thư_Lượng_Tử_TKC-VH.pdf` | `79f17aa559a52461f7d0fa0d72019c43b17f16a4f359b108865c617409655f8e` |
| `Thiên_Thư_Lượng_Tử_TKC-VH.pdf.sig` | `d993646a49b5482868a14737a6ed7b15261ae2265855d20161a89a5783534efe` |
| `Thiên_Thư_Lượng_Tử_TKC-VH.pptx` | `1eee5bcae2ddcb9b15818b34dd215419af1ba35b137114968d33a113b1ba9f0a` |
| `Thiên_Thư_Lượng_Tử_TKC-VH.pptx.sig` | `eacc1b2b1f47f1832009acecf890fecf5e02adb39bcec30d23fa2a3bbf60c0bf` |
| `_ TKC-VH{C11, Mar2026} Planting the Phoeni - TRAN KHAC CUONG.txt` | `fb42fc96a4670b8b87054fbc663b08f91927409ef127364caeebc83b273caef4` |
| `_ TKC-VH{C11, Mar2026} Planting the Phoeni - TRAN KHAC CUONG.txt.sig` | `5ce83166cce03f5472fbf72f446477952be3ce0c365dc1f494582c4a39f8e595` |
| `_ TKC_VH{C11, Mar2026} Cam Co Phuong Hoang - TRAN KHAC CUONG.txt` | `fadc89d0ba7153f6455c634b093945642f76df1c88212b3b70116b2970588a0a` |
| `_ TKC_VH{C11, Mar2026} Cam Co Phuong Hoang - TRAN KHAC CUONG.txt.sig` | `f71ab33cf3d6875889e42c649bd434d5de7de143e3838dd835b297d31d9a5f0f` |
| `c11E - c11.docx` | `5c6c6800da05d2003a0e343f79c2fd2b1f75dc63a7e0eaaa36def677bb8d5509` |
| `c11E - c11.docx.sig` | `e5fb822b1f5912302a51173d895ecf85b4b4254f225b269d4b1841297eb21116` |

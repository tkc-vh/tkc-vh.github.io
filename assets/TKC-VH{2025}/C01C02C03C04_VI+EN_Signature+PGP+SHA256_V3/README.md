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
| **Effective Date** | 23 August 2026 |
| **Signing Date** | 23 August 2026 |

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
| `C1-C4_2025_VI.txt` | `613ea235db4f930a944dc1bdc043802cfaec6615aaff169b2157a7aefbce5ad7` |
| `C1-C4_2025_VI.txt.sig` | `dced53472dbcdc78ed38f796d5e328c01a3853e811e7c514f66ff9e9a1ce3d94` |
| `Cover_En.jpg` | `16781aecae9e9301353e03278a860b724e1455a929cd5feca29b5eba49424523` |
| `Cover_En.jpg.sig` | `8affa6505517c0c209c9b22da3b80250c311f0b3f2ca480f8f9fe3010b6363cb` |
| `Cover_En.psd` | `49704aa3e7999f93d56fc2b647d5cbe1ffd84243876d9f85d114b9f2908b7a51` |
| `Cover_En.psd.sig` | `328fbe9de5aff709f97458efffb71063e7e8f4a32c0211d60894462b4dfdb98a` |
| `Cover_En_2400.jpg` | `eb1d7c18a00f9665c542558cf726d3dfd7c42a71b7906b4cfa450bdb32119bc7` |
| `Cover_En_2400.jpg.sig` | `42af8815f021c75f11d888b5e67c6e12d526bd4058614655ae92b72943ac0eab` |
| `Cover_VN-2400.jpg` | `d548c2c2c4ecaac5776f56da5b77ba0389536c0a910929cff8daa74296f8786b` |
| `Cover_VN-2400.jpg.sig` | `6f0afeab0ee677e3f6f67a8def9f44efd342f2c2adf120c5b428b221b788e560` |
| `Cover_VN.jpg` | `341eda6115810621c1c647232111dfd967a6d2c0ac35a2d1162c63980975152a` |
| `Cover_VN.jpg.sig` | `f5a5570de6d43c86fad675ef613770ac661eb4bbf98bf619365ed29828a9842b` |
| `Cover_VN.psd` | `87f5866ce37cc6aa6259e295abd11f1a07961fd55ec48a192b636232d1f7ded6` |
| `Cover_VN.psd.sig` | `ded843ff336932ef357aae1ef6c72d8c9a5a3f31b4517597f6e0d153682b94c9` |
| `Eternal_Primordial_Union.pdf` | `f467a57e461a6db24e840ea954217af051b3ce06c336b5d48291428d2ec30a7f` |
| `Eternal_Primordial_Union.pdf.sig` | `46f820d97394afc517bd7ce753ca13055d0ba8a7c9dd6b01a64b7ac416b0c1ed` |
| `Eternal_Primordial_Union.pptx` | `bdf65c693e65f44240456228a51d366fe3de36e25c186368eb38091264ec9c03` |
| `Eternal_Primordial_Union.pptx.sig` | `ed513df06d9eb3e7352c85b83c87028e155f57ba2bf3824a91602f290badaa75` |
| `SHA256_Fingerprints.txt` | `cf2c22bb3301c63a60794ed45dcb700ca0ddbbe9fb77d834e2ea73346a12b824` |
| `TKCVH2025-C1-TONGQUAN0.pdf` | `d27f1322f32769e7179699cac3b3bf8037c1f69430976915e91cbf98bee109b6` |
| `TKCVH2025-C1-TONGQUAN0.pdf.sig` | `f87e6b2ac666da385149a988f20a73ba066f8cd886dfbc39cffa5f7af43b0cc8` |
| `TKCVH2025-C1-TONGQUAN1.pptx` | `9c01aa60a4595e91b264c3fbb62866103ccdce617c00716c08351060498d427f` |
| `TKCVH2025-C1-TONGQUAN1.pptx.sig` | `5257b42c747cac6dcfa057302730d42cd8f57143fb2205d282d74725298fb5f8` |
| `TKCVH2025-C1C2C3C4_VI_V2.epub` | `4faa959bc84b3094431316b5ab2dbe7e2d4f0ae0ba80fdd87326ce599e9e6268` |
| `TKCVH2025-C1C2C3C4_VI_V2.epub.sig` | `597cc06e72cfdb827d1a98457cf0ba8fab068987b485136a286997ef5f2cb5d7` |
| `TKCVH2025-C1C2C3C4_VI_V2.pdf` | `1dfad35c0f99353265cc5a53372433a6b3471a2615f295b442e2e9d94e758906` |
| `TKCVH2025-C1C2C3C4_VI_V2.pdf.sig` | `91ba03532a8826de60d2b7a2c77fdfa15760d8896685e413800fa8a9559aa590` |
| `TKCVH2025_C1-C4_EN.epub` | `bba51245131e8ca41a3c32fd153e56be73e502090ab9efe6a25459d37edc310d` |
| `TKCVH2025_C1-C4_EN.epub.sig` | `ccb9bffe3fd1d3911211e6cb3a677b8bfff7ed18c4159e89d14ff253d169edba` |
| `TKCVH2025_C1-C4_EN.pdf` | `f0b6216c6e31c0f48b70a0a916bb1a6c3c100280ce5aa7e27251cef36b891b16` |
| `TKCVH2025_C1-C4_EN.pdf.sig` | `d0d261ada016066fd2ef97762700741781e96fe9f1f6996df4f02753eeadda7b` |
| `TKCVH2025_C1-C4_EN_KDP.pdf` | `408019ddef2f20a7c4278574bd9386298959ed8ae879eaa724857e470365d9f4` |
| `TKCVH2025_C1-C4_EN_KDP.pdf.sig` | `67a89d8bc874fd9921c42124660e3d8d746f9098506075ec8884c3dc171d657d` |
| `The_Diamond_Marriage.pdf` | `2fd5b718b689ac3760297958df0474f75432296e993d0b2b30de05280db4db63` |
| `The_Diamond_Marriage.pdf.sig` | `91e74616ced37b9e37c52b9cb95f0a3072da95e06331d040683ab7d6f9946090` |
| `The_Diamond_Marriage.pptx` | `a6fa5b2a9c23e3ca73cf5f0b0d29c4ad791f22376a5d824cc49b1c2733ff5cbb` |
| `The_Diamond_Marriage.pptx.sig` | `0e8db764c4b4b8041daa063cc709acc74d81c73712422f91f6cb3c610f41a82a` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.docx` | `b65e41e1c1cdfcc6a80155700110144ef422bd1393d802ce28cc947edefc0cff` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.docx.sig` | `ad82774486d336e3d6ffb7a56ab6384b2d1359dbc8093d951a58e63e6f842005` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.txt` | `6675692d25536ec053e17c6bfbc6c639dcf074ea4c08624c394b15c00f31df99` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.txt.sig` | `ebe0705b1b94b31ad4724b99314667904c07d92d3a225437a2712c52a4909ea4` |

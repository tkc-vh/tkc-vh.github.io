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
| `C1-C4_2025_VI.txt.sig` | `01b799a4f0ddbfeb2ec47cff2b77471325482a730ef5f5bc1ac75ebfe7ba7d98` |
| `Cover_En.jpg` | `16781aecae9e9301353e03278a860b724e1455a929cd5feca29b5eba49424523` |
| `Cover_En.jpg.sig` | `c111751c6a4ecddb9d447d0dd2ad873456f4bd71d42f89e9c883c28e22fbfb77` |
| `Cover_En.psd` | `49704aa3e7999f93d56fc2b647d5cbe1ffd84243876d9f85d114b9f2908b7a51` |
| `Cover_En.psd.sig` | `cad658b82cf1c88790b944efbc82eb9d5327650ca82d363f2c9c8c6479a7285a` |
| `Cover_En_2400.jpg` | `eb1d7c18a00f9665c542558cf726d3dfd7c42a71b7906b4cfa450bdb32119bc7` |
| `Cover_En_2400.jpg.sig` | `12d0befabd18beb4c2603339110834f1da2b9e4d2569c7d626643a9df0e062f9` |
| `Cover_VN-2400.jpg` | `d548c2c2c4ecaac5776f56da5b77ba0389536c0a910929cff8daa74296f8786b` |
| `Cover_VN-2400.jpg.sig` | `8c7a766f48e3d3ec3649dd24e9456683ef9ba05e16a34ba6c155cc5d9d7d2528` |
| `Cover_VN.jpg` | `341eda6115810621c1c647232111dfd967a6d2c0ac35a2d1162c63980975152a` |
| `Cover_VN.jpg.sig` | `30b1d1036f2f3d8654b5775a675c7ede895fe54c2bc56bb580506376c39bf926` |
| `Cover_VN.psd` | `87f5866ce37cc6aa6259e295abd11f1a07961fd55ec48a192b636232d1f7ded6` |
| `Cover_VN.psd.sig` | `e566765d61f9355bd25d66e4ec8e5d0e4928af21f7977bf2d7c0e72c3011354c` |
| `Eternal_Primordial_Union.pdf` | `f467a57e461a6db24e840ea954217af051b3ce06c336b5d48291428d2ec30a7f` |
| `Eternal_Primordial_Union.pdf.sig` | `88f1be2e405422e81693988e0a6884617ff15177e186d9f8899c7e6c91fe0cdc` |
| `Eternal_Primordial_Union.pptx` | `bdf65c693e65f44240456228a51d366fe3de36e25c186368eb38091264ec9c03` |
| `Eternal_Primordial_Union.pptx.sig` | `9ae17a54fe4aeb0762f0eeb672cc83c6c68f58f13d28cfb9fdb18f01fe121215` |
| `SHA256_Fingerprints.txt` | `0c7eb8303beacb9bb8ab290c42a555609fdae686e1ef03d10a16003a2cba04c2` |
| `TKCVH2025-C1-TONGQUAN0.pdf` | `d27f1322f32769e7179699cac3b3bf8037c1f69430976915e91cbf98bee109b6` |
| `TKCVH2025-C1-TONGQUAN0.pdf.sig` | `9774ee3a9c3b61613e6bbe4966a6ed7be2374262ad1c2d7b8b91a7cb129a410b` |
| `TKCVH2025-C1-TONGQUAN1.pptx` | `9c01aa60a4595e91b264c3fbb62866103ccdce617c00716c08351060498d427f` |
| `TKCVH2025-C1-TONGQUAN1.pptx.sig` | `9c5101b3d8c0baf0190f2de09fd004c19cfe5b1c6744a7faf4167632f12af322` |
| `TKCVH2025-C1C2C3C4_VI_V2.epub` | `64b70bf2cf3379180f8d83048d0dffc237b832acbc2b6a1176e9469cd375fc6c` |
| `TKCVH2025-C1C2C3C4_VI_V2.epub.sig` | `f563912333fc9f4e2e4f7ff3413bf4f32465a336c1181fc2868ab0a96befaa9d` |
| `TKCVH2025-C1C2C3C4_VI_V2.pdf` | `bc79f702bb9a416ab188e45d87f8860dcb99d41ce2bfb21d3cd0880db0d7e559` |
| `TKCVH2025-C1C2C3C4_VI_V2.pdf.sig` | `e51d10f19f68e56fad2ba5ff456e71faa6f8d6eed24f220be424ffc5154bd5ee` |
| `TKCVH2025_C1-C4_EN.epub` | `1961fcb11e1a985fa416f002800ad0fd40598c152c5da2278c4f98e1a766ed18` |
| `TKCVH2025_C1-C4_EN.epub.sig` | `c2c6e3ffd478474aa9088155789811b248a53984e0c801393ede491e5bbba7a1` |
| `TKCVH2025_C1-C4_EN.pdf` | `ba37a0717ba96a78458a52b527510259a7beef04ea0d19541b099ccb4e00e8c3` |
| `TKCVH2025_C1-C4_EN.pdf.sig` | `98a530519b079f7226fdad339a671727ced23ec561c242aab82172a74897c554` |
| `TKCVH2025_C1-C4_EN_KDP.pdf` | `e3cb4beba97323df3e5dc36be60b3663e9ed57b32cc9035f3bc8d270e86bdeef` |
| `TKCVH2025_C1-C4_EN_KDP.pdf.sig` | `c5e90352d64629750d73eebbeb52744011b7be65094f3c57e5faa08a68267879` |
| `The_Diamond_Marriage.pdf` | `2fd5b718b689ac3760297958df0474f75432296e993d0b2b30de05280db4db63` |
| `The_Diamond_Marriage.pdf.sig` | `c74fc8a635290dee9cbc99daa4274171892b26ecf3925b55572e314a2dd2d774` |
| `The_Diamond_Marriage.pptx` | `a6fa5b2a9c23e3ca73cf5f0b0d29c4ad791f22376a5d824cc49b1c2733ff5cbb` |
| `The_Diamond_Marriage.pptx.sig` | `89d17c4632d630bcd8cb865fb1da84342981f9cb1c5fd9bc12d31e810fce3e6b` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.docx` | `b65e41e1c1cdfcc6a80155700110144ef422bd1393d802ce28cc947edefc0cff` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.docx.sig` | `e8c87cd504b3c4b4f0aa2a2611a17b96b05e380e8236e2140000743a3752c5a4` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.txt` | `37d4338504e8abfe15324c45d0a05bde764ef185dbcc98b70183e2335f1d0915` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.txt.sig` | `45625f2b16e6fedbfc64541d0c709a25190961f9a512c7fd93229c8e64dd95f8` |

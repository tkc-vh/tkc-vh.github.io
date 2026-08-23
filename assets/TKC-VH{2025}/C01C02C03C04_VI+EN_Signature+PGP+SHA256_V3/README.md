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
| `C1-C4_2025_VI.txt.sig` | `46da5786386c525694be4a50e6a71f5bcd502828d97422e20ae2c8deeb5b68ae` |
| `Cover_En.jpg` | `16781aecae9e9301353e03278a860b724e1455a929cd5feca29b5eba49424523` |
| `Cover_En.jpg.sig` | `5b773777a828851e734c1bdb7a23145e885e68debc95afb90b35bf47cbbdf866` |
| `Cover_En.psd` | `49704aa3e7999f93d56fc2b647d5cbe1ffd84243876d9f85d114b9f2908b7a51` |
| `Cover_En.psd.sig` | `21bf08f94bff6662f88176e6e64661f7ea7f03ac34f1bd67814c95a9755f9343` |
| `Cover_En_2400.jpg` | `eb1d7c18a00f9665c542558cf726d3dfd7c42a71b7906b4cfa450bdb32119bc7` |
| `Cover_En_2400.jpg.sig` | `01366f890047b2a299b7373b3c85dbf16fa4a097df3cde7f5ed710386344d0ad` |
| `Cover_VN-2400.jpg` | `d548c2c2c4ecaac5776f56da5b77ba0389536c0a910929cff8daa74296f8786b` |
| `Cover_VN-2400.jpg.sig` | `a87046f8a5fece03da7950fbaf24b0b50b190580a307f316f0d62b2ac14ac614` |
| `Cover_VN.jpg` | `341eda6115810621c1c647232111dfd967a6d2c0ac35a2d1162c63980975152a` |
| `Cover_VN.jpg.sig` | `f4d6df4aa65d4e480689efeafe04297a220ce8bb2b7ac6485f8ae4c90c0c423c` |
| `Cover_VN.psd` | `87f5866ce37cc6aa6259e295abd11f1a07961fd55ec48a192b636232d1f7ded6` |
| `Cover_VN.psd.sig` | `5953150327420412e6422fe2f58a8a8f432869750af19a3c71b674b25127cbac` |
| `Eternal_Primordial_Union.pdf` | `f467a57e461a6db24e840ea954217af051b3ce06c336b5d48291428d2ec30a7f` |
| `Eternal_Primordial_Union.pdf.sig` | `b8f57b914b9bc8ef7ce87d4346f69b61d0f2269ff43c7f94ad20e7802a79fe6e` |
| `Eternal_Primordial_Union.pptx` | `bdf65c693e65f44240456228a51d366fe3de36e25c186368eb38091264ec9c03` |
| `Eternal_Primordial_Union.pptx.sig` | `bee7ca51abbf62972afc6d8067ee484ef3c4f511a3e97a9ec5304e4844efaddf` |
| `SHA256_Fingerprints.txt` | `14a110803669e7a51bbe77d9968a55b2862b996eb52ae0e3bc3c1ba5bacd3c27` |
| `TKCVH2025-C1-TONGQUAN0.pdf` | `d27f1322f32769e7179699cac3b3bf8037c1f69430976915e91cbf98bee109b6` |
| `TKCVH2025-C1-TONGQUAN0.pdf.sig` | `eab1946f9edf14982c4e080caafd3a5427433b6fd2f53e64cad8e9bffa1fab37` |
| `TKCVH2025-C1-TONGQUAN1.pptx` | `9c01aa60a4595e91b264c3fbb62866103ccdce617c00716c08351060498d427f` |
| `TKCVH2025-C1-TONGQUAN1.pptx.sig` | `9b7d3b1a4ade71d2db571c607ca1e71d5ddc6d42f25b2ada6d26b4880b2fb9e3` |
| `TKCVH2025-C1C2C3C4_VI_V2 copy.epub` | `72b491e2e512e53a0348e054185150b8e0720eaad38360754f9a0c048f8d513d` |
| `TKCVH2025-C1C2C3C4_VI_V2 copy.epub.sig` | `7cb2b524f95504af7e8b08eaf2386aebea03a372d25283196e24e20a0143d2c7` |
| `TKCVH2025-C1C2C3C4_VI_V2.epub` | `64b70bf2cf3379180f8d83048d0dffc237b832acbc2b6a1176e9469cd375fc6c` |
| `TKCVH2025-C1C2C3C4_VI_V2.epub.sig` | `b42a847bc9a09c4c31fa1df67c1d4277adf8885dfe984d5fc2c646a6e025a8e2` |
| `TKCVH2025-C1C2C3C4_VI_V2.pdf` | `bc79f702bb9a416ab188e45d87f8860dcb99d41ce2bfb21d3cd0880db0d7e559` |
| `TKCVH2025-C1C2C3C4_VI_V2.pdf.sig` | `453e4b41a4271c241dc238767af6e6dff98f7c462f4e16ad8dc8749f2584cef3` |
| `TKCVH2025_C1-C4_EN.epub` | `9c1cb3d64f1bf9e7793b8700e4881468261f963c6a98bfc776e23408ecd012ff` |
| `TKCVH2025_C1-C4_EN.epub.sig` | `1f41f06d0bc9ffea393ad07a6dd89eeba9e47aefbdbc5a4bdbac2309e29d6b5f` |
| `TKCVH2025_C1-C4_EN.pdf` | `ba37a0717ba96a78458a52b527510259a7beef04ea0d19541b099ccb4e00e8c3` |
| `TKCVH2025_C1-C4_EN.pdf.sig` | `f0972b939d1b951703d0894666ef7759287518fb9ae2bb102980cc2d3cc59c59` |
| `TKCVH2025_C1-C4_EN_KDP.pdf` | `e3cb4beba97323df3e5dc36be60b3663e9ed57b32cc9035f3bc8d270e86bdeef` |
| `TKCVH2025_C1-C4_EN_KDP.pdf.sig` | `c503537bbee5c523d9bc0d0759e8009712a04b56abe7c959c82a25d56c5cdf84` |
| `The_Diamond_Marriage.pdf` | `2fd5b718b689ac3760297958df0474f75432296e993d0b2b30de05280db4db63` |
| `The_Diamond_Marriage.pdf.sig` | `b76f0d3b6bb444c23bcfffea23ddb0ae77cbd158dd9342aa7150524f0f25341f` |
| `The_Diamond_Marriage.pptx` | `a6fa5b2a9c23e3ca73cf5f0b0d29c4ad791f22376a5d824cc49b1c2733ff5cbb` |
| `The_Diamond_Marriage.pptx.sig` | `197535e3c160c0f09440bc2ac468949451e81ae55fe5689fd5dc33ce37c5ee58` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.docx` | `b65e41e1c1cdfcc6a80155700110144ef422bd1393d802ce28cc947edefc0cff` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.docx.sig` | `5b0714f7a67b4e6386bfaa896ad5d08e306372c0db3a9d152a310f1ef3090fd9` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.txt` | `6675692d25536ec053e17c6bfbc6c639dcf074ea4c08624c394b15c00f31df99` |
| `_ TKC_VH {C01-C4, Jan2025} Tinh Yeu Dinh M - Tran Khac Cuong.txt.sig` | `8b62ef1191f3763e631259c4e222ba4ee3923fe8e8722e5c86afe9141c855cd7` |

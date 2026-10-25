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
| **Effective Date** | 16 August 2026 |
| **Signing Date** | 16 August 2026 |

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
| `Giao_Ước_Song_Tâm.pdf` | `7368dd74401ef27bfcf6f437cc48697eb696d9ea91b191bbf51893432512d857` |
| `Giao_Ước_Song_Tâm.pdf.sig` | `167fc8664481cacaa9a6badbc022b5e184db5043f216c4511e744eaaf8a3b955` |
| `Giao_Ước_Song_Tâm.pptx` | `ad3e989b1782b7ddde5374841b2ed8e5e3b2137fcb39f4ca797eb1abadccfadc` |
| `Giao_Ước_Song_Tâm.pptx.sig` | `e1ef0e403725fbf59ab0c60180fe905b24e2a0a0fbe0ddb09727cc6764424ab3` |
| `SHA256_Fingerprints.txt` | `7bc30dcf0ec2c73a29ba92c6fe0a84fd06acf0668de16721e018f21d02085970` |
| `Solar_Lotus_Golden_Dragon.pdf` | `b77aa38556f7e3d921480e299dc4722f62bb7a083a627934fae97433f5faa631` |
| `Solar_Lotus_Golden_Dragon.pdf.sig` | `0055db3a87bfc311195dc9277c2f4cd151f39704ff7e9ad3071e9c8b656b0145` |
| `Solar_Lotus_Golden_Dragon.pptx` | `565f5901882691a68364a9296064dc7fabbf4b32fa4be1df92ebbcb0a9e07d1c` |
| `Solar_Lotus_Golden_Dragon.pptx.sig` | `ac364fc67e85a9cd2a1c161b01c19dfa7330d2899c5db20320b39d6deef0aa98` |
| `TKCVH2025-C23-COVER-EN copy.psd` | `c773d83db1b92f935670b190c94badf23c68ada2972bb58da845ac283f61d0c2` |
| `TKCVH2025-C23-COVER-EN copy.psd.sig` | `addf9faa612947bfdd24d4a459b1fa3d925d2574e810f4b32204fa2305fa8a11` |
| `TKCVH2025-C23-COVER-EN.jpg` | `431371204f5d6669c8583e78aec3d3c52a283d8f750efb58a5c21fee2b5e4020` |
| `TKCVH2025-C23-COVER-EN.jpg.sig` | `a9dbfaec3c277456c07d927df0aa215c76a7acaa03f51cda817417c647ef662a` |
| `TKCVH2025-C23-COVER-EN.psd` | `c773d83db1b92f935670b190c94badf23c68ada2972bb58da845ac283f61d0c2` |
| `TKCVH2025-C23-COVER-EN.psd.sig` | `c1b31a3f8c79e1b650b3030db08975db6877fa728c06f1172d899a31d8db9488` |
| `TKCVH2025-C23-COVER-EN.tiff` | `9ac97187910085e63ddcb3086c6ebb42d538b5bbd37d85ff16ac64542c2f2a6d` |
| `TKCVH2025-C23-COVER-EN.tiff.sig` | `9fd60a5033d118f0cac52b56b213d4b8b8caaf7e6989f9f3d2cc6ff676987f9e` |
| `TKCVH2025-C23-COVER-EN_Aple.jpg` | `5784334cc41b48f2737e12ad4b218d2c7d619186eb5e5866068c29c9bac652da` |
| `TKCVH2025-C23-COVER-EN_Aple.jpg.sig` | `2e71aa08bd258e2f6163c8bf42d3e5148e158c7ff527d3d7b81250218f4b1cbd` |
| `TKCVH2025-C23-COVER-EN_KDP.jpg` | `5784334cc41b48f2737e12ad4b218d2c7d619186eb5e5866068c29c9bac652da` |
| `TKCVH2025-C23-COVER-EN_KDP.jpg.sig` | `2e71aa08bd258e2f6163c8bf42d3e5148e158c7ff527d3d7b81250218f4b1cbd` |
| `TKCVH2025-C23-COVER-VI.jpg` | `de8374bf7ba0a7b496d1bd2727890695ee5580f41e7b0f0c9e64346131fc900f` |
| `TKCVH2025-C23-COVER-VI.jpg.sig` | `b15274f38ed570a0df50d775cec675593d06d3a1dae7e88255a3e93ed061d201` |
| `TKCVH2025-C23-COVER-VI.psd` | `a20de735adac29c267ea3cc7a5747080ddede9459e1298d651147e44420e4b45` |
| `TKCVH2025-C23-COVER-VI.psd.sig` | `f4a49631cd6091b71275444b9c6d6a851eed81835f5ee5f8ac4b52e836424291` |
| `TKCVH2025-C23-COVER-VI_Aple.jpg` | `a5979161941b5d84b00bdfeabe764732c5ac00f5b4da8f82aa8ce28f929155de` |
| `TKCVH2025-C23-COVER-VI_Aple.jpg.sig` | `6fad27bf8d4189cf8cb4e5b3744c5c667fb10f4543307549ce0632c2b9b6aeb6` |
| `TKCVH2025-C23-EN.docx` | `317a00679424d587c3b764150b523e2bbeeaf81b8a6ebc77cf65e65e7770b103` |
| `TKCVH2025-C23-EN.docx.sig` | `d44e7f953e966d4337bea2c95e3009e0b2422fef5619597e244199081a6f35db` |
| `TKCVH2025-C23-EN.epub` | `fd9c93d8776755f121587996ebe3a52a34783339f896bec17f3d621fc6ffe85d` |
| `TKCVH2025-C23-EN.epub.sig` | `d7d4613da429f2f0c68fb8bc3a98c00a410612708bbc4afbedcaf2e249d8e200` |
| `TKCVH2025-C23-EN.pdf` | `80421c4394d823b11d6268bdf4139ddc79bceb120b735cb47ea39c6525981ed5` |
| `TKCVH2025-C23-EN.pdf.sig` | `f50d6ec19f604451948dfc96f59539c3165385f25f97df5b198419cc61c486c0` |
| `TKCVH2025-C23-EN_KDP.pdf` | `70179500ab51d98f84d9c0c7eb81c74ce7594e95bf9531022d8ef9a57d0e825b` |
| `TKCVH2025-C23-EN_KDP.pdf.sig` | `35494690cec7b3f18cd19a0c89c024934e0cdf1ee2aea70629608265bf30fab7` |
| `TKCVH2025-C23-Vi_V2.epub` | `9d55a6618dc1006ccdf194ef2a8986bfad9d922ae56e73ba398165464a2216b1` |
| `TKCVH2025-C23-Vi_V2.epub.sig` | `8b144e20ec7589b4cd753c787920b46fdb2ce1c1ec32768179e25da7d694b5dc` |
| `TKCVH2025-C23-Vi_V2.pdf` | `bf9e3bb1f733a371c70f2bceac339b52489009ada71c7aa4dd3f16567436bb67` |
| `TKCVH2025-C23-Vi_V2.pdf.sig` | `6c93cb5bbf1b1d8e8d8f839555d7fa8bd8af30e479f94bd074b38b7d4de57048` |
| `_ TKC-VH {C23, Jun2025} Solar Lotus Golden - Tran Khac Cuong.txt` | `2eb807320a52721e691c9ed9d75d71d6ff1b4c2282a555238dc0a220f5deecab` |
| `_ TKC-VH {C23, Jun2025} Solar Lotus Golden - Tran Khac Cuong.txt.sig` | `7ef45377bf1a87d81428100ba194eb34fd956cef73ab347a42eff70226fd4186` |
| `_ TKC_VH {C23, Jun2025} Thai Duong Lien Ho - Tran Khac Cuong.txt` | `3af520abb2a7d1d5fe7870cb7468cef0f8eef0c36b60868e786296ec70cf317b` |
| `_ TKC_VH {C23, Jun2025} Thai Duong Lien Ho - Tran Khac Cuong.txt.sig` | `986e8a2164096e5f528b6ae850f59c91c8ecf925303b2016c1f00eddb085a9ed` |

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
| **Effective Date** | 12 August 2026 |
| **Signing Date** | 12 August 2026 |

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
| `Eternal_Diamond_Union.pdf` | `cacbab2c3c595d199a62f79a4ce6d03ae538d08c66e4e191c9e0b0cf3e0dc27f` |
| `Eternal_Diamond_Union.pdf.sig` | `5be1fcf54e0c7fe5fec23d96401dbb46a879b866c4734e858c3c124d7a519f29` |
| `Eternal_Diamond_Union.pptx` | `4d4bb985a5ed0585f990a031f9d72a7135f6417e361d99d23ad2497500eac8ab` |
| `Eternal_Diamond_Union.pptx.sig` | `ec7d60684d0067af47ab0fe7b7af4e477452c11ea3b6e056d61bf150ca6ccf0a` |
| `SHA256_Fingerprints.txt` | `971f940f4756980edd16e213c099f322ed38691452e0c282d0674092b0c06b47` |
| `Stellar_Heart_Revelation.pdf` | `22ae78bd89466e238ab089dcef4b4961df09b378447c6fff3353d8d9d67cac33` |
| `Stellar_Heart_Revelation.pdf.sig` | `7dc153be9d64f9dee3863c1db415b76ea1a1f9610443623027aea5f5dad2fdc1` |
| `Stellar_Heart_Revelation.pptx` | `371e91c18ad7f01e7ab75f04b19d866fd4b7e45845aa9a796c1d8ed27f419b94` |
| `Stellar_Heart_Revelation.pptx.sig` | `cb08c336c271254d0e0c07b113e66d32bd80484bcaafe02c34912d1c985a1deb` |
| `TKCVH2025-C27-Corver_EN-APLE.jpg` | `aa873827221e7e2ddfc5e66de03cf546da86a10474dd49a2817d4e18da9270bd` |
| `TKCVH2025-C27-Corver_EN-APLE.jpg.sig` | `066a22983bd85beea932f9f777d59bf398d8d41963796b2a3cab11454a75ed16` |
| `TKCVH2025-C27-Corver_EN.jpg` | `4326ed9fb42cf4e97f3968d3ac7c27e25a90cd0a2cbf60bd19f9a01bb18769ab` |
| `TKCVH2025-C27-Corver_EN.jpg.sig` | `71847bb781eaa215b1f29d9e9fa8fa76f36612247ab5ddb25a09314ac167c5a7` |
| `TKCVH2025-C27-Corver_EN.psd` | `db04bd2adc26490e3a7e7b79bca78979bd55040385d34883736a91f6bc622d79` |
| `TKCVH2025-C27-Corver_EN.psd.sig` | `468cd6313e5d8bcdae10e602b73dd62e1fd37fd85ae63c5749930fc1452809b0` |
| `TKCVH2025-C27-Corver_vi.jpg` | `45c32d2c17946bc36dc99dc7f13ac8a0b63803f986ccf5b96065d9be16d90982` |
| `TKCVH2025-C27-Corver_vi.jpg.sig` | `6c7991a5d81f5633eb47a99659d8ac9a1be47a99326efa75117abd59a4989ba8` |
| `TKCVH2025-C27-Corver_vi.psd` | `bc57cfc5c6af76461483951552bec84743e38357869b7bb053c11046e4554ad9` |
| `TKCVH2025-C27-Corver_vi.psd.sig` | `fe5a42762036b2c7b42b8c7b8a1efb46029295dd5f4501e606cc28368f99a44d` |
| `TKCVH2025-C27-Corver_vi_Aple.jpg` | `215bfe6155d85e3709eb04c699224a690474145adf32a1b141dfbda7df1845b6` |
| `TKCVH2025-C27-Corver_vi_Aple.jpg.sig` | `1bc72a37adae8bf96a03b2fa472f7a0ecd756b1664f892f46c916a7a8a0444e7` |
| `TKCVH2025-C27-EN.epub` | `e2cab04138889a94df1c73bf1e98b9a89a6598ec845bdc8b11398807c9bd7aaf` |
| `TKCVH2025-C27-EN.epub.sig` | `01fcf332adad3329348c26b7c7c4a081d5832d1b16d9a6231bee234c7455e0a3` |
| `TKCVH2025-C27-EN.pdf` | `5fa73773eb21dd91c10ed5fb84a2ad79b4991c6b1d99262703e3537820f7f1c7` |
| `TKCVH2025-C27-EN.pdf.sig` | `1ffd9b780b3c0ce2649b0fb72674aab2a30b1be03b9e71f2305df7fbec5bab14` |
| `TKCVH2025-C27-EN_KDP.pdf` | `09f2753ce3535420800d93e1f0c03cade4c9cd73e07f9d79b76c94f22a25bd4d` |
| `TKCVH2025-C27-EN_KDP.pdf.sig` | `91b9eeb1c86466ddcd90759d53ca39f770decdd640aeea38f3ed84f38eb8047a` |
| `TKCVH2025-C27-VI_V2.epub` | `ceb6eef7cca59031496866212f7e070d807f537e538970c870e8c70939f91114` |
| `TKCVH2025-C27-VI_V2.epub.sig` | `46c9877095c28c3c47ba01684dd015b6dd11317e0a2b4159259c33a47c89f5ef` |
| `TKCVH2025-C27-VI_V2.pdf` | `0486978bec69dfda013d3c4f287b4c1f2813aa934a98c26613fde25b532d3fed` |
| `TKCVH2025-C27-VI_V2.pdf.sig` | `baf6fbc88c9131f3c541c44139e7eab5451eef7f259b2077c8c469acdb352b85` |
| `_ TKC_VH {C27, July 2025} Dieu Tam & Six C - Tran Khac Cuong.txt` | `012b63b961e92653e0599e1b401eea2e2f932b6bd67f76f07c46f0d3c311e904` |
| `_ TKC_VH {C27, July 2025} Dieu Tam & Six C - Tran Khac Cuong.txt.sig` | `491be07721bbdd4887f2cf5235c813e6f295f63cb98221bd6256426ef8274ab9` |
| `_ TKC_VH {C27, July2025} Dieu Tam & Sau Th - Tran Khac Cuong.txt` | `dfb85cccef7767fe67ae24572e442bd1956ea770893a1f5f1da3220db77918a7` |
| `_ TKC_VH {C27, July2025} Dieu Tam & Sau Th - Tran Khac Cuong.txt.sig` | `6afba0e0583066618838bc55c97a29eaf94ab16db9740f8e63506800f45a135b` |

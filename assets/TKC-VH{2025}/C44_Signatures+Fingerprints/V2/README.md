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
| **Effective Date** | 31 July 2026 |
| **Signing Date** | 31 July 2026 |

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
| `Cosmic_Heart_Alchemy.pdf` | `d21e0aa36dcc7fc51eda378e27c2704508a0e0bb2cb6d05a980139e64de5c1ff` |
| `Cosmic_Heart_Alchemy.pdf.sig` | `b51965acd4c74c993509177024252514d70a2d73abe1719a0c180a082556f176` |
| `Cosmic_Heart_Alchemy.pptx` | `9d07c87aed23641f875b5d2f4ed28e971c9716f7f169bd0882d23fa62f11191a` |
| `Cosmic_Heart_Alchemy.pptx.sig` | `80c249a0c57aec8fa661b16c4ced84d98238b13e9e79cdf6c397762e5984ebcf` |
| `SHA256_Fingerprints.txt` | `b03a30b590a9806b430008ef1ae6cc35f878ad977887ea1a8c8dc11a39cc9bda` |
| `Song_Tâm_Kim_Cương.pdf` | `178f9474ea2cf069c3492ee63fb42410f9c19b40fc6c278f59c7f28d26a4cb76` |
| `Song_Tâm_Kim_Cương.pdf.sig` | `69ad55a44cda311aac8595b139eadf295068deb305f29c1fff169ed73d417714` |
| `Song_Tâm_Kim_Cương.pptx` | `d33607e6bd51df1ccb5dd9fd84609fadd479fe9b3106d9ec06dc31ce7d5f89d3` |
| `Song_Tâm_Kim_Cương.pptx.sig` | `11e30d46e062e4fcf363081d9a4591948914d7b9252525234c6ce93b00f546c8` |
| `TKCVH2025-C44-Corver_EN.jpg` | `9c545fb504921a849f7e8f6c6c2e1c054de21826fcc2f5a9e9210f971384c20a` |
| `TKCVH2025-C44-Corver_EN.jpg.sig` | `1aed971742701593dddf24d17682fbf57d40370be390a6246c02927c91ed25c7` |
| `TKCVH2025-C44-Corver_EN.psd` | `40fcfc89d7a20498d67d881badcd3202b85b925650f6367ec044da898576ab46` |
| `TKCVH2025-C44-Corver_EN.psd.sig` | `b77e14a4f56edd42d784440881ba5bfed5a6aaba171ca0eae6fc119875f75164` |
| `TKCVH2025-C44-Corver_EN_Aple.jpg` | `b75f56ac2f90790612bc0a3d40104ce0287878e1a17fd61b0fddbabc446fd29d` |
| `TKCVH2025-C44-Corver_EN_Aple.jpg.sig` | `c1b12968cf9fbf117c3ead527997eac7753801cb68635def7305b794b93a0723` |
| `TKCVH2025-C44-EN.epub` | `8a72f953f39b53839ad22b536a517978d4201268f121a7f34127a76f1f8dd74b` |
| `TKCVH2025-C44-EN.epub.sig` | `91a3f131b105a1fc7ec7a5265fdf564d5092f7a3ae60f9def50490083536c139` |
| `TKCVH2025-C44-EN.pdf` | `1028c7edf92168700337026ee808392af9f2931f6fdd91ceced694bba5c7687f` |
| `TKCVH2025-C44-EN.pdf.sig` | `f24b173c08b0582da73206971aa291995371510152b15284316c116294949ab6` |
| `TKCVH2025-C44-EN_KDP.pdf` | `35c9ce7509ed0eee58a06f56ce73762e1391e848baa171f3aebaaec1602ddc54` |
| `TKCVH2025-C44-EN_KDP.pdf.sig` | `576b17ae7b67bd74a701270465b97db49ee5c243d7b635cdc970fdb378381393` |
| `TKCVH2025-C44-VI_V2.epub` | `4e77635bfb688370b43670d449966a37d90de3ec00926339e04e3d6bf96d5af3` |
| `TKCVH2025-C44-VI_V2.epub.sig` | `60b5aa33817b62d23a34638b45bd29511ff8f451d8e15b8b1f388ae1b7227a71` |
| `TKCVH2025-C44-VI_V2.pdf` | `758fe1d9ca1f29d99e5ac4cb836517f856264e40455c7876c2a54daba7af2481` |
| `TKCVH2025-C44-VI_V2.pdf.sig` | `847fd601b56c3015c6628b4de2557185fff9738c6b430702fec8ddee77146ed7` |
| `_ TKC_VH {C44, Sep2025} Chiec Long Kim Cuo - TRAN KHAC CUONG.txt` | `0fb5a7537219e06f9b1c3fcdeacadb4fd1372a1de21356ee895ae3a60f6321fe` |
| `_ TKC_VH {C44, Sep2025} Chiec Long Kim Cuo - TRAN KHAC CUONG.txt.sig` | `3c0c104f021f93fdd8ec27bfe7de35123f8666b515db222bbb70bfc6221b980a` |
| `_ TKC_VH {C44, Sep2025} The Diamond Paraso - Tran Khac Cuong.txt` | `b2d45a494b154387b569131a1c85274348c71455bc23ed2c565007a2af6f4da2` |
| `_ TKC_VH {C44, Sep2025} The Diamond Paraso - Tran Khac Cuong.txt.sig` | `02b5fca7bf85d9871e5718b8b08a0349bd0b50cf6db7f91221b74f771e9c29fe` |

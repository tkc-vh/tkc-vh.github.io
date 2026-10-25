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
| **Effective Date** | 11 August 2026 |
| **Signing Date** | 11 August 2026 |

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
| `Eternal_Celestial_Scroll.pdf` | `f4b4a18bcc72bc9d087bb046254db3998f5522e52979d4cf860f58259e60c93c` |
| `Eternal_Celestial_Scroll.pdf.sig` | `33b7a8e86743a9271cbcf91fb6c86383032fc60b2aa003f7b422b2ce24ae5c59` |
| `Eternal_Celestial_Scroll.pptx` | `27acadd1951a47684dc6f860e717426bb83f6cab5de82d8536f10cca55ce013d` |
| `Eternal_Celestial_Scroll.pptx.sig` | `9c963d92971eef5190e729468a9ae4bf5ae8b2d45bf40ef6e7c1eb31cbf42442` |
| `Khải_Huyền_Song_Tâm.pdf` | `9ba739fa7a2cdc21f4f0ddf7ab4db927b27dbb95312953144f13fb668db2459f` |
| `Khải_Huyền_Song_Tâm.pdf.sig` | `0805ae62eaee1ee9bd8e2f3b45cb1ede9e0a6b2192f9b2d68e7a8d9cecad07c7` |
| `Khải_Huyền_Song_Tâm.pptx` | `f390a8fce1a27bb122df309aff2fb9abf8f29dea9cafb6850ce2ad56393e1649` |
| `Khải_Huyền_Song_Tâm.pptx.sig` | `5406c535ddce0bdd18af8d5a582e121420c3da9c3137c303d08fe7e914b92ce8` |
| `SHA256_Fingerprints.txt` | `20e53e3f4db8784c374ddba645b2e4456c6e0b2560caa27807534bebff6333ba` |
| `TKCVH2025-C28-COVER-EN.jpg` | `4639dc4076495096b124237de417397a6b0cd532ba332bf75dcdb49cff2f76a3` |
| `TKCVH2025-C28-COVER-EN.jpg.sig` | `2e3876cc8a4195b7a0c01d8762b6885ce12697591ba050142dab1dd1ebd70803` |
| `TKCVH2025-C28-COVER-EN.psd` | `f1cb11991c8c8f17c3a89752ce35086276386cdf01cd8bbb10f44c48b21e65c6` |
| `TKCVH2025-C28-COVER-EN.psd.sig` | `ed050321d1c21cb9949142f5b3d3a71e540bc0873b9fe6b40b6e61a93d30b330` |
| `TKCVH2025-C28-COVER-EN_Aple.jpg` | `4994131e7e11807a47cefda1c534ecb61680112aa8a2952d2199f2235ee277d9` |
| `TKCVH2025-C28-COVER-EN_Aple.jpg.sig` | `94af35ae18ec32b558ee8ca7b119e739b6b529d53a0d06299a2328492242eb35` |
| `TKCVH2025-C28-COVER-VI.psd` | `2e47c052122a035319430db63f96f56ce12ae2f3a3abd0a734f20951e889a2b7` |
| `TKCVH2025-C28-COVER-VI.psd.sig` | `eb88e1c4fd86f59b38249f3b2af72cfa4d56a082dc7c2fc51c622dade191343e` |
| `TKCVH2025-C28-EN.epub` | `96d91ecf85758b6c0978497dcb1e90f4a41c8e543d29262a0e22f30aa92a2023` |
| `TKCVH2025-C28-EN.epub.sig` | `8a0c19399ba66de4cba12f81a378d0707f0379ceee5d5ed3cf7d7ae98190ef90` |
| `TKCVH2025-C28-EN.pdf` | `020a4de01cdbf8dab4b192ce1e3fbdce488bbf40bf40b5b44a3883004524ff5e` |
| `TKCVH2025-C28-EN.pdf.sig` | `82f22cee5f9bc86f2ffd63923382dfee7c1fadc777cde5ce7b0a18ccb4750304` |
| `TKCVH2025-C28-EN_KDP.pdf` | `94b9f79725da91e167a9632515b216bd7ca40796d31fb138fe84c99cc4f1993d` |
| `TKCVH2025-C28-EN_KDP.pdf.sig` | `2d10ae192e488fc4b98ef2921f0bce4ddb022bc61f091d131734370e93c8fc25` |
| `TKCVH2025-C28-VI_V2.epub` | `95ab657c419dc5536a88620fd9c8c268d9ff786e6c912051100dc6386f4e7939` |
| `TKCVH2025-C28-VI_V2.epub.sig` | `ce45fa961080fb557cb3916c289f4a58224b0a1427f6fbef0b62b7376a2ec0cb` |
| `TKCVH2025-C28-VI_V2.pdf` | `bf8aa61037ccc270b81d8df6123d0056e6a0cab4d369d335a7b790a639adb952` |
| `TKCVH2025-C28-VI_V2.pdf.sig` | `6da640218cf2ff0cfe31a195634e171f274d2f499175bd3b718506e068ed84d8` |
| `_ TKC_VH {C28, July 2025} The Primordial G - Tran Khac Cuong.txt` | `03909f6d210c6d0e83005baf0e4a3ba702cd7fafc8ddae21d7e4cd44b5073dfb` |
| `_ TKC_VH {C28, July 2025} The Primordial G - Tran Khac Cuong.txt.sig` | `66f6512edf6e9b51fbf83cf8fe561eca59956144666ab4c710144bf31f526139` |
| `_ TKC_VH {C28, July2025} Nam Than Thai Co - Tran Khac Cuong.txt` | `6cc4545516e3fd48f8e2efc03c9c126551369c3f074de33dc8b1c37551045958` |
| `_ TKC_VH {C28, July2025} Nam Than Thai Co - Tran Khac Cuong.txt.sig` | `74a13b22deea294abdfbc5e8f19c40a0ff4528bf1d4d61af1e97906121a77f1d` |

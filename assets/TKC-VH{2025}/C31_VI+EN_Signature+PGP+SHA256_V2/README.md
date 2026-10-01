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
| **Effective Date** | 07 August 2026 |
| **Signing Date** | 07 August 2026 |

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
| `SHA256_Fingerprints.txt` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| `Sacred_Unified_Hearts.pdf` | `cb42137c89ca0b7299fb670eba62ddba924306812bdc6beae36ca52dd1fe7650` |
| `Sacred_Unified_Hearts.pdf.sig` | `85f31c4a4c1f3c39421fcbdf83561aa277807c47e65561a9f5a0e584c8ea0683` |
| `Sacred_Unified_Hearts.pptx` | `f38528639f09fb7b2a0ce28c5e7080ff8abe28eda530683d357e3eeceda9a717` |
| `Sacred_Unified_Hearts.pptx.sig` | `2b0e2aae08961f2e6c548ed335ca060cd10063781b9d1a763809bb4f589786de` |
| `TKCVH2025-C31-COVER_EN.jpg` | `891f2933d7e963a07a1a21b4669b3b8b05b8b9a1df70089fbbdb6e85ccdd777d` |
| `TKCVH2025-C31-COVER_EN.jpg.sig` | `ec689866611a793cd828389875d5a25b265c3a426be22132887bc0feb9e840ed` |
| `TKCVH2025-C31-COVER_EN.psd` | `a77aec39e34f6f2a26b70cf759cf1c5c5f6ae79fb42964607176aab79988e861` |
| `TKCVH2025-C31-COVER_EN.psd.sig` | `d1c5dc8408a514723cc9e2b0c170fb4c9fed14d138490e47e48562f34ea2170c` |
| `TKCVH2025-C31-COVER_EN_APle.jpg` | `39075271722202e6c725fb07ce4679c0f4316badc595896e3effe5163a42e6ca` |
| `TKCVH2025-C31-COVER_EN_APle.jpg.sig` | `2d9ebe7fb5229713db5c5761c5ed8cef5397f509d976f66ec37bb6e015e7f763` |
| `TKCVH2025-C31-EN.epub` | `f3e6fd2da28fa99a78c8289c60aa6e6b184ba4dda92bce8f4b53ebe666d129f6` |
| `TKCVH2025-C31-EN.epub.sig` | `fd99c5714c498faefd1112db7faf906c038348cf324f29c96a87ce70ae4edc01` |
| `TKCVH2025-C31-EN.pdf` | `317580538f67ae566d5c38644dd00e8129b008fa7ba7ad58cb5cabb179a9359f` |
| `TKCVH2025-C31-EN.pdf.sig` | `6d7858e4e2b86307a77826d77fd1d0374f21e2e73d218a5ddb411d414ccf61e9` |
| `TKCVH2025-C31-EN.txt` | `0a61c43a3745b08a5e78f1fce1679cc8bf1a868e3ba6a3919e5bde29545b777f` |
| `TKCVH2025-C31-EN.txt.sig` | `1ef7ed1479a948eb0039ffda38f398cc6d62a629e92b1c4fda851dd6b064a37f` |
| `TKCVH2025-C31-EN_KDP.pdf` | `dcf253f8881a2092f7fb4e6820455aea49736f15638624f13235594cb28eff14` |
| `TKCVH2025-C31-EN_KDP.pdf.sig` | `e838fb89a9dd75625aeb2985a131bac732225f8a2a59c0d70b54c7fb88ae72c4` |
| `TKCVH2025-C31-VI_V2.epub` | `ffc409ca269716b70aebbc056d82a04a0af74276805bb254a432d8f21983e169` |
| `TKCVH2025-C31-VI_V2.epub.sig` | `8ea518753e670fc1fbe7293bd12fedb18be0a52ee6247cdd4955cc8ee33afec9` |
| `TKCVH2025-C31-VI_V2.pdf` | `e49a7198f521c02219b4be6ed29479feeb3ec9548a597560567fde7e750d3546` |
| `TKCVH2025-C31-VI_V2.pdf.sig` | `a46e1a1670022b679b672eb7ee50bab9d49fee6743fd7af2f99b9118dffa62f9` |
| `TKCVH2025-C31-VI_V2.txt` | `c258ba33490ad7c56a2e99d79d043af030921f8cb01d20ba55ba3f7e85c0631e` |
| `TKCVH2025-C31-VI_V2.txt.sig` | `ee94a136e9ea6da6244602604129fb7dc34e160bc00600e83e2c730aa04c318e` |
| `TKCVH2025-C31-cover-VI_Aple.jpg` | `70279751ef2fef9e2fb9f4854aa357c608f749d5077c384cb91490537f27d52c` |
| `TKCVH2025-C31-cover-VI_Aple.jpg.sig` | `3f996bf82b2989d414151574f91556bccb55b01df5c15c7c666d15b7abf8b70e` |
| `TKCVH2025-C31-cover-vi.jpg` | `56c0e378bf694f1bd21dc2ecf846475e1b681b752a1ff329083cd089bba1e7b1` |
| `TKCVH2025-C31-cover-vi.jpg.sig` | `b163a9e015dda68f2ebdc4a4f4d1d6b07dc4c19a1a740c73ac59845806a7e17c` |
| `TKCVH2025-C31-cover-vi.psd` | `67c5bbd418fe6491a287a1a244ac82a9e40cda08597dd159f14cfc6780225b97` |
| `TKCVH2025-C31-cover-vi.psd.sig` | `ed47caad8d1c78e7468f0a2e5f0f13ba0e2ece8e1c5e17f04ceed026e7120be6` |
| `The_Unicorn_Vow.pdf` | `10b77a41064e07961193ea2261ed814c7917b1d141e68e6053bd857c5c0d1a6a` |
| `The_Unicorn_Vow.pdf.sig` | `45b551c0063fbaf41234be42820f48fa62085ac2c999d304ad438f6efc9911d1` |
| `The_Unicorn_Vow.pptx` | `12a96fe9e2eb48a5b2ab7ea971f97bf33c018ec7bd02f5af0b6c45eeaeff2d77` |
| `The_Unicorn_Vow.pptx.sig` | `692a2565f679b92e4d0f4385c09a6e45be633e10cb76eb66a0961e4d00d4113e` |

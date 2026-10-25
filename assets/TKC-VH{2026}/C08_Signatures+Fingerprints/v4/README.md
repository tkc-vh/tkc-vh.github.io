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
| **Effective Date** | 14 September 2026 |
| **Signing Date** | 14 September 2026 |

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
| `BLACK_MYSTIC_GOLD_MACHINE.pdf` | `5d232139425a7b2e941a4d94f9f4daa190d1715412ac96b51d2ea20ec8b01313` |
| `BLACK_MYSTIC_GOLD_MACHINE.pdf.sig` | `a375c62354a13657481bc2890274f21515c6e64bebe5c8394722a62d13a3930b` |
| `BLACK_MYSTIC_GOLD_MACHINE.pptx` | `abaa28cd9968d3c6d55d885387aae9d086cc966fc925dee48547b3a7b221a2d6` |
| `BLACK_MYSTIC_GOLD_MACHINE.pptx.sig` | `75b836b71310f80c92e461c6754aff1d46f6e2dc5d09cb3db66ec24e4316b8f9` |
| `C08-2026-EN.txt` | `11006d0b081c7b8b22028645c0c4dc633787c75a23ecf3f69bbf356ce222cbc1` |
| `C08-2026-EN.txt.sig` | `35634d39e28fb17bd7fa79ccf92c37eaa2a7947a67c4e4d4298361fe8c798f00` |
| `C08-2026-VI.txt` | `19399808762e4a16c5dbfded718ae6a840b25c26b36ba02feb5dbe62dd55242e` |
| `C08-2026-VI.txt.sig` | `d6f09ecc422e5e4051e1c6ed8b96b9986af690d66c5adf8012c105fd3afb75c0` |
| `Cover.png` | `80334978959d9fadeb26fc699517ee625d1fa3bcd4b04c2436a642773102dab6` |
| `Cover.png.sig` | `80ca0caa158fa36fbd024edd410c4012030766ab2d16532699080ce946ed1e20` |
| `CoverEN-2400.jpg` | `f0c76fc057226d0bc6b5152846f54ae3a3bf1966e328526b55a7435044a251f0` |
| `CoverEN-2400.jpg.sig` | `ffe2773d2cc97e3d91281ef74b0763a5b8aa0af9031cb0bceff38a7c111d0303` |
| `CoverEN.jpg` | `251e6939cfc1334a91e9834ac1b8dcf312b857f4089ec758de1ba2a467359b02` |
| `CoverEN.jpg.sig` | `faa4f955a50d68c20c5d44756e979ae58618d7f0b092aa355b1be4d2b74b8195` |
| `CoverEN.psd` | `53213be12211a330fc2f32df302a0772a4d6159190dc12babc86783326955837` |
| `CoverEN.psd.sig` | `49926aaccfe49d86aec853433c96965eb7c2e72b5478c31247dd9645f91720fb` |
| `CoverVI-2400.jpg` | `59564c999e23330e0308aca1c8825bcf5602e4bcf0828618fae586e1249d3d36` |
| `CoverVI-2400.jpg.sig` | `8143130f077244a2f48c88f1dd9d32de5a0b5fdf82646cdbee83251c04869794` |
| `CoverVI.jpg` | `412e0ba0d093bf1f3f3f9c0ae4adfb10f0a05375359df4c03434a8624922f681` |
| `CoverVI.jpg.sig` | `0824e9cb9aa44632bb6b2b045f002ccbcf6d7d1f957c20a870728b20778c5d49` |
| `CoverVI.psd` | `28b08b71a73f933858af5f2790d72b04f4007380efd12347d759865e9a5003e1` |
| `CoverVI.psd.sig` | `3c034128dc2cb6fb38d3ed2866829f03ce49c7ba1afe0ce648c552dd2ba95765` |
| `SHA256_Fingerprints.txt` | `b4d075755570e1d65e560713545e77e98ca354515499f99b68d3952df67b7544` |
| `TKCVH2026-C08-EN-V4-KDP.pdf` | `88114ffeb146e50bf9f022f162f7f5c11173049fff0570d5a5c5fa7aa9aaa8f1` |
| `TKCVH2026-C08-EN-V4-KDP.pdf.sig` | `1f8e70ea8b234f2feabfcc0b814fdbc56c264c9775502c06a27976784d2675e4` |
| `TKCVH2026-C08-EN-V4.epub` | `e869daf337d087bb1a0728b7dec5c033e7dd334ea83dea82f5edaa2bd7755610` |
| `TKCVH2026-C08-EN-V4.epub.sig` | `eff89ca617edb252fda9555598ffd4781c5360bb36de1824a1a351b6b6923bb9` |
| `TKCVH2026-C08-EN-V4.pdf` | `b9df1a9c01eb264a22f20a20cebae44d7977b7020914386ef421bfd215c0261f` |
| `TKCVH2026-C08-EN-V4.pdf.sig` | `c466386837d9140c4efc3cc52c558bc373d9013a4a07208efca36f827f760e71` |
| `TKCVH2026-C08-VI-V4.epub` | `6f9790e80166acb5da63be5473536f525d228a9ab59b6cfe3de44e18f50adc48` |
| `TKCVH2026-C08-VI-V4.epub.sig` | `8ca68766eb7db9ad5e769f7ba95eedeac160bc2ca483603fff7edd123489ffb5` |
| `TKCVH2026-C08-VI-V4.pdf` | `33104f8335a1365b6f76a329e25995834d825921e9a60f4225b2b899988d3f5d` |
| `TKCVH2026-C08-VI-V4.pdf.sig` | `17d15cdbc9263141b731784dc256232888fafc57445d1db2339cc72594b53f75` |
| `_ TKC-VH (C08, Feb2026) Black Mystic Gold - TRAN KHAC CUONG.txt` | `a33164fb251baa30171c67b3107040f8c358891446e023d6f934b77ab4590ba6` |
| `_ TKC-VH (C08, Feb2026) Black Mystic Gold - TRAN KHAC CUONG.txt.sig` | `0059663630070b88a093102c473bc1826b3cc029ff96cea1c03c713a734626ad` |
| `_ TKC_VH{C08, Feb2026} Co May Huyen Kim De - TRAN KHAC CUONG.txt` | `c65a59147949c56e1bbb6b85496b3256766d3bd294ebd922acc6d831b2fe5f3e` |
| `_ TKC_VH{C08, Feb2026} Co May Huyen Kim De - TRAN KHAC CUONG.txt.sig` | `60a80754d5a59793bb71997c3f124b4c564c7212d49ed154e56673f0040cd823` |
| `dd.pdf` | `04d19866b036c401f2fe295b4af927a16c6534fc997606d7d8ebca978dc954ab` |
| `dd.pdf.sig` | `a503f249f060bfc596c192bd1393f2ad428e2a1e483f28798f12fe2393c4dc23` |

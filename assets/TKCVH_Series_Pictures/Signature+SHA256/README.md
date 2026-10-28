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
| **Effective Date** | 28 October 2026 |
| **Signing Date** | 28 October 2026 |

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
| Amzone_Kindle_1.png | 2947d4e409b0cdf241cb3779a3f411a7561f69bd4af4f6a1b08acf0c71e920ff |
| Amzone_Kindle_1.png.sig | f7db0a85a82c6bb8dcc5816edeb323900610e06dc0afbea67c298de20d06a6fc |
| Amzone_Kindle_2.png | 65a7a84d33c97406afd37748f1db0c65cd5ecc4552fadbeaaf8e681b9f87f40b |
| Amzone_Kindle_2.png.sig | 13e503977cb2a92021c7597822a0ae8c40b5a10be351b9d4fbf963665e26206c |
| Amzone_Kindle_3.png | b999b8a3d7d12ea10d2d5f5f331530e1ed9214b8404ce044d2c0b1b6d2209ded |
| Amzone_Kindle_3.png.sig | b898f359dc4bc1a78bc019430bc23b9e056fe3f76581fb9d12ff4e31bf6399f2 |
| Amzone_Kindle_4.png | 29b8b8ba2b1bd00fec421a6d4dc9636e001eb3f0e22f79e9e5c93c37353a1341 |
| Amzone_Kindle_4.png.sig | c6f25af278f87870d37eec4e2eb65facccb06b851fb6d6389a1fcb109e15e85c |
| Amzone_Kindle_5.png | 19cdb21621350c7618ba9df50d8939bc153371a5560596e628bcadd72ae40e49 |
| Amzone_Kindle_5.png.sig | cc47e5539beadbb60a983adcb900ea93acae980fde16c1011b92270dc99e1f3f |
| Amzone_Kindle_6.png | b096d4abaf728945a6e84a7de3d4671a9988162bed3b3aa849f3748c5d909af9 |
| Amzone_Kindle_6.png.sig | a230979dab88702373aab3857ca3c447f401dbe3ed8d45356295afcbefea8237 |
| Amzone_Kindle_7.png | a068bff5fd79ae83393b438ad069c35cd3927cab6c5d4dbf8d47192191b3624d |
| Amzone_Kindle_7.png.sig | 38d28605c490f9564119fa46faaf758513394800fd955ac5f163de5de48d2150 |
| Aple_Book-1.png | 2ad2bd7c267e381264ce48241b5bcdc634a05bcf2e9fcd0c00b059df832bd08e |
| Aple_Book-1.png.sig | 802499c45cb8c9d674ee2ef5ba3be5485f217f23c46af197eedf3daa18c4f2e1 |
| Aple_Book-2.png | d2a92ad18a94a258e465cd2312c968b000548b4c3ac7042c91807717c9e2e63a |
| Aple_Book-2.png.sig | b04e710558cff93b439558fa0797ef3dd0ea9f0d795917c1479af6db3f1358db |
| Aple_Book-3.png | f01a3de70079790efa1d3cd4cdec113d3e261256d943356a45b22df97879ef96 |
| Aple_Book-3.png.sig | f2546ca389531a1a40f900bf5d776e90fc171da5445f4147be7e6cd00f84b8d5 |
| Aple_Book-4.png | 495a014c6838deffdeb3cf4b48f06a75477fea44b30698d5f6e68eec32636160 |
| Aple_Book-4.png.sig | e72ca2ac47d8d7f4044ae45930c8de60790f17d519d2fcd3b0f13721d92f1987 |
| Aple_Book-5.png | 62c1e2e4d8635f1108e20b3c458ebdd362589afae65c1d27bb134e74db48b345 |
| Aple_Book-5.png.sig | 219d6cea9e417329df035bf9457985896cb0c07a23ffc5d2fbd4ce7b1427dd3f |
| Aple_Book-6.png | c153c996728cbbe9f4c2747962b748b351ce86204eddeb7826eb455563e18d23 |
| Aple_Book-6.png.sig | a1737415f186a57d3beaad3800d3b05a1b791a40331a7e3f98538a98747c7f38 |
| Aple_Book-7.png | c4532ba639edf0d79d75df517384b6ed22d7635dbfa81c79dcadc132c79a8b0d |
| Aple_Book-7.png.sig | c04c48a4c43c69ed86ee61a1dfa6906651e50f56be5ab6bcb05cbbc64ab53f1f |
| Aple_Book-8.png | 947ff09633f73324ccdfefe58afcb973f21a8c1f1b988d368b1762c754b6e3ad |
| Aple_Book-8.png.sig | 5b692e461011f19304a10fd492056e223299ba4968c85ec25ab3afafc4e22cd7 |
| Google_Boook_1.png | e1ce1f1ec2ae2cabf6fee9c656d96eb957b1f14fb821c49e6557a643fceb0cf3 |
| Google_Boook_1.png.sig | 4d1e0022ced5f490cd9f91016e254a3dca53a73e0615804b686b733d34f7b6e7 |
| Google_Boook_2.png | 61e6f85b10ef3ce99b16be9e000b83bc78e82380a2d0cd9234f005e0e62812f8 |
| Google_Boook_2.png.sig | 5c0e57d20e6b21c0a9a2d89f54105beca6d6dd4cdab28a4866050dabed115eac |
| Google_Boook_3.png | f909e7a9d63c46ace20eb62eb5577d2477480bd131c500a3f5f47e3ffd0881cb |
| Google_Boook_3.png.sig | 4177119738925bbcff177bc14abb19ede73b1d13697b88f76e1708ea1930b4c8 |
| Google_Boook_4.png | 922d4435d30e8be735721fa2750343e4e309ddf5f434c93cbb735c7ee4398850 |
| Google_Boook_4.png.sig | efd71018ddd22b79e029808abad65ca97b554c06e8837fddb87c823236f712d9 |
| Google_Boook_5.png | 323f0045372dd304863419bab0db0922d814e62c4c70dc72013f6bc7116263f5 |
| Google_Boook_5.png.sig | 3ee1a3d182b01be7e46b007e14d00e1418fad43b96cd4894862f22c58e67f9ae |

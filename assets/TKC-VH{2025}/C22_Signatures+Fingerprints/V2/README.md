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
| **Effective Date** | 18 August 2026 |
| **Signing Date** | 18 August 2026 |

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
| `SHA256_Fingerprints.txt` | `d1f0e85df0b1626cfa803e36ece3d0285ab88fa7341ac893a52b7bee5d8caf67` |
| `TKCVH2025-C22-COVER_EN.jpg` | `54d72a435555eea3b7ac055b3bb25778b4aef026f62ce7fecefe1393c825d041` |
| `TKCVH2025-C22-COVER_EN.jpg.sig` | `d55696dca8f98a0705f153dff2216568352a7db13c7ff7c8122872918752d23f` |
| `TKCVH2025-C22-COVER_EN.psd` | `44519eae57faa6a820ff7ef1b8e183b073c9ecc52c83c42a1ef1fa569c784f74` |
| `TKCVH2025-C22-COVER_EN.psd.sig` | `8ef7d4d79631f9f185f22f2c6edc218744c85450356f9ece0940c4ebeb05e1f7` |
| `TKCVH2025-C22-COVER_EN_Aple.jpg` | `4f58424daf1ce920307cd24a66ffdac1182276e59c1a272fdadf294d117cc822` |
| `TKCVH2025-C22-COVER_EN_Aple.jpg.sig` | `bc2ccf7fd3edd7f18b0c801868fbb4bdccf313ebfe2ad19e26eff4ef60bb6772` |
| `TKCVH2025-C22-COVER_VI.psd` | `920ed379d2712a674c5c147f4efec2187d7c033dede2efd47dcde8fa3317b2bb` |
| `TKCVH2025-C22-COVER_VI.psd.sig` | `e6ba4798697f8910f9528e9fa46bfc574e5b32f6acc3a367a640d3e12bd8be94` |
| `TKCVH2025-C22_EN.docx` | `f3691010878e92e9c1f9378651452a2bd1de5372ac8c46d1d0524f8dd40e3d86` |
| `TKCVH2025-C22_EN.docx.sig` | `61f79f45d7644626176937d316698eb7f457b3fdafd5e9220bf0236127a69c60` |
| `TKCVH2025-C22_EN.epub` | `be5ee4d7330163da85bf47ff4168ae35375a9df2fcb2517a96ce1f01041d199c` |
| `TKCVH2025-C22_EN.epub.sig` | `9fabd02d0cec24aa7efe53b0be045a5fe2bb97e64676fc02601d45be07d5a411` |
| `TKCVH2025-C22_EN.pdf` | `19890f82fd9a42efbf9d686ca768925a11a20451afd84b5e6dd99fb6ac88bdef` |
| `TKCVH2025-C22_EN.pdf.sig` | `6114778a229c5a7bebafa60b935b0839f0d1bbd3c69a58a564f64d54e1618771` |
| `TKCVH2025-C22_EN_KDP.pdf` | `6807902aa85027af6b0a032d566738e9efca7a8c9f6861519a60f616d8671350` |
| `TKCVH2025-C22_EN_KDP.pdf.sig` | `124e5d30f7ae6c114f31108a74eb1d1a43d844e65326eb752f52f2f0c003b274` |
| `TKCVH2025-C22_VI_V2.epub` | `1bfe64cda795fc36c4c5de2e4c5c298593cb7ec6ce29fb01a26139b2b7763426` |
| `TKCVH2025-C22_VI_V2.epub.sig` | `6ef86e60151f4f6cb5ea871573e4e32f92d8b99e98c60cc1a1de2fe1b9f003c1` |
| `TKCVH2025-C22_VI_V2.pdf` | `a58ed1d05b8ad178c10b98c750ca5558109144c05b2dc91c34425d1657aadd47` |
| `TKCVH2025-C22_VI_V2.pdf.sig` | `a8b32961fdc61248eebd67f66fbae5b72e75f1110d7c585a4c7feba1bd6e81d4` |
| `TKCVH2025-C22_vi.docx` | `3fcd892fa3032d7573b942490749e5782a72438a225507fadfc3a32df071229e` |
| `TKCVH2025-C22_vi.docx.sig` | `181ba584c00d003e9ffdac2b96ccd6d155eebed628b7df2006a0bdbddb4e8045` |
| `Thánh_Điện_Kim_Cương.pdf` | `29ef88349f9e22304d96fd67c27afc70dfefc5bc3129d375ce7104fae8000431` |
| `Thánh_Điện_Kim_Cương.pdf.sig` | `e8b9867041e47d6984addeb12dd04c00a2fdcf8e3240e5df6d74bf8300862fd8` |
| `Thánh_Điện_Kim_Cương.pptx` | `422d361c9bd80ccf94c968f73c31d055f6c7e5fe9ee26eca8aa86194b68f3db7` |
| `Thánh_Điện_Kim_Cương.pptx.sig` | `2b3557e1df70110c2e241bfd6a6f8a70318af012dc470501cf50336a1d8b0921` |
| `The_Diamond_Path.pdf` | `4caac09d8316eb8bffa09f78390eb888cb18ec1a1306ff86f9ba9aec7f4e8808` |
| `The_Diamond_Path.pdf.sig` | `904693223d6a5fc0be3279855d07089d03471e6999b1ad12f20a1450eab0bb23` |
| `The_Diamond_Path.pptx` | `7ce50c9e621b19bc628c495b6930d41328c796d39d7d9776e52269626347d830` |
| `The_Diamond_Path.pptx.sig` | `80accf391a849a27e0f4dec05ed92d80869f7e59246750c69c707424950f003f` |
| `_ TKC_VH {C22, May2025} The Sole Transmiss - TRAN KHAC CUONG.txt` | `276a2c6dadd196c3a139d2ab95f2ef5bb76760a32663cc5120579bec0cac0fad` |
| `_ TKC_VH {C22, May2025} The Sole Transmiss - TRAN KHAC CUONG.txt.sig` | `dfd1eb3d415563e333a89a053b352e467be7032771dd3517e63b898839325329` |
| `_ TKC_VH {C22, May2025} Truyen An Duy Nhat - Tran Khac Cuong.txt` | `e6d5d8bd4d7fbe46b6626cf4ad9481e4d0bc2ea7e0df919f88310ea6059f379e` |
| `_ TKC_VH {C22, May2025} Truyen An Duy Nhat - Tran Khac Cuong.txt.sig` | `2d1a76ae9a607ed3b19dcdeafe150f91fe46e2259592978a330ccae4316b8d4a` |
| `ttbl.jpg` | `ffcf06d659bec287750a400526fe8e01fbe6c26d7e041e24f2096753d2b00859` |
| `ttbl.jpg.sig` | `15da061e6c3c3297eb42c8dd5afb292229046073783db1c97bda32bd5b3c16e0` |

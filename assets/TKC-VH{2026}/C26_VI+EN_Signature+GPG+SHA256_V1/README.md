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
| **Effective Date** | 01 October 2026 |
| **Signing Date** | 01 October 2026 |

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
| `C26-2026-VI.txt` | `7cb2ec6a330ff37a192cef6c030656a5b01695f741897a34accf4a02c0fe034a` |
| `C26-2026-VI.txt.sig` | `f78885507d155710a71bacf1398eed9c5eb79b2ce61bd99858255c445422e244` |
| `C26-Cover-En-1200.jpg` | `126ea938be4e02bffd8d0da3ef0e9f99f2607936e1aebafa6f2b472eed382456` |
| `C26-Cover-En-1200.jpg.sig` | `eab2de09ab37ec02e787e00394f9772f9e3cc80f3d0ea9d7a0f2cc0177e7da63` |
| `C26-Cover-En-2400.jpg` | `589c882611f81b9a13f25e1152b1c0aa5d9c3e8b3f92d76a8db9611cf3556bee` |
| `C26-Cover-En-2400.jpg.sig` | `90081d14080b26088fc75f9ae87f0d11d37544defc4d44a39545304b2053a94a` |
| `C26-Cover-En.psd` | `e3e336e216dcbf9185f44c9b02b95be980fc8d4a89d9303307b0f63f3ec0a7d4` |
| `C26-Cover-En.psd.sig` | `05d7e2043564244d1d1f8938065fdd9378468c8f87e84b8815197f2fe46acd53` |
| `C26-Cover-Vi-2400.jpg` | `ab351922b69a6ae3c0fba0d3d859aec10e096542275d550f50a8c54dc92f99d6` |
| `C26-Cover-Vi-2400.jpg.sig` | `bce945af20b194767cdde0ef782363cbeef489e7488596b74fb9ca47c85f96af` |
| `C26-Cover-Vi.jpg` | `e78134ca0cfc33d37347e21fe2b8541af623024b3537146f31b50294dc61bdaa` |
| `C26-Cover-Vi.jpg.sig` | `295c47a70406c386ec45b339a4264a43236af830e46ed2bbc1cb75ee589f3fda` |
| `C26-Cover-Vi.psd` | `2b2305a6d30502de0af5f24d9b22f7988fdf3a023a641d80da1d862488961a21` |
| `C26-Cover-Vi.psd.sig` | `64848e881d2d6613acd0df51609545faed965fb34a1e97825e22cfe57d3a13ea` |
| `C26V.docx` | `bfb791d26afdeb899f2b2fb3f142f607ab8b3d1bf8adec01fa99bf6b50b20d4f` |
| `C26V.docx.sig` | `02667593d6b84ced3627d48f0180f73ddf01b8c1b9375c2730aafeff6b13d39e` |
| `Cover.png` | `644fe992b427f7eb1120ca70d13844ce59045317263327efd3dfb14d5d29caa2` |
| `Cover.png.sig` | `d63e5de045531c9dcb04ce033db12a694edc6cd5d295731e39910f83580e3a8f` |
| `Crop-Circles.html` | `e532cc9e8d60383d77f66ecee12df04827043f5a5a645e4ef9a3167d60ce5277` |
| `Crop-Circles.html.sig` | `6bfe25e657eba8a5652444c5ca900abe7e8e1ca361c08564c0bf76fc21fcd244` |
| `Eternal_Quantum_Love_Ledger.pdf` | `f2fbb645c24158e3d58d6fdf5b9b0c70c559bc39b650db0656f15cd958c4aebf` |
| `Eternal_Quantum_Love_Ledger.pdf.sig` | `084812d755020cdc6e24a6e2605579e9b4600d23c705f6a10236206ca1ef6474` |
| `New Empty File` | `df3008c9493a89dabdd59dcafd50fb2b33a51a2515314f9685c160b54e9c51ea` |
| `New Empty File.sig` | `ab6e86913b0eb29bf4f3fffd02a1b33fb80a607a7903fac369589c8809ad3d10` |
| `SHA256_Fingerprints.txt` | `c0ccba3d39afb9f4dfdd7b563b3da8e1818639b11d31da3dc814d1048f82dc54` |
| `SumC26-2026-Vi.html` | `cdaa4b76dbbd3d2a4af3ed7338c13e97b036e2250efeee26ef39b56b5849d82a` |
| `SumC26-2026-Vi.html.sig` | `eda1b1c06dab8d32eff7d485583d8c2fc566502b583038ec1caa92c2973aa0ba` |
| `SumC26.html` | `7e1477aa7dbaf1a7dfc3a2864529cf74e207b6ca16d9b2f9adec240f737a6ddb` |
| `SumC26.html.sig` | `2047a5e31e1fcab06a63879b108a45876fe5ad504052a3a85091ac38d9b909cb` |
| `SumC26VI.docx` | `5fcf0e24ea3cb4f5cdb5f8e26fca2d4ba18219c6c70360d77d18764d5f6bb80f` |
| `SumC26VI.docx.sig` | `39b762d84776405c41b190ce151033e805ef08f4b81b2af019aaa992209106ec` |
| `TKCVH(2026, Sep2026) Cap Nhan Cuoi Kim Lon - TRAN KHAC CUONG.docx` | `4b8975f48e643d96f780bd3d2b6f0f71ceb43af76504503e0fea6d7ce161d1d0` |
| `TKCVH(2026, Sep2026) Cap Nhan Cuoi Kim Lon - TRAN KHAC CUONG.docx.sig` | `0dff01fa4d60827c53b66d8c2f25627e367326c9008f03c249efbcc59aa135ac` |
| `TKCVH(2026, Sep2026) Cap Nhan Cuoi Kim Lon - TRAN KHAC CUONG.txt` | `a6c1e3688dbc31954374b29dafae5662b47a066e40c4d0caec098aa8ac06b24e` |
| `TKCVH(2026, Sep2026) Cap Nhan Cuoi Kim Lon - TRAN KHAC CUONG.txt.sig` | `58bdeb98aa1a69e2bcdf725d97e9918b6cb82955cd1e7ffc3092eb1a565ee58a` |
| `TKCVH(2026, Sep2026) Cap Nhan Cuoi Kim Lon - TRAN KHAC CUONG.txt~` | `8f3ff8bab603a15df63b989c79cc702ad807481195ff42eff45e3d20399bbc4c` |
| `TKCVH(2026, Sep2026) Cap Nhan Cuoi Kim Lon - TRAN KHAC CUONG.txt~.sig` | `44b680886f690997446564c7dd9f0ea6c534f9d1ad300e69975f3cafdb1ec6b8` |
| `TKCVH2026_C26_EN_V1.epub` | `23db7ad0a802b005602277e5231094d36ffb0d07c62b5822b2abab6d08550d67` |
| `TKCVH2026_C26_EN_V1.epub.sig` | `4f2592b80e2c3e807f9f71de13e48ba0b2ce231306969dd104136ba893f3620e` |
| `TKCVH2026_C26_EN_V1.pdf` | `a122614e5e0d3e09951b081bb98f0c621982c9fe48987aab05f248cfb6108bf2` |
| `TKCVH2026_C26_EN_V1.pdf.sig` | `5e1dc8d524eb57c962f886f50a20b8be98fd1ddc2991b9b062d02f17f3db4e7b` |
| `TKCVH2026_C26_VI_V1.epub` | `343a8d379a6f8b44a4653f8c2914256362efc82ea097db72f9100d2f89829d09` |
| `TKCVH2026_C26_VI_V1.epub.sig` | `9aaf159197e252c43fef8d645206905e947f009c906974bd3010846bf7f974b4` |
| `TKCVH2026_C26_VI_V1.pdf` | `c739d0853784f14e8ac4e3bfda7d769a54ca0463dae91b72cf38de704e08aaec` |
| `TKCVH2026_C26_VI_V1.pdf.sig` | `4bced14b4b7659d1f6f888302cc57f24f7b77ea8c96250b4ebfd8b2c4260e5d9` |
| `The_Quantum_Diamond_Blueprint.pdf` | `286a9ee97b179081f27140c4cb490f39d5dc4bb876ee2c1d462dfb42c47f4082` |
| `The_Quantum_Diamond_Blueprint.pdf.sig` | `2f4322b1173f1e4f799d882ec5a1a6d7d45384fb8d2627701f76139ce57b85bf` |
| `The_Quantum_Diamond_Blueprint.pptx` | `f00eccca2d4baff298366b77166fe3a189207c7b9a77d5f94defa16c29812cfa` |
| `The_Quantum_Diamond_Blueprint.pptx.sig` | `9eda83e2bc16cd8de146642e03d064071a96a528660298a27167b95a47842128` |

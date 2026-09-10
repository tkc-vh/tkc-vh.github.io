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
| **Effective Date** | 10 September 2026 |
| **Signing Date** | 10 September 2026 |

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
| `C20_Coverr_EN-2400.jpg` | `414f80deb187636b634fa8057d55c1b40791c857fc1526396446cd93c364b060` |
| `C20_Coverr_EN-2400.jpg.sig` | `50548f476f72e0d195afa76be23daf9865e97454a19dd8818c6c3c15e331f8ee` |
| `C20_Coverr_EN.psd` | `64df1a0159a0a1dbaabcc5f3d2aba227c3a2a5c1530b25d7fdbe4ad75d472d66` |
| `C20_Coverr_EN.psd.sig` | `db5bfc56b5770fe3484a27d033582e08f371f15a8aa5b5740abb945333805fa2` |
| `C20_Coverr_vi-2400.jpg` | `79d294e42d6eb5201e365ced8827d713865ef2574abbed5acf60abe0de7be668` |
| `C20_Coverr_vi-2400.jpg.sig` | `604ed8521f95e6c46c6a424a52b65c38a8ff38764c468d2ecaed6383268811cf` |
| `C20_Coverr_vi.psd` | `bfcdb1b76dab7e7dc8b1c2dffa27c13d33c2ad75b7c396bf6b89d7a3f51ca019` |
| `C20_Coverr_vi.psd.sig` | `df32914e39bcf453db8448095ffb01305f3603cfe20646f26ebc891d04afa122` |
| `SHA256_Fingerprints.txt` | `32ef9f92fa30194b9d3b661de9c96eb648c58167e8978b5404720251e0efb923` |
| `TKCVH2026_C20_EN.txt` | `dc50c6d5c13f9fc9a72cbab019fa7ab80070678cf5197d038f1329153e5254a9` |
| `TKCVH2026_C20_EN.txt.sig` | `fbca9962655675c1292a6f9c67732fdd5f0a1e3cdc2120be99feb4f198d95720` |
| `TKCVH2026_C20_EN_V3-KDP.pdf` | `2c7879ff11ac32ad9e7fa5ed2cebb09885004c72be0b068dd4fa12b50f8e3da3` |
| `TKCVH2026_C20_EN_V3-KDP.pdf.sig` | `5d6855495bced0e425c0e48b7c4101653787f34726f0ea8ca04bf613a74f031d` |
| `TKCVH2026_C20_EN_V3.epub` | `37b7f344b521e970f9a555c814643ccddf1f14a81261f8c031561fbf07eea4ef` |
| `TKCVH2026_C20_EN_V3.epub.sig` | `6f82a7c926b94d9a4e7b55a44e10e557c974a75739fd313a15f03b00641386e4` |
| `TKCVH2026_C20_EN_V3.pdf` | `99c6c8a36b80ae5e0952d2c7535a0fa61f3570b897a641db42d219e1906b2be8` |
| `TKCVH2026_C20_EN_V3.pdf.sig` | `567e84d0ea96ff20cee8e84861c437b25eb8af7c6f55fb7b9b619f0c0827b1c0` |
| `TKCVH2026_C20_VI.txt` | `3ae4dad7e3be3ab9a76b58bcb75b15ade98c024fd9b3a441278bdce40b40f7f1` |
| `TKCVH2026_C20_VI.txt.sig` | `bb8327ce1023e2a60cfc610099d6c1e3526388c33fa16f03f13d5d03f76f0972` |
| `TKCVH2026_C20_Vi_V3.epub` | `c727bd2ed08ba937f95bb4bf8ac355819f5d9996a7ed5c288c033e3e32ee0d43` |
| `TKCVH2026_C20_Vi_V3.epub.sig` | `61957c5f46b9db6da0887a925e010996809b5d7a9e361e3c0acd55343ceafa1a` |
| `TKCVH2026_C20_Vi_V3.pdf` | `135b86ee179fb20bc923d480f4656ace644cbbe0591d234946b933eb1cfd324f` |
| `TKCVH2026_C20_Vi_V3.pdf.sig` | `11e507d29d0520bd1cf9366767d42617c3a229adf0fd098fb9252c827dfa8265` |

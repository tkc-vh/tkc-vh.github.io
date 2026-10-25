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
| **Effective Date** | 17 September 2026 |
| **Signing Date** | 17 September 2026 |

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
| `C12-2026-EN.txt` | `eacaf93ef59b63e6ecb4314c2964dfa23e2a07acaba56d5e6d2c9a932fee1f60` |
| `C12-2026-EN.txt.sig` | `7c872b3ca7ed5055e6bae2bbc64f1d8b9ff6859c81d28a12ee5b82836f7980d1` |
| `C12-2026-VI.txt` | `0adebf84f76e96c380ba514e0767fa350fbfe88e7dddd9cb0d4d46f234fa1dd1` |
| `C12-2026-VI.txt.sig` | `16ce2e482b304ba23986a8c8ea70c6b218cf529c54689b085cef618984fe3bd5` |
| `CoverEN.jpg` | `2ee1544ae03a5b1887c8b866a267be379b1a0a7baf6c4ab55bbb7e67eedad4b6` |
| `CoverEN.jpg.sig` | `02847df4d6c1076ea54f26063e9df64a06ec05fe397708b9ff72b52f79e1cfb9` |
| `CoverEN.psd` | `1b6dc799e5b70b3577dbf076208830eb93ec63d90358b347ea3f13ab85cafdf2` |
| `CoverEN.psd.sig` | `4c4e3ec90d87cea96399496071b2a12001db2016438fd6d23ae0bc0f17622437` |
| `CoverEN2400.jpg` | `483ec957857ce28cbbe1569ba41cd45b3bcd74da6f068c827c00be28bf55f279` |
| `CoverEN2400.jpg.sig` | `29440fdca4108194736c296095019b9d2f76719ddc430114ab8a4f94c72e3bf7` |
| `CoverVI.jpg` | `196c0a260755a57a398c913551562498dfa88423ada5eee7a2d47330a0428d61` |
| `CoverVI.jpg.sig` | `b84d622788ae21be5686e105b65a1be757e233dbf7aea5490dbd7f0d0ece2293` |
| `CoverVI.psd` | `b4e1bfd23a98cd4911bbe746575244694278fd05de76d0faf552b0d67f34d8cf` |
| `CoverVI.psd.sig` | `dd793c830bb0e71b17119ca4cdfd3a13af2184cf513c66c0aff367c7697a01f7` |
| `CoverVI2400.jpg` | `20a17099fb43780797d84757873dda93c685eb1f26085beb3d58bef083d58b02` |
| `CoverVI2400.jpg.sig` | `fae3b657e1593160ba48145680bd932049cef949415b1bdd8b57673ce8986395` |
| `SANGTHE_Alchemical_Blueprint.pdf` | `491c75e1f729ad3eb56ec618d62091a105c07418312d0bb7338e39e42490d9da` |
| `SANGTHE_Alchemical_Blueprint.pdf.sig` | `06a0974e0e103ad545a4e1ed384f27d3a4b0885534008f655f68b657c325c26b` |
| `SANGTHE_Alchemical_Blueprint.pptx` | `0a8a6d3517f40afd1b8a4b4aabbbbedd875a261995833920291cb189707afe7c` |
| `SANGTHE_Alchemical_Blueprint.pptx.sig` | `4255bc81e0fdbd3ffcbdfda59f7d46702aa0cde6376f175a1fb109ac3a99ba8f` |
| `SHA256_Fingerprints.txt` | `d7f5395a794fd174ddf315cd8cf6a26fa151c14ab37a2a270495c04039629cb7` |
| `TKCVH2026-C12-EN-V4-KDP.pdf` | `e5d3aebcc28217447436350f87f0a9013dc94a0cfef9e3e6323b3d3acd863299` |
| `TKCVH2026-C12-EN-V4-KDP.pdf.sig` | `6626676f0a35e4cba70c06842598de5c8bcd41a478b705073a9a3f9c4b8dced9` |
| `TKCVH2026-C12-EN-V4.epub` | `ab8f77f255778108698e16b3277af920e138e16e294ead8216edb883134751f4` |
| `TKCVH2026-C12-EN-V4.epub.sig` | `676efd83269db5de076300ccb459a19f5352956f494a1bc2f5bde87d9579da56` |
| `TKCVH2026-C12-EN-V4.pdf` | `dc7ca99b112b5521393f424f78463af471932f8db8343682a1430a80818343db` |
| `TKCVH2026-C12-EN-V4.pdf.sig` | `4a1a99daec2d129c6f521d99cf83b210d5668088949b163956e939630803c6a7` |
| `TKCVH2026-C12-VI-V4.epub` | `33818983dd11e5f0c3f892714dca001b528536223445bde2d60672549c3e46ab` |
| `TKCVH2026-C12-VI-V4.epub.sig` | `a80cb22cc76ccf0608f2206489d3be6744718babfab671b219c1b8efb763df86` |
| `TKCVH2026-C12-VI-V4.pdf` | `1a7d54cf27026be026dd009ae671b5cad15a820ec051931620dcdb6c93b7f002` |
| `TKCVH2026-C12-VI-V4.pdf.sig` | `13a3117de48b281224a71d2548965a3b49c36fc668956c3d858ce4698362e629` |
| `The_Indivisible_Union.pdf` | `406e52578cf563986d6e15bba789177645490722859e78c74b8640102b2c3682` |
| `The_Indivisible_Union.pdf.sig` | `e307ff5154b8293ce3b00632b63c8daf15b6848df79d727c7531e0c946447980` |
| `_ TKC_VH {C12, Apr2026} Dan Dien Ngu Giac - TRAN KHAC CUONG.txt` | `95660ec274a75f6fa3975501e71485bec87f1862799e4ecc5994ae515af08ff7` |
| `_ TKC_VH {C12, Apr2026} Dan Dien Ngu Giac - TRAN KHAC CUONG.txt.sig` | `324300d124bd6459966666657886d9e242185808d84ad58440530312c42da12a` |
| `_ TKC_VH {C12, Apr2026} Five-Angle Dantian - TRAN KHAC CUONG.txt` | `ef41486cf55afad6183ab772fe9925af61783575a768f31ba62f59836383820d` |
| `_ TKC_VH {C12, Apr2026} Five-Angle Dantian - TRAN KHAC CUONG.txt.sig` | `c87d19cf2ceb818a168e9f38af58e78d74ac8a0fdd36ed5a593eb467891e798d` |

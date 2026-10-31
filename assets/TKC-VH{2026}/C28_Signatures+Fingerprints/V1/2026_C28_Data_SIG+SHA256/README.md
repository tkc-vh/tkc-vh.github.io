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
| **Effective Date** | 31 October 2026 |
| **Signing Date** | 31 October 2026 |

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
| Bản | 2b14a5ef4e44d5abef0b314e41f487fb56085b141d6db78d5475fc5a8a60803b |
| Bản | fc028f46439b45cb51a7a5d7115d2f2396c70be6c4545bfc3b7033a94d3af6dd |
| Bản_Giao_Ước_Lượng_Tử.pdf | 01181594c3af70f2fb992de7a27ec50e559a40ea645a1b025346c790d4e7805a |
| Bản_Giao_Ước_Lượng_Tử.pdf.sig | 0a3a9da7d25dbec96a819f35e6a56948bfdc065ed840aa17dd91185e1f018445 |
| Bản_Giao_Ước_Lượng_Tử.pptx | 76888373e60d2a54996d2c4d21f5139c5ffbacbb1f8b681bf9995bebe216e5f3 |
| Bản_Giao_Ước_Lượng_Tử.pptx.sig | 7a19a90d6c5859c933b2371a7e7851dd2f20bb258646b16ee800cb43b6c1bb8e |
| C28-2026-Vi.docx | 3849e850aed2421bef2bffbbfe1f6b924ad8d7874675b7d1db52e740967f7be1 |
| C28-2026-Vi.docx.sig | 9e090b0daaad59a3613d06fd35e5457febb1cd8d1d95b93d85a9c94b2693d0d2 |
| C28htmlen.docx | c96eb9136ff50b8fb8a4512c8d9de2dd4e618258aa0a4b451f303a6464617f64 |
| C28htmlen.docx.sig | d037b62e35bdd4996ecc84b8ef921bc8d1caecb6f4bf1a1fed8ef67454593014 |
| C28htmlvi.docx | d62436bc9ea44c53c67c52c61f4e12522429fee77226287fcabb6d3d50a65f5f |
| C28htmlvi.docx.sig | 3c2efcfcd53063c70b73c1f3208c1dda2a959db1af278ead8628e31477aac226 |
| Cover.png | 093282001397fff3b9759b4cc44ed6883d5fcfbdc4a4f1da34eef4e647a08ae1 |
| Cover.png.sig | 802571d540033acb01f6bcfdfa78543f824d2d95b9fcc349fbd609e5c8dbc02a |
| Crop-Circles_C28_2026.html | 7b35ba9fcbbc746974931d0dcd2c94977e9bce6720f820797e5044185a0dd22f |
| Crop-Circles_C28_2026.html.sig | 913df9fb4e99ec77f259b9bd34a8f880deca356366211c6d6bbc27508b76c2e3 |
| Obsidian_Quantum_Stele.pdf | 22c4c4bf7f579837c74e33136ae5e87fcbd35a8fea9b54f65c73858bcf11a4ff |
| Obsidian_Quantum_Stele.pdf.sig | 8a91a68f413ec595cbea8ae1bba5bd32b019a94d7f5b6547fd964e14ca91e370 |
| Obsidian | 22c4c4bf7f579837c74e33136ae5e87fcbd35a8fea9b54f65c73858bcf11a4ff |
| Obsidian | 8a91a68f413ec595cbea8ae1bba5bd32b019a94d7f5b6547fd964e14ca91e370 |
| Plain | e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 |
| Plain | c2c02ae46182ab4bbe361d749b4437332f3dfbad81f1617a2e53a8fa9223da17 |
| Sum-C28VI-2026.xhtml | d16af87e51e13caf6743c16ddf124bdac41bbf348bfaec565da858e7e8293d6d |
| Sum-C28VI-2026.xhtml.sig | ee28616ff7798414eca8c5a0057167f7ac80f9a0705d0717d84dd42cb775d1ae |
| The_Quantum_Covenant.pdf | 662bdb5cf630f799c4891af83ac8147ad0fe9e8f295a458f72435be5caf249db |
| The_Quantum_Covenant.pdf.sig | 8c25f1e51822cea002191b16aca0c6f46e73070622d7677f078d97e4e218afc8 |
| The_Quantum_Covenant.pptx | ef321c7a8fbbcbddb1b12e4abc67092b660ec6f35d907f4ce12cea9e5162e595 |
| The_Quantum_Covenant.pptx.sig | d359d57ce67c6514f7ff6e2deca12ffc1d9b6b2ebf5831cde4927e84b13e2a28 |
| TKCVH2026_C28_Cover_En_1600.jpg | 2bea22bcda6e0dfb9bc37c33b692ce1b6923c8c89886d04bba4fab7284d3d3d2 |
| TKCVH2026_C28_Cover_En_1600.jpg.sig | edb288b0e68643ddea33290f7a3ab3c41c2906df6223cbfffe7039e4b50c7eb9 |
| TKCVH2026_C28_Cover_En_2400.jpg | 02468c56b2c9836c5c135b1b6b0b34882706882309983098146f69e436163aa5 |
| TKCVH2026_C28_Cover_En_2400.jpg.sig | f06ff835ac252f575c33f4fc6adc09919f75127cf36d3d876230d1dc026cc3b6 |
| TKCVH2026_C28_Cover_En.psd | 82564d0a2e61b7385ad7671f4c3833de50d35c1753a10f749809888ae221d2d1 |
| TKCVH2026_C28_Cover_En.psd.sig | a3341bea44239786419665d88dc8614a99b2ff238a5b88bf42a6609a6dded350 |
| TKCVH2026_C28_Cover_Vi_1600.jpg | 9cf85432064bdb5d86707a0852d17b5a8046c4451123a7b88a971c0e1f9668e2 |
| TKCVH2026_C28_Cover_Vi_1600.jpg.sig | 88aa0f8144184beb744e9af4494790f531bb0e00fc37c71788598d0e56b2b052 |
| TKCVH2026_C28_Cover_Vi_2400.jpg | 11f5f46a41c4b93702168b2f42cf80346ac41b74ef937ca664fff55ba4d0df42 |
| TKCVH2026_C28_Cover_Vi_2400.jpg.sig | 9930e7b791df332e1a9cdb0cadb284ba16b5154bdb594dbe382b8f5b5d3d75d1 |
| TKCVH2026_C28_Cover_Vi.psd | 569da763c891811acbd37e8036020b34916becc384e1cae2158271b197f7493c |
| TKCVH2026_C28_Cover_Vi.psd.sig | 3cc040d0b0bd74120699eed42c21f4afc16f90abdc2e4d7946a9971f8b44c7b9 |
| TKCVH2026_C28_EN_Diamond | d237be373009674dfde4ee2ac57ee6de133bda1ea3574e0fa599187b864f4b0f |
| TKCVH2026_C28_EN_Diamond | c14860097179f230bc16435f3e585d0262b4374d0cdd174c94d89d2f706282db |
| TKCVH2026_C28_EN_V1 | 28b389a91cb7e5959f5a3c643f27a30c144da0448e50c17332916b20a1404765 |
| TKCVH2026_C28_EN_V1 | f3af7c733c63c7f0ffa2f3eab9d71747e60043d7825f9e560deff118da3083f6 |
| TKCVH2026-C28-VI_Manuscript.txt | 70189896794777405f6aa4084ca7dade90b8ed6f0a57eccad9ce7398d2f303ec |
| TKCVH2026-C28-VI_Manuscript.txt.sig | 27e85644ed1edc8c28c3c23a769d867ecfc0b7a12feca0f25fd012ae64c6a87f |
| _ | 92e3d203a44b43c07d9b7eb3f4d448ef6453088050ff6434dee5021d9b579e25 |
| _ | 0f9d00fb66971efcd449acfa31f8faa453ccdfb89a63d91ed86e371ba9ec49aa |
| TomTatTongHop_C28-2026-VI.odt | fb7427c0efe98ad50c0eee4a5a9328321d10319ceb8a3ffa3ab1ce415424fdf0 |
| TomTatTongHop_C28-2026-VI.odt.sig | 3ab141c2b15106498a78f0be908acc6da3a681d9e4150ba194e6f0f29eaa0580 |
| TỔNG | 522bcf12bbc6d19028551251f50ee1313bef5b26caaf2a7fa61f5b72564d09b5 |
| TỔNG | 9e0cf88aea33a798ebc6432bc9c1ec647815d922d6df8adbdd1c31c1a126e024 |
| TranPhapBatQaiThietVi_TrungQuoc-VietNam.odt | c4d49dc48643003c5e14166af5a8e598472f9ef53eded1070d0ff97877c6e7fc |
| TranPhapBatQaiThietVi_TrungQuoc-VietNam.odt.sig | e22b438bf40d5041af00f5b90fd9245ebe33fbfa20901c011a335a3eba0d61f8 |
| TranPhapBatQaiThietVi_TrungQuoc-VietNam.pdf | 07d38004e451529f3e84c558500bdb0053f38bb8bad972f524eac35e3c6c1d30 |
| TranPhapBatQaiThietVi_TrungQuoc-VietNam.pdf.sig | d0e418117e2161c451c2c674f6230ac10125fb5626bb838d5dfd2f9df789acd7 |

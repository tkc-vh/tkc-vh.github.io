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
| **Effective Date** | 18 October 2026 |
| **Signing Date** | 18 October 2026 |

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
| ./TKCVH2026-C17-EN_V5/mimetype | e468e350d1143eb648f60c7b0bd6031101ec0544a361ca74ecef256ac901f48b |
| ./TKCVH2026-C17-EN_V5/toc.ncx | 746920810fe1b0823374edc1b1b02eb5a860c1d4154323954b30de7fea46e330 |
| ./TKCVH2026-C17-EN_V5/nav.xhtml | 6693b380f8c720c01bd3228b4ace67fc1630ac7991bf73b21399f7a1761b78c1 |
| ./TKCVH2026-C17-EN_V5/TKCVH2026-C17-EN-V4.html | 505f0a627e457eb9ba15e97336d52a4441b9f9ceb8e0188616aeb0b192cfa14b |
| ./TKCVH2026-C17-EN_V5/content.opf | 43cd85299a8ded2efc2727b8181a2f7e55d62603087e20e37c880c36ee0079da |
| ./TKCVH2026-C17-EN_V5/META-INF/container.xml | e360f1928c45814866c3361c946e9dc3487cbae6488c5fb6016eb2e5953bec6e |
| ./TKCVH2026-C17-EN_V5/images/image8.jpeg | 025122e7f16cb64fdf410e220bb0d999aee2a3d865f1a29e7279b244e5b10fb7 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN10.jpg | 24bb24495a85eb8dd17a4e3c4413cd28998914be62bcca0f6e6c7217ca1b35f3 |
| ./TKCVH2026-C17-EN_V5/images/ThongbaoBanquyen.jpg | a232af8bfac47c4210eea3916f0dd533d4d2460b26f507f17cd5f3b62a2fbcda |
| ./TKCVH2026-C17-EN_V5/images/image4.jpeg | ed7b300c99ac1ca3f51fed6c82b7af4ab66cd9fa023caccec91c5eeb61104ee0 |
| ./TKCVH2026-C17-EN_V5/images/image-8.jpg | daa30cab21c05d4b596f20932b6cd50ca168083d6e603c3920a92e0628427f29 |
| ./TKCVH2026-C17-EN_V5/images/index-10_1.jpg | d0b857420f27217994a121abf4f78469c5d9d7df072397121994a2bb1fa0783b |
| ./TKCVH2026-C17-EN_V5/images/image-4.jpg | 57a4d2792984bc8914073a8529ebed2faa59eb4fcaf1714ae82549b412f146e0 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_TKC-VH-LogoAn-ChanNgaVinhQuang.jpg | b008647db47ccecb33380e7089966cd0c3b9f7248a88bc3a5c17393d93f517ad |
| ./TKCVH2026-C17-EN_V5/images/image12.jpeg | 5eabdd7770bebb9b06c9fc57ec05dd050fd461b3b280116f7bc3f14e9b0ab030 |
| ./TKCVH2026-C17-EN_V5/images/image21.jpeg | 8248ff24016c31dee092d3947785735200845da506b61ead56f3bf74f741b3a6 |
| ./TKCVH2026-C17-EN_V5/images/image28.jpeg | bafe3cae3e27a556c2d85eff65cdc096e292c5f6beaee9a44bee19ffc164a4b9 |
| ./TKCVH2026-C17-EN_V5/images/image-13.jpeg | 3da2d9384f806f5afd31c0062e77cafa4513f95d97b9de73bf62970c802ca924 |
| ./TKCVH2026-C17-EN_V5/images/image-27.jpeg | f24cf79a149bbe609123ef800cea25d1fb37dc4129cf82291e7f09b6d42a3ed4 |
| ./TKCVH2026-C17-EN_V5/images/index-5_1.jpg | 29110bc0016d3eda1cb5d868dded3b96e4d6a1a3e34c832291712d554c935a2f |
| ./TKCVH2026-C17-EN_V5/images/image43.jpg | d70ab0e4d849bc398bd68449c7b7a0dd9c523887793b916dd77dbd3f621e11c1 |
| ./TKCVH2026-C17-EN_V5/images/image.jpeg | e6d0c5f7310a558d804637128616eea96bf5256402105ec335b73ca45fcc8558 |
| ./TKCVH2026-C17-EN_V5/images/image-15.jpeg | 11a8944dbe7ccd2488fff49c48f54c57f9526846c0a7bca637a61c8f19bef299 |
| ./TKCVH2026-C17-EN_V5/images/image-6.jpg | 9195da5b05c6b7150cc316b1606ea47e58ac0ccd0b875c48781b1af83e81efd2 |
| ./TKCVH2026-C17-EN_V5/images/image36.jpeg | 95595e31739822ee9b6fcdadd03cac82a89288f0bca6c50c241020aafe44f39c |
| ./TKCVH2026-C17-EN_V5/images/image22.jpeg | f51d33fe3b1a638965686e6bf907e5e89cc1e5b2a1eafd19fd0230ef59e1903f |
| ./TKCVH2026-C17-EN_V5/images/image-2.jpg | 7c2f61ce35bf1b10b6c8fa4c93f1c4466acb19144433e0dbec5da287c854c834 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN9.jpg | c81bd86021afe42aa1588d244d0ed568b290420365e4bfb69ecccb00337a8fca |
| ./TKCVH2026-C17-EN_V5/images/image-6.jpeg | 15e324c68cb10628b1c6e6ad0822a3d702f937ecd416189db823ef347006572a |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN2.jpg | 6b5673c23b4db0040ba62aee7e902e91b3a54b3ee76f97940b25bd06c88a9e56 |
| ./TKCVH2026-C17-EN_V5/images/HandWrite_Sinature.jpg | b3ab9d5425fd54ce2b567c8088ecc4eb37f6c0255aea1ec9587049858e304765 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN13.jpg | 2c0a193dd3606f4a4d51a8c05a93d7548f5530b7da4e428e23c584576b8fd733 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN1.jpg | 1ca6cbe12fe6f40b40942455416a822abf622180e3b2ddcec6bd319f46fe01d2 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_ChuKyTay-CotCoTKCVH.jpg | 1273a1a37ff98b86a82e0c83374e80aaad3e95027a43d8a3e8a11e0d208200b6 |
| ./TKCVH2026-C17-EN_V5/images/image-25.jpeg | bd744815753e31476016b74d9b8dd7dcc404a54e9f0443f13bcf246f1363aad0 |
| ./TKCVH2026-C17-EN_V5/images/image7.jpeg | cdf25088deaf40f3e96bc0b4c493443b4c6ab7e08d1cfc4d86bde08ee20b004b |
| ./TKCVH2026-C17-EN_V5/images/image-22.jpeg | 74d59aa709d48687787fbecc244332844ce3141a7467b3e158eb69e8fab03c58 |
| ./TKCVH2026-C17-EN_V5/images/index-2_1.jpg | 3388c58b9372e3f1e6dc89e2866824bda6a58047a44ac8eaff91f58021aeba1d |
| ./TKCVH2026-C17-EN_V5/images/image-8.jpeg | c1c1f58d1bccdcb6fdb0c009402a6996b32162998076a948201f82c5d468a955 |
| ./TKCVH2026-C17-EN_V5/images/image13.jpeg | 1292f1357e87c601c55991148dd393f0d2f8ddcbceee9d0aa4bdb08aa2acc48f |
| ./TKCVH2026-C17-EN_V5/images/image-18.jpeg | f4646cd91428f089ec462b16d94e151c8635a87aa02e4a75533044d0a5f6c505 |
| ./TKCVH2026-C17-EN_V5/images/image-26.jpeg | 6666ab2c079a249dd63b3f4d50dc2805ad7bac93c7fa47132964c4f8ac6eb806 |
| ./TKCVH2026-C17-EN_V5/images/image16.jpeg | 9a80d0b8e6c2b779a6baff99bfd571a3f8fdf03e76b887c84091cbab1452b834 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN3.jpg | fca35c07c08c6fd950a26ef97ae02d882162c08b150f6bd68992c2becb6a5682 |
| ./TKCVH2026-C17-EN_V5/images/image-1.jpg | 9f04ff9cf162c5363772111c6e3a47edce695da2e2606d59e61800cbf4aeda8c |
| ./TKCVH2026-C17-EN_V5/images/image2.jpeg | bad217a0ff58be83fe56b3f8b6b12d5e19e4fcbe80d7ee938b67f019336066fc |
| ./TKCVH2026-C17-EN_V5/images/image-24.jpeg | f39c4840f7a35ee08e2161a4025867604828f7ef194626dbf87668af92e49a23 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN8.jpg | b6eab2b3c996a06f20bb5a60473db40359fca9bbad05c45bd6f3de6aed62c1b2 |
| ./TKCVH2026-C17-EN_V5/images/image-29.jpeg | 6238eb96cbd3011ea8f730331cba36d67d6ebd7e2a6d4ef64e104df2e7043b55 |
| ./TKCVH2026-C17-EN_V5/images/image-20.jpeg | 9ff677fb7ab400205d35d61eae8fc09fe4b2642b2b7468cefff6cd5ea8e7a7a9 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN4.jpg | 4b618f8c4ae53f880ebdf32be45fda24c094722a6d4cf8bc6981bb6cceaf592f |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN15.jpg | 488a4fb90e64684e266cce1fc53b5a83d3785e8e6de3a938814618a3d8e47402 |
| ./TKCVH2026-C17-EN_V5/images/index-6_1.jpg | 0c21ad354d7f46e6664a4aaf5d48e5a60de882fd23a740ae82cdab632b3740d5 |
| ./TKCVH2026-C17-EN_V5/images/image19.jpg | b29ea73e20d81f4700d4247712e33bf3a579f8eb52ec0d33f2cd225bcc50efc4 |
| ./TKCVH2026-C17-EN_V5/images/index-11_1.jpg | 6fae76ad0b973ebeb347dd71633b5f6f56cef0711389ca51376df251429b0686 |
| ./TKCVH2026-C17-EN_V5/images/image-5.jpg | d010759e507208eb07da00bc755fac19705a063532dbd482fbc9e1402b047986 |
| ./TKCVH2026-C17-EN_V5/images/image31.jpeg | c9c7552ec3adfb42c25008d277c9db44e6c2f34e378536e716a74b60eb794295 |
| ./TKCVH2026-C17-EN_V5/images/image45.jpg | 2d42fe3591dcbac0fd48019229916f968c1ac5283393e94aa46a19af59faa6a2 |
| ./TKCVH2026-C17-EN_V5/images/C17CoverEn1200.jpg | eb83e1ce5e2f7fb7d5ef8ae3c976ef320946bac3740d4504e24d840ae8445cb7 |
| ./TKCVH2026-C17-EN_V5/images/index-3_1.jpg | caef7d0f3469d41394152b9ce8e35cd8427b9b89aa565b8545e6faef8df0c87c |
| ./TKCVH2026-C17-EN_V5/images/LOGO.jpg | 2e8b7503934bf727e5d092cf7d16d2ea2b22a05b0b4e5a008f7b2da60369f4c9 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_TraiTimTinhYeu.jpeg | 2c0ec96f71b17787104c12977919051dcddbde90a2b1a897cc741f6f14524b1e |
| ./TKCVH2026-C17-EN_V5/images/image-3.jpeg | 9ab94f538a42d6394976deefbb7ccec180ebc7cf63c2cfbda70e38a564addc3e |
| ./TKCVH2026-C17-EN_V5/images/image9.jpeg | 234c5a159fbcb2717019a8eedda9d2aa861e43baa359924153f83308c7b33213 |
| ./TKCVH2026-C17-EN_V5/images/image12.jpg | e18e766b9ca15318d7279b1741f6bbfe33c36839e23d4ee7d8cc3c38ee2db90a |
| ./TKCVH2026-C17-EN_V5/images/image23.jpeg | 6b17c416bd541ef9160f55e94ffb8c4357461ca91ad9a31dcad237d532a6316e |
| ./TKCVH2026-C17-EN_V5/images/image32.jpeg | 4e3d5cf897fc1b6deed69c5b405f6127878137dbec87a4e909aa3125c23b80e8 |
| ./TKCVH2026-C17-EN_V5/images/image18.jpeg | f04f726b10ed0d50a0cfb6f3ff0e5e75e527b8ae71e26115cb8571eedbce918a |
| ./TKCVH2026-C17-EN_V5/images/image25.jpg | 0ef26ffea8d7fe713bbe2258066f82a8edf82186790126877fa7cf3fcaa1aedb |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN6.jpg | e95252e42d0ddd415097d72c34b19bc56a407c91b278ace7d577b7277c8dc1b2 |
| ./TKCVH2026-C17-EN_V5/images/image1.jpeg | a53a8214a57be3bdca92e7bb05dd4b3dc3eadced1388a23eb605a2ebb6c52499 |
| ./TKCVH2026-C17-EN_V5/images/image29.jpeg | e6a9951c2419036a8674e82eb18e094eea0e40cacc7e122b0d86bc145bd48161 |
| ./TKCVH2026-C17-EN_V5/images/image-4.jpeg | 275f9334e74b3d241a59df3110f64fd87a8aad279b8e40aed43dfd6eab529bd0 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_DaubanQuyen.jpg | 4b1543aa7bf290f6616a8f659912fe66713658f21a25a4164227e910da16f195 |
| ./TKCVH2026-C17-EN_V5/images/image44.jpg | 52390acf9c1dbd50cc39c9fe7dd112feb6075de45b6aba8d8de2f78e8725c739 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN5.jpg | fd8434fdb065b015bdd27aa5960e634e08a7171acfb06825fc110b8182821482 |
| ./TKCVH2026-C17-EN_V5/images/image-17.jpeg | 5f04ca7365b332c83852e855770fa39ff89a2bd8914b5e21604d05c2dd404ae0 |
| ./TKCVH2026-C17-EN_V5/images/image-12.jpeg | d82b20f2386fe690adcdc6a288c672b753fa04cfde29328d991d40b2cb435b71 |
| ./TKCVH2026-C17-EN_V5/images/image42.jpeg | 8959b762faab82adc0822a24408e7935dea5e01af7f55045c5e2e53a793c1f6b |
| ./TKCVH2026-C17-EN_V5/images/image-5.jpeg | 0a123db106433e73847751a78075cd2578643ca722be94d33e324d488a160ba8 |
| ./TKCVH2026-C17-EN_V5/images/image-28.jpeg | 55e1aae2f44ef06a58b5fb659910655362c01974a7f6e14d8b73be25c638183d |
| ./TKCVH2026-C17-EN_V5/images/image6.jpeg | 381ea9cf91900ed6fe6774d7fa9c5a6fafd2d8d688a6afa8f7a135819f08ef9f |
| ./TKCVH2026-C17-EN_V5/images/image26.jpeg | 1bbd119e51235235c883d3f6b33caebd638f7c8fc13c48ab8efd0bb6f1f90864 |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN11.jpg | 46cafaf410a8e88166490a7ea97e5c42801920fbb94c8c317069dcbf62cc84ea |
| ./TKCVH2026-C17-EN_V5/images/image33.jpeg | e59003644b090a8af2dee1dd10a04aec46400eabc2f54f88968c6cf8bb8a6f5c |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN7.jpg | faef1f02d1f71313adf2677ce60d24c1d03718f8795214ac3667fade6653ddee |
| ./TKCVH2026-C17-EN_V5/images/image27.jpeg | ed7f70db8bd1df8b8101b82dc341159d9a4bbc9a6bbbe96ec735285c94d86559 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_VienKimCuong.jpg | db60080cb77bd9df5d8ae9064ca9c402db5f87afae9d498341bf6f7aefac83ba |
| ./TKCVH2026-C17-EN_V5/images/image38.jpeg | 97e634dacd5f28789fff10887d3fa277ba963ead75ffaeff7a8a5a274c186512 |
| ./TKCVH2026-C17-EN_V5/images/TKC-VH-LogoAn-ChanNgaVinhQuang.jpg | a190bed8b2ff424e25e75827a87957eaba0b90d97ba8b822f3790b804b61e413 |
| ./TKCVH2026-C17-EN_V5/images/image-10.jpeg | 0c5035bc0afcc7fc7d7801d5bd163d2d6f025d2ccf733c75c5a7ad74da433f36 |
| ./TKCVH2026-C17-EN_V5/images/image-7.jpeg | 6f1f9bb3b0013b4418e28e1e791c3a7124e930a111c795e7001c2a521e57efff |
| ./TKCVH2026-C17-EN_V5/images/image35.jpeg | 874b638bc5c29c190c6238bc267629dfb13d4498ac1e0a678236b4516ad86605 |
| ./TKCVH2026-C17-EN_V5/images/image-30.jpeg | ffe6e66ccc5a3dcc7a780dc9dd0949cd8b9ac5f21e868bc580a7389c0b9fce92 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_ChuKyTKC-VH.jpg | 9c44b5d53adcc4043d560742b41fb22c2f8c5c5d7ee742710367c20eb46a4bac |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN14.jpg | 81b6c7bf718674976dc9e2173e245d825984be190ae650655c37c033fa536eec |
| ./TKCVH2026-C17-EN_V5/images/image-2.jpeg | 0dc76fe120fafba3d7c96dcddc191e42d1fb27fc974a1abebdc7af8469c2bab4 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_DieuTamName_VajraHrydaya.jpg | 8593a3306a8a55b78e3f682333c9fece39789b388fc9bc8ff4cb2e99fe64847b |
| ./TKCVH2026-C17-EN_V5/images/image-14.jpeg | 901d09ce6c1dfef0c473d7951ebbf3595a29d0cfb73d75df591b1fb5c7276310 |
| ./TKCVH2026-C17-EN_V5/images/index-1_1.jpg | d8557ce7a2d7435bd1e30b45c18f5c3b626b5ab1cc86799e9973977e54b09810 |
| ./TKCVH2026-C17-EN_V5/images/image10.jpeg | 7b3028a5ac5483803640d0bc8062857dee150b56f8dca5322465d932855656b6 |
| ./TKCVH2026-C17-EN_V5/images/image30.jpeg | c39ffe4a5a4404fbeb1090774226bcad34b840f8bd5ee4e3da858ad2ba3b15c1 |
| ./TKCVH2026-C17-EN_V5/images/image14.jpeg | 3881d9f2e9d181793b33afdb518ad6a49d02a761bc65819cd6c5610b45d07661 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_TKC_VH.jpg | 15b9fbd5f114dc05210c7a64dc928910a30bfceed0d439c2ff6827ac854a6526 |
| ./TKCVH2026-C17-EN_V5/images/index-15_1.jpg | 2dda9bc18b1737806e647cd5d8fe0fa51434d65bc550e7fe273b4e059a9fa3de |
| ./TKCVH2026-C17-EN_V5/images/image-16.jpeg | 7af5a07102bbbe7ba2656a7b998f508b7af7b4464fcba1f70874c83a0d86af83 |
| ./TKCVH2026-C17-EN_V5/images/TKC-VH-Card.jpg | 7525a098b2543dab77fcf4472170fa0ef0488ef63dcd16e52b01cf31d632759f |
| ./TKCVH2026-C17-EN_V5/images/index-9_1.jpg | 03d47e345fbe6c1bf7e749634b25998cf96633ba8851494ea219197e52cef919 |
| ./TKCVH2026-C17-EN_V5/images/image11.jpeg | 8959b762faab82adc0822a24408e7935dea5e01af7f55045c5e2e53a793c1f6b |
| ./TKCVH2026-C17-EN_V5/images/Logo_TKCVH_20072026.jpg | b9fd0dbfd6e3f0b728d888f4653e344382c222c1029597552f383fe051bc9293 |
| ./TKCVH2026-C17-EN_V5/images/index-14_1.jpg | 963335f37e919455e62e75807d6691858d83a014f3e87a429f9552acd5de8873 |
| ./TKCVH2026-C17-EN_V5/images/image3.jpeg | fcee326f21a246b8879006485c62fccdb92c30ad06ddd989eb3daf65119cbafd |
| ./TKCVH2026-C17-EN_V5/images/image37.jpeg | 5b854c790ee8e488d431f762dcdad99166938f4f1168c70dbab9e59ee6b712ab |
| ./TKCVH2026-C17-EN_V5/images/index-8_1.jpg | 4878ba3dd43013141086cbb06d410f1d50926af2d015a563bcdea608d4dfc1ce |
| ./TKCVH2026-C17-EN_V5/images/C17-2026-EN12.jpg | eda1cd876055cfd3912f5f860dd7f759c45940d483b1a5940d4908ee9fb00cdd |
| ./TKCVH2026-C17-EN_V5/images/image18.jpg | 4b2cc38648a815b87eb0c9199071d9de825c63ceed2533fd671e4868093ab68c |
| ./TKCVH2026-C17-EN_V5/images/index-13_1.jpg | 7cad6e122488eaae96a3efca834e758cc8cc42b44724b30ead43f87593f3f47a |
| ./TKCVH2026-C17-EN_V5/images/image-7.jpg | 22e2ca866c30decefb174095bf4660f0acb2f30a70fac88223dea1feff27d44b |
| ./TKCVH2026-C17-EN_V5/images/image17.jpeg | bd1e9cce9cd0d396bb006ec0da8f383540d6d0c83b959d9620444fc69be3f679 |
| ./TKCVH2026-C17-EN_V5/images/image19.jpeg | 078c27cbb54176d2473fbb4e40bd0819ba67c5af8473fec125d4df1a9b04b364 |
| ./TKCVH2026-C17-EN_V5/images/image-19.jpeg | 516613eeb21402cd2e4ca41bc37bef69a4a65fd0faec7d76d602fe2a12f1ea14 |
| ./TKCVH2026-C17-EN_V5/images/image-21.jpeg | 89749f362f1135c447ca6755da261efb205b78931a06324ed7fa6ec9738a7118 |
| ./TKCVH2026-C17-EN_V5/images/image-23.jpeg | fafa8b82619bade9b8f7425da52f90813daffcfae174e84ea84a17e875acf290 |
| ./TKCVH2026-C17-EN_V5/images/image-3.jpg | eca90e3d1f39dc5586efa4d4206544480e26cd3844e44668dca96961a2824770 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_DauVanTayNgonTro.jpg | 85c919bdba321e7d01e87ed247124b57f92422170c6b52ca4d99e9c3c7ed6fb3 |
| ./TKCVH2026-C17-EN_V5/images/image34.jpeg | 5e3fd4326333239d4093f16771eb8a20a61f752409c2b5f67ea1171e3c928801 |
| ./TKCVH2026-C17-EN_V5/images/image40.jpeg | 039477344e14f763ddc05e087da57a003b39795ca7cb074c27a4ec8aac35a589 |
| ./TKCVH2026-C17-EN_V5/images/index-7_1.jpg | edf18af64d3d4af5c0c9c7f0ddd3f790314cf8c7b236bde9af3f91577a8519bb |
| ./TKCVH2026-C17-EN_V5/images/image5.jpeg | 2133b6531bdf9a6691c58d137ac966e72d61cb5c460655024ebbda006087ae5e |
| ./TKCVH2026-C17-EN_V5/images/index-12_1.jpg | f93499f4f8e285576e581c0b978b6a68dd83a5c9f28232a0984165b1436fdff6 |
| ./TKCVH2026-C17-EN_V5/images/index-4_1.jpg | 9a29aa026729ba7d28931a39797d7160a5fae9c5d980cf9a46d261936ea4171f |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_DauVanTay3NgonPhapLenh.jpg | b07cd3794f4eabd31b536141ad9321f94d6e5329eb97a9a3815a1091277369b5 |
| ./TKCVH2026-C17-EN_V5/images/image-9.jpeg | 6d8e4c78c669a3a3e0ec2e6e08f361b278bd08722136577faae86eec312a7569 |
| ./TKCVH2026-C17-EN_V5/images/image20.jpeg | 57232d3770ee608d7838191039bac8140c11d008593153d610664c86c308c9de |
| ./TKCVH2026-C17-EN_V5/images/image15.jpeg | 70f291111bd55f7e95ff5314e6d072aa651cf394691c887208fffd11f2896852 |
| ./TKCVH2026-C17-EN_V5/images/CROP-CIRCLE_Logo_TKC-VH.jpg | bff3db2b4872e239fa9f3ac8fbf6fe3c466c62b989ec64d971c270a7628d8d9d |
| ./TKCVH2026-C17-EN_V5/images/image-11.jpeg | e5a79da3abf649a7f6530f75ae181f66f4ced432ce86d55df237fee0838740a7 |
| ./TKCVH2026-C17-EN_V5/styles/page_styles_PrincePDF.css | caf278180c035cfd76e48a8defb1e186c5a7ff14d0af10424b132b1a213f5cd3 |
| ./TKCVH2026-C17-EN_V5/styles/stylesheet.css | 4969019599356117e9dcf195f148f40b0e609c1e6598bef768283883058344aa |
| ./TKCVH2026-C17-EN_V5/input.pdf | ac330a84909c024332fcb3adf07ddbf953d64c0c6390cc6980016c6b6955b2dd |
| ./TKCVH2026-C17-EN_V5/output.pdf | 3ea327c2bc2d11e5760228dce7b2eb0aaaab8646420d8c59861b7cd454454bac |
| ./TKCVH2026-C17-EN_V5-KDP.pdf.sig | 980b1a8f8c2b1f487b3ced412005de33374c55b19fb5bef1493576cc841ec859 |
| ./TKCVH2026-C17-EN_V5-KDP.pdf | 3ea327c2bc2d11e5760228dce7b2eb0aaaab8646420d8c59861b7cd454454bac |
| ./KDP/README.md | 22ae8f69022752fee2bcc4e9551020eb65aadc2550c86c229a7c673afdfe4c8b |
| ./KDP/TKCVH2026-C17-EN_V5.epub.sig | 38f008d2675717e9b365611c571790ffecfeabb3053b4ac29185fefeb470345e |

# ⚖️ DIGITAL SIGNING POLICY & COPYRIGHT AUTHENTICATION FRAMEWORK
# CHÍNH SÁCH KÝ SỐ & KHUNG XÁC THỰC BẢO VỆ QUYỀN TÁC GIẢ

> **Official Declaration of Intellectual Property, Cryptographic Authentication, and Custody Standards**  
> **Tuyên bố chính thức về Sở hữu trí tuệ, Xác thực mật mã và Tiêu chuẩn lưu trữ**
>
> * **Author & Copyright Holder / Tác giả & Chủ sở hữu:** TRAN KHAC CUONG (Pen Name / Bút danh: *TKC-VH*)
> * **Repository / Kho lưu trữ:** [tkc-vh.github.io](https://github.com/tkc-vh/tkc-vh.github.io)
> * **Primary Jurisdiction / Thẩm quyền tài phán chính:** Socialist Republic of Vietnam & Applicable International Copyright Treaties (*Berne Convention, WIPO Copyright Treaty*) / Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam & Các Điều ước Quốc tế về Quyền Tác giả (*Công ước Berne, Hiệp ước Quyền tác giả của WIPO*).

---

## 🆔 1. Digital Identity & Cryptographic Credentials / Định danh Số & Chứng thư Mật mã

### EN
This repository is associated with a verified cryptographic identity for independent authentication of authorship, integrity, and source authenticity. Official public keys and signed statements are published via this repository and the author’s official portal.

### VI
Kho lưu trữ này được gắn liền với định danh mật mã đã được xác minh nhằm tự phục vụ mục đích xác thực độc lập về quyền tác giả, tính toàn vẹn và nguồn gốc chính thức. Các khóa công khai và tuyên bố ký số chính thức được phát hành trực tiếp qua repository này và cổng thông tin chính thức của tác giả.

| Credential / Thông số định danh | Technical Parameter / Giá trị Kỹ thuật |
| :--- | :--- |
| **Legal Name / Tên Pháp lý** | TRAN KHAC CUONG |
| **Pen Name / Bút danh** | TKC-VH |
| **Official Email / Email Chính thức** | `mr.tkc99999@gmail.com` |
| **GPG Key ID / Mã Khóa GPG** | `5196E6B626281F7A` |
| **OpenPGP Fingerprint / Vân tay OpenPGP** | `8509 DBA6 32D2 7AAC E79A C507 5196 E6B6 2628 1F7A` |
| **SSH Public Key Fingerprint** | `SHA256:uu91Aw6/jbLFdXJwbhRbvFi69fHJn2NCyZ+fKK1vbQo` |
| **Algorithm / Thuật toán** | RSA 4096-bit (PGP/GPG) |
| **Trust Level / Mức độ Tin cậy** | Ultimate / Self-Certified Primary Key (Tối cao / Khóa chính Tự xác thực) |

---

## 📜 2. Purpose & Legal Intent / Mục đích & Ý niệm Pháp lý

### EN
This document establishes the official **Digital Signing Policy and Cryptographic Integrity Standards** for all manuscripts, research files, assets, and metadata hosted within this repository.

The primary purpose of this framework is to create an **unalterable, verifiable, and legally binding digital footprint** to protect the author's moral and economic rights under copyright law. By combining **OpenPGP/GPG asymmetric encryption**, **SHA-256 cryptographic hashing**, and **Git immutable ledger history**, this repository serves as an independent, third-party timestamped record of original authorship and continuous creation.

### VI
Văn bản này thiết lập **Chính sách Ký số và Tiêu chuẩn Toàn vẹn Mật mã** chính thức cho toàn bộ bản thảo, tài liệu nghiên cứu, tài sản và dữ liệu đặc tả (metadata) lưu trữ trong kho lưu trữ này.

Mục đích cốt lõi của khung pháp lý này là tạo ra một **dấu vết số không thể sửa đổi, có thể xác thực và có giá trị ràng buộc pháp lý** nhằm bảo vệ quyền nhân thân và quyền tài sản của tác giả theo luật sở hữu trí tuệ. Bằng cách kết hợp **mã hóa bất đối xứng OpenPGP/GPG**, **mã băm mật mã SHA-256**, và **lịch sử ghi nhận không thể thay đổi của Git**, kho lưu trữ này đóng vai trò như một hệ thống bằng chứng độc lập, được đóng dấu thời gian (timestamp) bởi bên thứ ba về quyền tác giả gốc và quá trình sáng tác liên tục.

---

## 🔐 3. Commit Signing & Verification / Chính sách Ký số Commit

* **Enforced Signed Commits / Bắt buộc Ký số:** Every single commit pushed to the primary branch (`main`) **must** be cryptographically signed using the author's official GPG key (`5196E6B626281F7A`).  
  *(Mọi commit được đẩy lên nhánh chính (`main`) **bắt buộc** phải được ký số bằng khóa GPG chính thức của tác giả).*

* **GitHub Verification / Xác thực trên GitHub:** Commits without a valid, GitHub-recognized `Verified` status badge are non-canonical, unverified, and do not represent official authorial releases.  
  *(Các commit không có nhãn xác thực `Verified` màu xanh đại diện trên GitHub đều bị coi là không chính thức, chưa được xác minh và không đại diện cho bản phát hành của tác giả).*

* **Branch Protection / Bảo vệ Nhánh:** The `main` branch is governed by strict protection rules that forbid unsigned commits or unauthorized force-pushes, preserving the strict chronological chain of custody.  
  *(Nhánh `main` được quản lý bởi các quy tắc bảo vệ nghiêm ngặt, cấm các commit không có chữ ký hoặc thao tác `force-push` trái phép, nhằm bảo toàn chuỗi bằng chứng theo mốc thời gian).*

---

## 📂 4. Archival Architecture & Versioning / Cấu trúc Lưu trữ & Phiên bản

To maintain absolute transparency and demonstrate the chronological evolution of the works, directory trees are structured under a strict custodial model:  
*Để đảm bảo tính minh bạch tuyệt đối và chứng minh quá trình phát triển tác phẩm theo thời gian, cây thư mục được tổ chức theo mô hình quản lý chuỗi chứng cứ nghiêm ngặt:*

```text
assets/TKC-VH{Year}/
└── C[XX]_[Chapter_Title]/
    ├── V[N] /                     <-- Active/Latest Official Release (Bản phát hành chính thức hiện hành)
    │   ├── README.md              <-- File Hash Manifest & Signatures (Bảng kê mã băm & Chữ ký số)
    │   ├── SHA256_Fingerprints.txt
    │   └── [Files].sig            <-- Detached GPG Signatures (Các tệp chữ ký GPG độc lập)
    └── Archive/                   <-- Historical Legal Ledger (Thư mục Lưu trữ Lịch sử Pháp lý)
        ├── V1/
        ├── V2/
        └── V[N-1]/
```

1. **Current Active Version (`V[N]`) / Phiên bản Hiện hành:** Located at the root of each chapter folder, containing the latest release manifests and detached signature files (`.sig`).  
   *(Nằm ở gốc của mỗi thư mục chương, chứa bảng kê khai và các tệp chữ ký số rời (`.sig`) của bản mới nhất).*

2. **Immutable Archive (`Archive/`) / Lưu trữ Lịch sử Vĩnh viễn:** All prior drafts, revisions, and historical iterations (`V1` through `V[N-1]`) are preserved indefinitely inside the `Archive/` directory. These records are never deleted, providing irreversible evidence of continuous creative effort and prior ownership.  
   *(Tất cả bản thảo, bản sửa đổi và các phiên bản lịch sử trước đó (`V1` đến `V[N-1]`) được lưu trữ vĩnh viễn trong thư mục `Archive/`. Các bản ghi này tuyệt đối không bị xóa bỏ, tạo thành bằng chứng không thể đảo ngược về quá trình sáng tác liên tục và quyền ưu tiên sở hữu).*

---

## 🛠 5. Independent Verification Guide / Hướng dẫn Xác thực Độc lập

Any court of law, publisher, auditor, or third party may independently verify the authenticity and integrity of any published artifact in this repository without relying on centralized trust.  
*Bất kỳ cơ quan tài phán, nhà xuất bản, bên kiểm toán hoặc bên thứ ba nào cũng có thể tự xác thực độc lập tính chân thực và toàn vẹn của các tài sản trong kho lưu trữ này:*

### Step 1: Import Author Public Key / Bước 1: Nhập Khóa Công khai của Tác giả

```bash
gpg --keyserver keyserver.ubuntu.com --recv-keys 5196E6B626281F7A
# OR import directly from local repository asset / Hoặc nhập trực tiếp từ kho lưu trữ
gpg --import "signatures/TKC-VH-public-key.asc"
```

### Step 2: Verify File Integrity / Bước 2: Kiểm tra Tính Toàn vẹn Tệp (SHA-256)

```bash
# Linux / macOS:
sha256sum -c SHA256_Fingerprints.txt

# Windows (PowerShell):
Get-FileHash "your_file.epub" -Algorithm SHA256
```

### Step 3: Verify Detached GPG Signature / Bước 3: Xác thực Chữ ký số GPG Độc lập

```bash
gpg --verify "TKCVH2026-C14-VN_V5.epub.sig" "TKCVH2026-C14-VN_V5.epub"
```

> **Result Criteria / Tiêu chuẩn Kết quả:**  
> A matching SHA-256 digest combined with a `Good signature from "TRAN KHAC CUONG (TKC-VH) <mr.tkc99999@gmail.com>"` provides absolute cryptographic proof that the file was authored and signed by the designated key holder on or before the recorded timestamp.  
>
> *(Mã băm SHA256 khớp 100% kết hợp với thông báo `Good signature from "TRAN KHAC CUONG (TKC-VH)..."` là bằng chứng mật mã tuyệt đối khẳng định tệp tin do chính chủ sở hữu khóa tạo ra và ký số vào hoặc trước mốc thời gian được ghi nhận).*

---

## ⚖️ 6. Legal Notice & Copyright Statement / Thông báo Pháp lý & Tuyên bố Bản quyền

1. **Reservation of Rights / Bảo lưu Quyền:** All rights reserved. No part of the manuscripts, source files, or commercial publications referenced herein may be reproduced, distributed, or transmitted in any form without prior written permission from the author.  
   *(Tất cả các quyền được bảo lưu. Không một phần nào của bản thảo, tệp nguồn hoặc các ấn phẩm thương mại trong này được phép sao chép, phân phối hoặc truyền tải dưới bất kỳ hình thức nào nếu không có sự đồng ý bằng văn bản của tác giả).*

2. **Evidentiary Weight / Giá trị Bằng chứng:** The cryptographic signatures, git log history, and public timestamps on GitHub constitute valid electronic evidence under international law and the Law on Intellectual Property of Vietnam. Any unauthorized modification invalidates the signature and constitutes evidence of tampering.  
   *(Chữ ký số mật mã, lịch sử nhật ký Git và dấu thời gian công khai trên GitHub cấu thành bằng chứng điện tử hợp lệ theo luật pháp quốc tế và Luật Sở hữu trí tuệ Việt Nam. Mọi thao tác chỉnh sửa trái phép sẽ làm vô hiệu hóa chữ ký và là bằng chứng về việc giả mạo).*

3. **Contact for Legal Inquiries / Liên hệ Pháp lý:** For rights licensing, verification inquiries, or copyright disputes, please contact the author via the official certified email.  
   *(Mọi yêu cầu cấp phép bản quyền, xác minh hoặc giải quyết tranh chấp, vui lòng liên hệ trực tiếp với tác giả qua email chính thức được chứng thực trong khóa GPG).*

---

*Document Version / Phiên bản Tài liệu: 1.0.0 | Effective Date / Ngày hiệu lực: 25 October 2026*  
*Cryptographically Signed and Sealed by / Ký số và Đóng dấu Mật mã bởi:* **TRAN KHAC CUONG (TKC-VH)**
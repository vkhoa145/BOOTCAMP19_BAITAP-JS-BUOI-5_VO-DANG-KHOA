// bài tập quản lý tuyển sinh 
// Điều kiện trúng tuyển:
//     - Điểm tổng kết lớn hơn hoặc bằng điểm chuẩn 
//     - Không có môn nào điểm 0
//     Nhập input
//     - điểm chuẩn của hội đồng
//     - điểm 3 môn của thí sinh
//     - Khu vực (Nhập X nếu không thuộc khu vực ưu tiên)
//     - đối tượng dự thi (nhập 0 nếu không thuộc đối tiện ưu tiên)
//     Kết quả đầu ra:
//     - Kết quả đậu hoặc rớt 
//     - tổng số điểm đạt được

const xetTuyenEl = document.getElementById("xet-tuyen").onclick = function (eveXetTuyen) {
    console.log(eveXetTuyen.target); // trả ra đối tượng phát sinh ra event
    // Nhập điểm chuẩn hội đồng
    const diemChuan = +document.getElementById('diemChuan').value
    // Nhập số điểm môn 1
    const mon1 = +document.getElementById('mon-1').value
    // Nhập số điểm môn 2
    const mon2 = +document.getElementById('mon-2').value
    // Nhập số điểm môn 3
    const mon3 = +document.getElementById('mon-3').value
    // Nhập khu vực 
    const khuVuc = document.getElementById('khu-vuc').value
    // Nhập đối tượng 
    const doiTuong = document.getElementById('doi-tuong').value
    // Tạo hafm xét điều kiện khu vực và đối tượng
    let xetKhuvuc = function (khuVuc) {
        if (khuVuc === 'X' ) {
            return 0;
        } else if (khuVuc === 'A') {
            return 2;
        } else if (khuVuc === 'B') {
            return 1;
        } else if (khuVuc === 'C') {
            return 0.5;
        }
        
    }
    
    let xetDoiTuong = function (doiTuong) {
        if (doiTuong === 0) {
            return 0;
        } else if (doiTuong === dt1) {
            return 2.5;
        } else if (doiTuong === dt2) {
            return 1.5;
        } else if (doiTuong === dt3) {
            return 1;
        }
    }
    // Tính toán tổng điểm 
    function diemTongBaMon (mon1,mon2,mon3) {
        return mon1 + mon2 + mon3 + xetKhuvuc(khuVuc) + xetDoiTuong(doiTuong);
    }
    const tongDiem = diemTongBaMon(mon1,mon2,mon3)
    // Xét điều kiện trúng tuyển 
    function checkDieuKien (diemChuan) {
        let Arr = [mon1,mon2,mon3];
        for (i = 0; i <= Arr.length;i++) {
            return (diemTongBaMon(mon1,mon2,mon3) >= diemChuan && i > 0)? 'trúng tuyển':'không trúng tuyển';
        }

    const ketQua = checkDieuKien(diemChuan);
    // Tạo kết quả xuất ra màn hình
    const totalWrapperEl = document.getElementById("total-wrapper");
    const totalResult = document.getElementById("total-result");
    totalWrapperEl.style.display = "block";
    totalResult.innerHTML = tongDiem.toLocaleString();

    const trungtuyenWrapperEl = document.getElementById("trungtuyen-wrapper");
    const trungtuyenResult = document.getElementById("trungtuyen-result");
    trungtuyenWrapperEl.style.display = "block";
    trungtuyenResult.innerHTML = ketQua.toLocaleString();

    
};




// Bài tập tính tiền điện 
// Nhập vào tên và số kw điện 
// let inputName = prompt('Please input your name');
// let quanityOfElec = +prompt('Please input quanity of usage electricity');
// Các điều kiện về giá tiền 
// Tiền điện = số km x số kw 
// 50kw đầu --> 500d/km
// 51 - 100kw --> 650d/kw
// 101 - 200kw --> 850d/kw
// 201 - 350kw --> 1100d/kw
// >350kw --> 1300d/kww
const tinhTienEl = document.getElementById("tinh-tien").onclick = function (eveTinhTien) {
    console.log(eveTinhTien.target); // trả ra đối tượng phát sinh ra event
    // Nhập tên người dùng
    const tenUser = document.getElementById('name').value
    // Nhập số điểm môn 1
    const dien = +document.getElementById('kw-dien').value
    // Tạo hàm tính tiền
    let tinhTien = function (km) {
        if (km <= 50) {
            return tinhTien = 500 * km;
        } else if (km > 50 && km <= 100) {
            return tinhTien = 500 * 50 + (100 - km)*650;
        } else if (km > 100 && km <= 200) {
            return tinhTien = 50 * 500 + 50 * 650 + (200 - km) * 850;
        } else if (km > 200 && km <= 350) {
            return tinhTien = 50 * 500 + 50 * 650 + 100 * 850 + (350 - km) * 1100;
        } else {
            return tinhTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (km - 350) * 1300;
        }
        
    } 

    // Tạo kết quả xuất ra màn hình
    const nameWrapperEl = document.getElementById("name-wrapper");
    const nameResult = document.getElementById("name-result");
    nameWrapperEl.style.display = "block";
    nameResult.innerHTML = tinhTien(tenUser).toLocaleString();

    const tienWrapperEl = document.getElementById("tien-wrapper");
    const tienResult = document.getElementById("tien-result");
    tienWrapperEl.style.display = "block";
    tienResult.innerHTML = tinhTien(dien).toLocaleString();
 
};
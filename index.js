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


// Nhập thông tin cần thiết
let diemChuan = +prompt('Nhập điểm chuẩn của trường');
let diemMon1 = +prompt('Nhập điểm môn 1 của trường');
let diemMon2 = +prompt('Nhập điểm môn 2 của trường');
let diemMon3 = +prompt('Nhập điểm môn 3 của trường');
let khuVuc = prompt('Có phải khu vực ưu tiên không');
let doiTuong = +prompt('Có phải đối tượng ưu tiên không');
const a = 'A';
const b = 'B';
const c = 'C';
const dt1 = 2.5;
const dt2 = 1.5;
const dt3 = 1;
let tongDiem = 0;
let dayBaDiem = [diemMon1,diemMon2,diemMon3];

// Tính toán tổng điểm 
let diemTongBaMon = function (diemMon1,diemMon2,diemMon3) {
    return diemMon1 + diemMon2 + diemMon3 + xetKhuvuc + xetDoiTuong;
}
// Xem xét thí sinh có thuộc nhóm khu vực ưu tiên và đối tượng ưu tiên hay không 
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
console.log(xetDoiTuong(doiTuong))
// Xét điều kiện trúng tuyển 
let check = function (x) {
    for (i = 0; i <= dayBaDiem.length;i++) {
        return check = (diemTongBaMon >= x && dayBaDiem[i] > 0)? 'trúng tuyển':'không trúng tuyển';
    }

    
}

// Bài tập tính tiền điện 
// Nhập vào tên và số kw điện 
let inputName = prompt('Please input your name');
let quanityOfElec = +prompt('Please input quanity of usage electricity');
// Các điều kiện về giá tiền 
// Tiền điện = số km x số kw 
// 50kw đầu --> 500d/km
// 51 - 100kw --> 650d/kw
// 101 - 200kw --> 850d/kw
// 201 - 350kw --> 1100d/kw
// >350kw --> 1300d/kww

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
let bai2 = `Name: ${inputName} and the electric bills is ${tinhTien(quanityOfElec)}`

console.log(bai2);
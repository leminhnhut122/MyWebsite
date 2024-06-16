function daoNguocChuoi(chuoi) {
    let chuoiDaoNguoc = "";
    for (let i = chuoi.length - 1; i >= 0; i--) {
        chuoiDaoNguoc += chuoi[i];
    }
    return chuoiDaoNguoc;
}

const ketQua = daoNguocChuoi("hello");
console.log(ketQua); // Kết quả: "olleh"

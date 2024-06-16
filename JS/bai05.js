function kiemTraNguyenTo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function demSoNguyenTo(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (kiemTraNguyenTo(i)) {
            count++;
        }
    }
    return count;
}
// Ví dụ sử dụng
let result = demSoNguyenTo(10);
console.log("Kết quả: " + result); // In ra "Kết quả: 4"

public class KiemTraNguyenTo {

    public static boolean kiemTraNguyenTo(int n) {
        // Kiểm tra nếu n nhỏ hơn 2 thì không phải là số nguyên tố
        if (n < 2) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            // Nếu n chia hết cho bất kỳ số nào trong khoảng này thì không phải là số nguyên tố
            if (n % i == 0) {
                return false;
            }
        }
        // Nếu không chia hết cho bất kỳ số nào thì đó là số nguyên tố
        return true;
    }

    // Hàm main để chạy chương trình
    public static void main(String[] args) {
        // Gọi hàm kiemTraNguyenTo với n = 7 và in kết quả
        boolean result = kiemTraNguyenTo(7);
        System.out.println("Kết quả: " + result); // In ra "Kết quả: true"
    }
}

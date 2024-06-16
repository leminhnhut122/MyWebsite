public class Fibonacci {

    public static int fibonacci(int n) {
        // Nếu n <= 1, trả về n (vì số Fibonacci đầu tiên là 0 và thứ hai là 1)
        if (n <= 1) {
            return n;
        }
        // Gọi đệ quy hàm fibonacci cho (n-1) và (n-2) và trả về tổng của chúng
        return fibonacci(n-1) + fibonacci(n-2);
    }

    public static void main(String[] args) {
        int result = fibonacci(5);
        System.out.println("Kết quả: " + result); // In ra "Kết quả: 5"
    }
}

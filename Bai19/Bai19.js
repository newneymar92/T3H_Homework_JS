// 19.  Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
// VD: total(9) => output: 45
function sum(n) {
    if (n == 1) return 1;
    return sum(n - 1) + n;
}

console .log(sum(9));

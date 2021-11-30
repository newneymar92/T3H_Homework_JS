// 6. Viết chương trình tính tổng bình phương của các số từ 1 đến n?
// VD: n = 3, output: 14

let n = 3;

function sumSquare1toN(n){
    let sum =0;
    for(let i =0;i<=n;i++){
        sum+=i*i;
    }
    console.log(sum);
}

sumSquare1toN(n);

// 5. Viết chương trình tính tổng từ 1 đến n?
// VD: n = 10, output: 55

let n = 10;

function sum1toN(n){
    let sum =0;
    for(let i =0;i<=n;i++){
        sum+=i;
    }
    console.log(sum);
}

sum1toN(n);


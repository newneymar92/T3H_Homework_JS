// 2. Viết chương trình in ra các số lẻ từ 1 đến n?
// VD: n = 10, output: 1 3 5 7 9
let n = 10;

function printOddNum(n){
    for(let i = 0;i<n;i++){
        if(i%2!= 0){
            console.log(i);
        }
    }
}

printOddNum(n);

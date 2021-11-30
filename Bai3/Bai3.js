// 3. Viết chương trình in ra các số chẳn từ 1 đến n?
// VD: n = 10, output: 2 4 6 8 10

let n = 10;

function printEvenNum(n){
    for(let i =1;i<=n;i++){
        if(i%2== 0){
            console.log(i);
        }
    }
}

printEvenNum(n);

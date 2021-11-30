// 8. Kiểm tra số n có toàn số lẻ tạo thành hay không?
// VD1: n=1234, output: ‘NO’
// VD2: n=135, output: ‘YES’

let num=23441;

function checkAllOdd(n){
    
    while(n>0){
        let m = n % 10;
        if(m % 2 == 0){
            return false;
        }
        n = Math.floor(n/10);
    }
    return true;
}

if(checkAllOdd(num)==true){
    console.log("YES");
}
else{
    console.log("NO");
}
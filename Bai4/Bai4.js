// 4. Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// VD: n = 10, output: 2 3 5 7
let n = 10;

function isPrime(n){
    if(n<2){
        return false;
    }
    else if(n==2){
        return true;
    }
    else{
        for(let i = 2;i<n;i++){
            if(n%i === 0){
                return false;
            }
        }
        return true;
        
    }
}

for(let i = 0;i<=n;i++){
    if(isPrime(i)){
        console.log(i);
    }
}


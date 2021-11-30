//0. Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
//VD1: n =10, output: NO
//VD2: n = 5; output: YES
let n = 15;
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

if(isPrime(n)){
    console .log("YES");
}
else{
    console .log ("NO");
}




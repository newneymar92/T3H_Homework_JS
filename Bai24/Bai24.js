// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]

let a = [1,2,3,2,3,4,6,7];

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
};

//Filter trả về một mảng mới là các phần tử của mảng gốc đã vượt qua điều kiện cho trước
let isPrimeArray = a.filter(function(val){
    return isPrime(val);
});

console .log(isPrimeArray);

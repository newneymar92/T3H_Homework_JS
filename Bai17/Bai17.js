// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7

function max(a,b,c){
    let max = a;
    if(max<b){
        max = b;
    }
    if(max<c){
        max =c;
    }
    return max;
}

console.log(max(2,4,7));

function min(a,b,c){
    let min = a;
    if(min>b){
        min = b;
    }
    if(min>c){
        min =c;
    }
    return min;
}

console.log(min(2,4,7));


// 9. Kiểm tra n có phải là số đối xứng?
// VD1: n=1242343, output: ‘NO’
// VD2: n = 123676321, output: ‘YES’

let n = 123676321;

function symmetricalNum(num){
    let oldNum = num;
    let temp;
    let newNum = 0;
    while(num>0){
         temp = num % 10;
         newNum = (newNum*10) + temp;
         num = Math.floor(num/10);//làm tròn xuống
    }
    if(newNum == oldNum){
        return true;
    }
    else{
        return false;
    }
}

if(symmetricalNum(n)==true){
    console.log("YES");
}
else {
    console.log("NO");
}


// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]

let a = [1,2,3,4,6,7];
let k = 5;

// let a2 = a.filter(function(val){
//     return ((val+1==5) || (val-1==5));
// })
function nextElement(arr,k){
    let output = [];
    for(let i=0;i<arr.length;i++){
        if(((a[i]+1)===k) || ((a[i]-1)===k)){
            output.push(a[i]);
        }
    }
    return output;
}
// console.log(a2);
console.log(nextElement(a,k));

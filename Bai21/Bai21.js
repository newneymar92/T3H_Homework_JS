// 21. Cho một mảng là một tập các số, tính tổng tất cả các số của mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 90

let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
let sum = 0;
for(let i = 0;i<a.length;i++){
    sum += a[i];
}
console.log(sum);

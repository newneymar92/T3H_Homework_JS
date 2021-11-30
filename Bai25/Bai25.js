// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]

let a = [1,2,3,2,3,4,6,7];

//map trả về một mảng mới là sự thay đổi của các phần tử trong mảng gốc
let a2 = a.map(function(val){
    return val*val;
});

console.log (a2);


// 30. Cho một mảng là một tập các số nguyên dương, tìm số lớn thứ nhì trong mảng, không có thì in ra -1?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 8
// VD: a = [1,1,1,1,1,1,1,1,1,1], output: -1

let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
let a2 = [1,1,1,1,1,1,1,1,1,1];

function foo(arr) {
    let a = []; // mảng lưu giá trị của các phần từ xuất hiện trong mảng
    let prev;// giá trị phần tử trước đó
    arr.sort();
   
    for ( let i = 0; i < arr.length; i++ ) {
        //Nếu phần tử hiện tại khác phần tử trước đó 
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
        } 
        prev = arr[i];
    }
    return a;
};

let resultArr = foo(a);
if(resultArr.length==1){
    console.log(-1);
}
else{
    resultArr.sort(function(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log(resultArr[resultArr.length-2]);
}



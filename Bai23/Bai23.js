// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3

let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];

function getMax(arr){
    let max = arr[0];
    for (let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}

function foo(arr) {
    let a = []; // mảng lưu giá trị của các phần từ xuất hiện trong mảng
    let b = []; // mảng lưu số lần xuất hiện trong mảng tương ứng
    let prev;// giá trị phần tử trước đó

    arr.sort();
    console.log(arr.sort());
    

    for ( let i = 0; i < arr.length; i++ ) {
        //Nếu phần tử hiện tại khác phần tử trước đó 
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

let result = foo(a);
console.log (`Phần tử ${getMax(result[0])} xuất hiện nhiều lần nhất, đó là ${getMax(result[1])} lần `);

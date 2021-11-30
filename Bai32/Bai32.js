// 32. Cho một mảng là một tập các số nguyên dương theo thứ tự tăng dần, và một số k. Hãy chèn k vào mảng và đảm bảo mảng ko mất tính tăng dần
// VD: a = [1,3,6,9,11,20]; k = 13 .Output: a = [1,3,6,9,11,13,20]

let a = [1,3,6,9,11,20];

function addElement(arr,k){
    arr.push(k);
    arr.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    return arr;
};

console.log(addElement(a,13));



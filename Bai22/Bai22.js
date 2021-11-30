// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5

let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];

function getMin(a){
    let min = a[0];
    for (let i=1;i<a.length;i++){
        if(min>a[i]){
            min = a[i];
        }
    }
    return min;
}

function getMax(a){
    let max = a[0];
    for (let i=1;i<a.length;i++){
        if(max<a[i]){
            max = a[i];
        }
    }
    return max;
}

function getAverage(a){
    let average = Math.floor((getMax(a)+getMin(a))/2);
    let aveInArray = a.find(function(currentVal){
        return currentVal == average;
    });
    if(aveInArray){
        return average;
    }
}

console.log(getMax(a));
console.log(getMin(a));
console.log(getAverage(a));

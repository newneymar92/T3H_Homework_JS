// 33. [Extra]Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, sắp xếp mảng mà không dùng hàm sort() cho sẵn?
// VD: a = [9,8,7,6,4,5,3,2,1];  .Output: [1,2,3,4,5,6,7,8,9]

let a = [9,8,7,6,4,5,3,2,1];

let n = a.length;

function sort2(arr,n){

    for(let i=0;i<n-1;i++){
        for(let j = n-1;j>i;j--){
            if(arr[j-1]>arr[j]){
                temp = arr[j-1];
                arr[j-1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}

console.log(sort2(a,n));


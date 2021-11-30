// 31. Cho một mảng là một tập các số nguyên dương và một số nguyên dương k, tìm xem trong mảng có tồn tại 3 số có tổng bằng k? (1s) , length of array.
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 26 .Output: YES.giải thích ( 9 + 9 + 8)
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]; k = 30 .Output: NO

let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];

// function sum3Element(a,s){
//     let j,k;
//     let result = [];
//     for (let i = 0; i < a.length-3; i++) {
//         j = i+1;
//         k= a.length-1;
//        while(k>=j){
//            if((a[i]+a[j]+a[k] == s) && (i!=j) && (i!=k) && (j!=k) ){
//                result.push(a[i],a[j],a[k]);
//                break;
//            }
//            (a[i] + a[j] + a[k] > 0) ? k-- : j++;
//        }
//    }
//    return result;
// }

let len = a.length;

function checkSum (arr,len,k){
    let newArr = [];
    for(let i = 0;i<len;i++){
        let left = i+1;
        let right = len -1;
        while(right >left){
            if(arr[i]+arr[left]+arr[right] == k){
                newArr.push(arr[i],arr[left],arr[right]);
            }
            if(arr[i]+arr[left]+arr[right] > k){
                right--;
            }
            else{
                left++;
            }
        }
    }
    return newArr;
}

let result = checkSum(a,len,26);
if(result.length !=0){
    console.log("YES",result);
}
else{
    console.log("NO");
}






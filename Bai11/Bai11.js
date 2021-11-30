// 11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
// VD: “ Hello  world”, output: 3
let str = " Hello  world";

function countSpace(str){
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(str.charAt(i)==" "){//Lấy kí tự tại một vị trí của String
            count++;
        }
    }
    return count;
}

console.log(countSpace(str));

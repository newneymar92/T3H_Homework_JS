// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 2

let s1 = "This is a beautiful day";
let s2 = "is";

function positionSubString(str1, str2){
    let index = str1.indexOf(str2);//trả về index của kí tự đầu tiên trong subString
    return index;
}

console.log(positionSubString(s1,s2));

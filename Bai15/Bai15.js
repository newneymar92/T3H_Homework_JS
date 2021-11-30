// 15. Viết chương trình chuẩn hóa họ tên.
// VD: “NguyeN THI tho tHu hA”, output: “Nguyen Thi Tho Thu Ha”

let s1 = "NguyeN THI tho tHu hA";

function titleCase(str) {
    //Chuyển hết thành chữ thường và Tách từng từ trong chuỗi bởi khoảng trắng
    var convertToArray = str.toLowerCase().split(' ');
    console.log(convertToArray);

    function callback(val) {
        //chuyển kí tự đầu tiên của mỗi chữ thành chữ in hoa
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    };

    // result là mảng mới sau khi mỗi phần tử trong converToArray được chỉnh sửa
    var result = convertToArray.map(callback);
    return result.join(' ');
  }
  
console.log(titleCase(s1));



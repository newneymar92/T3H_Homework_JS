// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, 
// mảng là một tập hợp object của học viên gồm 3 thông tin:
//  id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với 
//  ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại 
//  chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "NgAN",
//         lastName: "Duong Thuy"
//     },
//     {
//         id: "T3HXX2",
//         firstName: "Ha",
//         lastName: "Do Thi Thu"
//     },
//     {
//         id: "T3HXX5",
//         firstName: "Minh",
//         lastName: "Nguyen Nhat"
//     }
// ]
// Output: [ {
//         id: "T3HXX1",
//         firstName: "Ngan",
//         lastName: "Duong Thuy"
//     }]
let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
];


function titleCase(str) {
    //Chuyển hết thành chữ thường và Tách từng từ trong chuỗi bởi khoảng trắng
    var convertToArray = str.toLowerCase().split(' ');
    // console.log(convertToArray);

    function callback(val) {
        //chuyển kí tự đầu tiên của mỗi chữ thành chữ in hoa
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    };

    // result là mảng mới sau khi mỗi phần tử trong converToArray được chỉnh sửa
    var result = convertToArray.map(callback);
    return result.join(' ');
  }

let newArr = students.filter(function(val){
    return  ((val.firstName.includes("A"))  ||  (val.firstName.includes("A")))  && (val.firstName.length>=3);
})

let newArr2 = newArr.map(function(val){
    return { id:val.id,
            firstName:titleCase(val.firstName),
            lastName: val.lastName
            };
})

console.log (newArr2);


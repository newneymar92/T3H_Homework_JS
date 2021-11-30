// 29. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, 
// mảng là một tập hợp object của học viên gồm 3 thông tin: 
// id, firstName, lastName, và age. Hãy sắp xếp danh sách học viên theo tên (firstName).
// VD: students = [
//     {
//         id: "T3HXX1",
//         firstName: "Ngan",
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

let students =  [
    {
        id: "T3HXX1",
        firstName: "Ngan",
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
//Phương thức sort() thay đổi vị trí của các phần tử trong mảng ban đầu
// và trả về chính mảng đó.

//sort() chuyển các phân tử thành chuỗi và so sánh
students.sort(function(a,b){
    let x = a.firstName.toLowerCase();
    let y = b.firstName.toLowerCase();
    return x == y ? 0 : (x > y) ? 1 : -1;
    //Cách 2: return a.firstName.localeCompare(b.firstName);
});

console.log(students);




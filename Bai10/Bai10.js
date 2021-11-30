// 10. In bảng cửu chương ra màn hình?
// Output:
// 2x1=2
// 2x2=4
// 2x3=6
// 2x4=8
// 2x5=10
// 2x6=12
// 2x7=14
// 2x8=16
// 2x9=18
// 2x10=20

// 3x1=3
// 3x2=6
// …..

// 9x9=81
// 9x10=90

for(let i=2;i<10;i++){
    for(let j=1;j<11;j++){
        console.log(`${i}*${j}=${i*j}`);
    }
}

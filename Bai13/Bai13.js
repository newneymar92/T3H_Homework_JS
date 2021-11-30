// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”

let str = "This is a beautiful day";

function inverseString(str){
    let str2 = "";
    for(let i=(str.length-1);i>=0;i--){
         str2 += str.charAt(i);
    }
    return str2;
}

console.log(inverseString(str));

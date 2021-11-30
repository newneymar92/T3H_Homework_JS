// 16. Viết chương trình lấy  id name của fb.
// VD: “https://www.facebook.com/ngothucdat”, output: “ngothucdat”

let urlFacebook = "https://www.facebook.com/ngothucdat";

 function getIdName(url){
    let idName= url.slice(25);
    return idName;
 }

 console.log(getIdName(urlFacebook));
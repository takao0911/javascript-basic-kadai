const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1し、2桁表示にパディング
const day = String(today.getDate()).padStart(2, '0');        // 2桁表示にパディング

//const formattedDate = `${year}/${month}/${day}`;
const formattedDate = year + "年" + month + "月" + day + "日";

console.log(formattedDate); 


const fs=require("fs");

// const msg="aliens are real!!!!!!!!!!👽👽👽";

// fs.writeFile("./alert.html", msg ,(err)=>{
//   console.log("completed writing!!!!");
// });

// const msg2="one life ,so stay high";
// for(i=1; i<=10;i++){
//     fs.writeFile(`./backup/alert-${i}.html`, msg2 ,(err)=>{
//         console.log("completed writing!!!!");
//       });   
// }

// const msg3="im azhar";

console.log(process.argv);
const fileslist =process.argv[2];
// for(i=1; i<=fileslist;i++){
//     fs.writeFile(`./backup/alert-${i}.html`, msg3 ,(err)=>{
//         console.log("completed writing!!!!", `alert-${i}.html`);
//       });   
// }
// fs.readFile("./cool.txt","utf-8",(err,content)=>{
//   if(err){
//     console.log("❌",err);
//   }
//   console.log("💌",content);
// });

// const niceQuote = "\nMake everyday a little less ordinarily 😉";
// fs.appendFile("./nice.txt", niceQuote, (err) => 
// {
//   console.log("Updated file !!! 😊👍");
// });
// fs.unlink("./delete.css",(err)=>{
//   console.log("deleted file");
// });

fs.readdir("./backup", (err, files) => 
{// console.log(files);
  files.forEach((fileName) =>
  fs.unlink(`./backup/${fileName}`, (err) => 
  {
    console.log("Deleted file!!! ✨");
  }
  ));
});
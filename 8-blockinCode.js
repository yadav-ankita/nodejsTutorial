/////------------13-05-2025-----------//////////
////----------Tuesday-----------------/////////
// event Loop example codes  /////
// const {readFile,writeFile}=require('fs');
// readFile('./content/first.txt','utf-8',(error,result)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log(result);
//     console.log("task is executed");
// })
// console.log("task is readFile");
// another example
// console.log("task1");
// setTimeout(
//     ()=>{
//         console.log("task2");
//     },1000
// )
// console.log("task3");
//another example 
// setInterval(()=>{
//     console.log("hello world");
// },2000)
//another examples
const http=require('http');
const server=http.createServer((req,res)=>{
     console.log("request events");
     if(req.url==="/home"){
        res.end(
            "You are on home page"
        )
     }
     if(req.url==="/about"){
        ///this can block your  server
        //blocking code
        for(let i=0;i<100;i++){
            for(let j=0;j<50;j++){
                console.log(`${i}=${j}`);
            }
        }
        res.end("you are on about page");
     }
     if(req.url==="/contact"){
        res.end("You are on constact page");
     }
     console.log("you request on home page");
     return;
})
console.log("outer from server");
server.listen(5000,()=>{
    console.log(`your server is listening on port ${5000}`);
})
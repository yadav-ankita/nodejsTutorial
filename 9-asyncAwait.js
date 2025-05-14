/////------------13-05-2025-----------//////////
////----------Tuesday-----------------/////////
const {readFile}=require('fs');
const getData=(path)=>{
    return new Promise((resolve,rejects)=>{
        readFile(path,'utf-8',(error,result)=>{
            if(error){
                console.log("this is error of promise block");
                rejects(error);
            }
            else{
                console.log("this is result of resolve block");
                resolve(result);
            }
        })
    })
}
// getData('./content/first.txt')
// .then((val)=>{
//     console.log(val);
// })
// .catch((error)=>{
// console.log(error);
// })
const gettingData=async()=>{
    try{
   const firstFileData=await getData('./content/first.txt');
   console.log(firstFileData);
   const secondFileData=await getData('./content/second.txt');
   console.log(secondFileData);
    }
    catch(error){
        console.log("this is error of catch block")
        console.log(error);
    }
}
gettingData();
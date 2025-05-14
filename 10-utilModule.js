/////------------13-05-2025-----------//////////
////----------Tuesday-----------------/////////
const {readFile,writeFile}=require('fs').promises;
const getData=async()=>{
    try{
    const firstFileData=await readFile('./content/first.txt','utf-8');
    const secondFileData=await readFile('./content/second.txt','utf-8');
    console.log(firstFileData);
    console.log(secondFileData);
    await writeFile('./content/utilModule.txt',`This is the first file data${firstFileData} THis is second file data${secondFileData}`,
        {
        flag:'a'
        }
);
    }
    catch(error){
        console.log(error);
    }
}
getData();
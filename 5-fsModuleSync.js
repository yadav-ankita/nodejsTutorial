const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')
console.log(first,second)
writeFileSync('./content/result-sync.txt',`here is the result:${first},${second}`)
//if we want to append this content again to the file
writeFileSync('./content/result-sync.txt',`here is the result:${first},${second}`,{flag:'a'});
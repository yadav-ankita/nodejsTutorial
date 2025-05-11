//http server
/////------------10-05-2025-----------//////////
////----------Saturday-----------------/////////
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('You are on home page');
        return;
    }
    if(req.url==='/about'){
        res.end('you are on about page');
        return;
    }
    res.end(
        `<h1>OOps You are on error page</h1>
        <a href="/">back to home page</a>`
    )
    return;
})
const port=8000;
console.log(`Your server is listening on port ${port}`);
server.listen(port);
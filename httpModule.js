const http=require('http');
const server=http.createServer((req,res)=>{
  // these both are object
  // request is the request send by the user
   // res->response that we send; 
  if(req.url==='/'){
      res.end('Welcome to our home page');
  }else if(req.url==='/about'){
     res.end('Here is our short story');
  }else{
    res.end(`<h1>Oops! <a href="/">Go back to home </a></h1>`)
  }

})

server.listen(5000);
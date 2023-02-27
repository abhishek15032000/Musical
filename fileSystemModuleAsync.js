

function execute(err,result){
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
         if(err){
            console.log(err);
            return;
         }
         const second=result;

         writeFile('./content/result-async.txt',`Here is the async result ${first} ,${second}`,(err,result)=>{
              if(err){
                 console.log(err);
                 return;
              }else{
                console.log(result);
              }
         });

         console.log(`one with this task`);

    });

    
}
console.log(`start`);
const {readFile,writeFile, read}=require('fs');
readFile('./content/first.txt','utf8',execute);
console.log('end');
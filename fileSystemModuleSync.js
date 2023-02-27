const {readFileSync,writeFileSync}=require('fs');//  both are same
const fs=require('fs');// both are same

// console.log(fs);;
console.log('start');
const first=readFileSync('./content/first.txt','utf8');// path of the file we are reading and its encoding(default utf8);
const second=readFileSync('./content/second.txt','utf8');//path of the file we are reading and its encoding(default utf8);
console.log(first,second);

// writeFileSync('./content/result-sync.txt',`Here is the result ${first},${second}`);
// if the path given exist then it will go that file and override the content provided by us

//if the path does not exist then it will first create the path then (means create the file in the path given)and add the content to that file.


// in order to append to content of a file which already exists

writeFileSync('./content/result-sync.txt',`Here is the result :${first},${second}`,{flag:`a`});
// it takes a third parameter which is an object with flag:'a' which means append 

console.log('done with the task');
console.log('starting the next one');
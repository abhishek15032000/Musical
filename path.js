
const path=require('path');
console.log(path.sep);// sep ->seperator


const filepath=path.join('/content','subfolder','test.txt');
console.log(filepath);

const base=path.basename(filepath);
console.log(base);

const absolutePath=path.resolve(__dirname,'content','subfolder','test.txt')//provides absolute path
console.log(absolutePath);
// dirname is the whole absolute path of the file in which this function is getting used , so it joins all the parameters and provides the file address.  'dirname/content/subfolder/test.txt' -- this is the absolute path of the test.txt file
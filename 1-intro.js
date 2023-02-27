// GLOBALS --- NO WINDOW !!!! 

/**
 *   __dirname - path to current directory
 *   __filename - filename
 *   require - function to use modules(CommonJs)
 *   module - info about current module (file)
 *   process - info about env where the program is being executed 
 * 
 * 
 */

console.log(__dirname);
console.log(__filename);
// console.log(process);

x=setInterval(() => {
    console.log('Hello Node js');
}, 1000);

setTimeout(()=>{
    clearInterval(x);
},4000);
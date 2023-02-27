
// const amount=9;
// amount<10?console.log("small no"):console.log("large no");

const  _ =require('lodash');
const item= [1,[2,[3,[4]]]];
const newItems= _.flattenDeep(item);
console.log(newItems);
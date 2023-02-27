// Modules --- Encapsulated Code (only share minimum);
// evey file in node is a module(by default)



// in order to acces the variables

const names=require('./4-names');
console.log(names);
const hi=require('./5-utils');
console.log(hi);
const {items,singlePerson}=require('./6-alternative-flavor');
const data=require('./6-alternative-flavor');
require('./7-mind-grenade');

hi('susan');
hi(names.john);
hi(names.peter);
console.log(items);
console.log(singlePerson);
console.log(data);

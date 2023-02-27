
const num1=5;
const num2=10;

function addValues(){
    console.log(`the sum is ${num1 + num2}`);
}

addValues();// this function will run even if it is not run inside the file in which it was required.

// this happens because when we export the code, node wraps the code in a function , now this function will invoke the code (let say we have a function call - it will run this automatically before importing ).
// built in module so we write just the name
const os=require('os');
console.log(typeof os);

// console.log(os);

const user=os.userInfo();
console.log(user);

const uptime=os.uptime();
console.log(uptime);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOs);
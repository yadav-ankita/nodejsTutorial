const os=require('os');
//info about current user
const user=os.userInfo();
console.log(user);
//method returns hte system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`);
const currentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOs);
/////------------4-05-2025-----------//////////
////----------Sunday-----------------/////////
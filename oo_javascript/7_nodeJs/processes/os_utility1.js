var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Hostname: " + os.hostname());



console.log("os.freemem(): \n",os.freemem());                                       //amount of free system memory in bytes.
console.log("os.homedir(): \n",os.homedir());  
console.log("os.hostname(): \n",os.hostname());  
console.log("os.endianness(): \n",os.endianness());  
console.log("os.loadavg(): \n",os.loadavg());  
console.log("os.platform(): \n",os.platform());  
console.log("os.release(): \n",os.release());  
console.log("os.tmpdir(): \n",os.tmpdir());  
console.log("os.totalmem(): \n",os.totalmem());  
console.log("os.type(): \n",os.type());  
console.log("os.uptime(): \n",os.uptime());  



console.log("os.cpus(): \n",os.cpus());                                             //cpu-model, speed MHz, stuff
console.log("os.arch(): \n",os.arch());                                             //x64
console.log("os.networkInterfaces(): \n",os.networkInterfaces());                   // wifi, loopback, other
var fs = require('fs');
const readline = require('readline');

const configDir =  './src/config/'
const terminalList = ['gezgin','submarine']

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('0. Gezgin \n1. Submarine\n', (choice) => {
    // TODO: Log the answer in a database
    console.log(`Selected: ${terminalList[choice]}`);
  
    rl.close();
    fs.createReadStream(`${configDir}/terminal-config-${terminalList[choice]}.js`).pipe(fs.createWriteStream(`${configDir}/terminal-config.js`))
});


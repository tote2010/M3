const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {
   //console.log(process);
   process.stdout.write("prompt > ");
   process.stdin.on("data", (data) => {
      const args = data.toString().trim().split(" ");
      const cmd = args.shift();

      //commands[cmd] ? commands[cmd].apply(commands)
      commands[cmd] ? commands[cmd](print, args.join(" ")) : print(`command not found: ${cmd}`); 
   })
}

function print(output) {
   process.stdout.write(output);
   process.stdout.write("\nprompt > ");
}

bash();
module.exports = {
   print,
   bash,
};

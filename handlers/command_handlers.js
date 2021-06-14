const fs = require('fs');

mondule.export (client, Discord) => {
    const command_files = fs.readdirSync(`./commands/`).filter(file => file.endsWith('.js'));
    
    for(const file of command_files){
      const command = require('../commands/$(files)');
      if(command_name){
        client.commands.set(command.name, command);
      } else {
        continue;
      }
    }
}
  

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '-';

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handlers', 'event_handlers'].forEach(handler =>{
    require('.handlers/${handler})(client, Discord);
})

client.login(process.env.TOKEN);

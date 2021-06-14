const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '-';

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.login(process.env.TOKEN);

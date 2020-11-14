//-------------------------------------
// INCLUDE
//-------------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
//-------------------------------------
// SERVERINFO EMBED
//-------------------------------------

//-------------------------------------
// READY BOT
//-------------------------------------
client.on('ready', () => {
	console.log(`Ingelogd als ${client.user.tag}!`);
});
//-------------------------------------
// TOKEN
//-------------------------------------
//client.login(process.env.token);
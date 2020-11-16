//------------------------------
//INCLUDE
//------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
//------------------------------
//EMBEDS
//------------------------------
const embedwelcome = new Discord.MessageEmbed()
	.setTitle('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nWELKOM\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
    .setDescription('Nieuw bij deze server? Lees de <#735966372256940101> zeker door! Hieronder zie je een overzicht van ieder kanaal en alle rollen.')
    .setColor('#40b6ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/777142784389545994/777577525106835466/kebabje.png');
//CALL EMBED
client.on('message', async (message) => {
	var embedmsg = 'embed';
    if (message.content.toLowerCase() === embedmsg.toLowerCase()) {
      	message.channel.send(embedwelcome);
      	message.channel.send(embedchannel);
      	message.channel.send(embedroles);
        message.channel.send(embedthumb);
    }
});
//------------------------------
//LOGIN
//------------------------------
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
//------------------------------
//TOKEN LOGIN
//------------------------------
client.login(process.env.token);
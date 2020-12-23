//------------------------------
//INCLUDE
//------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
//------------------------------
//EMBEDS
//------------------------------
const githubembed = new Discord.MessageEmbed()
	.setTitle('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nMEDEDELINGEN\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
    .setDescription('In dit kanaal verschijnen alle mededelingen')
    .setColor('#adb198')
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/777142784389545994/777577525106835466/kebabje.png')
    .setFooter('Gemaakt door: Prabhjot | Met dank aan: Tristan, Joeri, Ben & Younes', 'https://cdn.discordapp.com/attachments/777142784389545994/777577525106835466/kebabje.png');
//CALL EMBED
client.on('message', async (message) => {
	var embedmsg = 'mededeling';
    if (message.content.toLowerCase() === embedmsg.toLowerCase()) {
      	message.channel.send(githubembed);
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
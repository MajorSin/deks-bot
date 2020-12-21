//------------------------------
//INCLUDE
//------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
//------------------------------
//EMBEDS
//------------------------------
const githubembed = new Discord.MessageEmbed()
	.setTitle('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nGIVEAWAY\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
    .setDescription('In deze kanaal vinden alle giveaways plaats.')
    .setColor('#adb198')
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/777142784389545994/777577525106835466/kebabje.png')
    .addFields(
        {
            name: 'REGELS',
            value: '- Giveaways worden georganiseerd via admins. Neem contact met ze op voor het regelen van een giveaway. \n- Giveaways moeten geclaimd worden binnen de beschreven tijd. Indien dat niet gebeurt, zal er een re-roll plaatsvivnden. \n- Soms kan het het geval zijn dat bepaalde ranks niet mee mogen doen. Indien ze toch winnen, zal er ook een re-roll plaatsvinden.'
        }
    )
    .setFooter('Gemaakt door: Prabhjot | Met dank aan: Tristan, Joeri, Ben & Younes', 'https://cdn.discordapp.com/attachments/777142784389545994/777577525106835466/kebabje.png');
//CALL EMBED
client.on('message', async (message) => {
	var embedmsg = 'ga';
    if (message.content.toLowerCase() === embedmsg.toLowerCase()) {
      	message.channel.send(githubembed);
    }
});
//------------------------------
//LOGIN
//------------------------------
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (Give-away)`);
});
//------------------------------
//TOKEN LOGIN
//------------------------------
client.login(process.env.token);
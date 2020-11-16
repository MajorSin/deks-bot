//------------------------------
//INCLUDE
//------------------------------
const Discord = require('discord.js');
const client = new Discord.Client();
//------------------------------
//EMBEDS
//------------------------------
//FIRST THUMBNAIL
const embedthumb = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/777142784389545994/777142893273153547/unknown.png')
    .setColor('#40b6ff');
//INTRO
const embedwelcome = new Discord.MessageEmbed()
	.setTitle('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nWELKOM\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬')
    .setDescription('Nieuw bij deze server? Lees de <#735966372256940101> zeker door! Hieronder zie je een overzicht van ieder kanaal en alle rollen.')
    .setColor('#40b6ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/777142784389545994/777577525106835466/kebabje.png');
//CHANNELS
const embedchannel = new Discord.MessageEmbed()
	.setTitle('KANALEN')
    .setDescription('Overzicht van alle algemene kanalen:')
    .setColor('#40b6ff')
    .addFields(
        {
            name: 'GENERAL',
            value: '- <#735966372256940099>: Overzicht nieuwe leden\n- <#735966372256940100>: Informatie over deze discord server\n- <#735966372256940101>: Overzicht van alle regels\n- <#735966372449878026>: Alle mededelingen komen hier. Houd dit ook in de gaten\n- <#756546015636488343>: Advertenties. Voor meer info, neem contact op met de staff team\n- <#777865057463042058>: Deze kanaal geeft alle updates van de bot weer'
        },
        {
            name: 'TEXT SOCIALIZE',
            value: '- <#735966372449878029>: General chat\n- <#735966372449878032>: Voor al uw memes\n- <#735966372449878030>: Voor al uw bestanden\n- <#749717632286064800>: Minecraft coördinaten\n- <#752905120504873130>: Voor het beheren van de music bot (DJ only)\n- <#754803502693220423>: Alle bot-commands mogen hierin'
        },
        {
            name: 'VOICE SOCIALIZE',
            value: '- **Among us:** Among us call\n- **Voice ding:** Voice chat zonder limiet\n- **Klein voice ding:** Voice chat voor iedereen met limiet\n-** Voice** *nummer*: Voice chat met *nummer* limiet\n-** Afk:** Afk voice chat'
        }
    );
//ROLES
const embedroles = new Discord.MessageEmbed()
	.setTitle('ROLES')
    .setDescription('Overzicht van alle algemene roles:')
    .setColor('#40b6ff')
    .addFields(
        {
            name: 'ROLLEN',
            value: '- **Owner & Co-Owner:** Server eigenaar\n- **Administration:** De server admins\n- **Staff:** De staff-leden\n- **Mods:** Moderators\n- **Helper:** Degene die hebben gehlopen om deze community op te richten/uitbreiden\n- **Special user (+):** Exclusieve rang\n- **Hosts:** Among us-hosts. Zij kunnen de voice-chats muten zodat er soepel among us gespeeld kan worden.\n- **DJ:** De DJs kunnen muziek afspelen in de calls.\n- **Member:** Algemene rang\n- **Chappie:** Chappies.\n- **Kebabman:** Exclusieve rang'
        }
    )
	.setTimestamp()
	.setFooter('Gemaakt door: Prabhjot | Met dank aan: Tristan, Joeri, Ben & Younes', 'https://cdn.discordapp.com/attachments/777142784389545994/777577525106835466/kebabje.png');
//CALL ALL EMBEDS
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
client.login(process.env.token)
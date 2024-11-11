const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/ngr5mBfx28'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **Made By MrWxlfz**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '🌙  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
       
        {
          name: '🌙  Music',
          value: '`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`',
          inline: true,
        },
      
        {
          name: '🌙  Fun',
          value: ' `ascii`, `joke`, `roll`',
          inline: true,
        },
      
        {
          name: '🌙  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
      
        {
          name: '🌙  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
     
        {
          name: '🌙  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      

    const button1 = new ButtonBuilder()
      .setLabel('Website')
      .setURL('https://eclipticlabs.webflow.io')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/ngr5mBfx28')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Owner Contact')
      .setURL('https://guns.lol/mrwxlfz')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};

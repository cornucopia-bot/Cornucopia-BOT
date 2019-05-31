    
const {RichEmbed} = require('discord.js');
const {parseUser} = require('../util/parseUser.js');
exports.run = async (client, message, args) => {
  const user = message.mentions.users.first();
  parseUser(message, user);
  const modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  message.guild.member(user).kick();

  const reason = args.splice(1, args.length).join(' ') || `Awaiting moderator's input. Use the command reason <reason>.`;
  const embed = new RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Kick\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
  .setFooter(`Case`);
  return client.channels.get(modlog.id).send({embed});
};

exports.conf = {
  aliases: [],
  permLevel: 'Moderator'
};

exports.help = {
  name: 'kick',
  category: 'Admin',
  description: 'Kicks the mentioned user.',
  usage: 'kick [mention] [reason]'
};
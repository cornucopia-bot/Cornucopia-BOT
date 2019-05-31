exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
  .setTitle('Permlevel!')
  .setDescription(`Your permission level is: ${level} - ${friendly}`)
  .setThumbnail(message.author.avatarUrl)
  .setAuthor("My name", message.author.displayAvatar)
	.setTimestamp()
message.channel.send(exampleEmbed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "permlevel",
  category: "Miscelaneous",
  description: "Tells you your permission level for the current message location.",
  usage: "permlevel"
};

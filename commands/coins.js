const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 600
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("💸", uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}  

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bal", "balance"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "money",
    category: "Economy",
    description: "Displays the amount of money you have.",
    usage: "money"
  };
  
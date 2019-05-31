const Discord = require("discord.js");
const fs = require("fs");
const coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!pay @isatisfied 59345




  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(!sCoins < args[0]) return message.reply("Not enough coins there!");
  if(!coins == sCoins){
      return message.reply("Not enoguh")
  }
  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(`${message.author} has given ${pUser} ${args[1]} coins.`);

  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["plsmoney", "give"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "pay",
    category: "Economy",
    description: "You can pay people!.",
    usage: "pay"
  };
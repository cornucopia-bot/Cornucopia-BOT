exports.parseUser = (message, user) => {
    const member = message.guild.member(user) || null;
    if (user === message.author.user) {
      return message.channel.send('You cannot do that to yourself, why did you try?');
    } else if (member) {
      if (member.highestRole.position >= message.member.highestRole.position) return message.channel.send('The targeted member has a higher or equal role position than you.');
    }
    return user;
  };
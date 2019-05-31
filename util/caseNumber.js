async function caseNumber(client, modlog) {
    const messages = await modlog.fetchMessages()
      .then(messages => console.log(`Received ${messages.size} messages`))
      .catch(console.error);
    const log = messages.filter(m => message.author === client.user &&
      message.embeds[0] &&
      message.embeds[0].type === 'rich' &&
      message.embeds[0].footer &&
      message.embeds[0].footer.text.startsWith('Case')
    ).first();
    if (!log) return 1;
    const thisCase = /Case\s(\d+)/.exec(log.embeds[0].footer.text);
    return thisCase ? parseInt(thisCase[1]) + 1 : 1;
  }
  
  module.exports = {caseNumber};
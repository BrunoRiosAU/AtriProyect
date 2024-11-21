const { SlashCommandChannelOption } = require("discord.js");

module.exports = {
    name: 'join',
    description: 'Jons a Voice Channel',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    deleted: true,

    callback: (client, interaction) => {
      interaction.reply(``);
    },
  };
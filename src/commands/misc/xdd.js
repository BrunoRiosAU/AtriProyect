const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  name: "xdd",
  description: "Cambiate",
  data: new SlashCommandBuilder()
    .setName("xdd")
    .setDescription("Un re test")
    .toJSON(),
  testOnly: true,
  deleted: true,


  callback: (client, interaction) => {
    interaction.reply(`Test epico`);
  },
}
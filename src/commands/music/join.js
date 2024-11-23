const { SlashCommandBuilder, ChannelType } = require("discord.js");
const { joinVoiceChannel, getVoiceConnections } = require("@discordjs/voice")
module.exports = {
  name: "join",
  description: "Se une al canal",
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Se une al canal")
    .addChannelOption((option) => option.setName('channel').setDescription('El canal a unirse.').setRequired(true).addChannelTypes(ChannelType.GuildVoice))
    .toJSON(),
  testOnly: true,
  deleted: false,

  callback: (client, interaction) => {
    const voiceChannel = interaction.options.getChannel('channel');
    const voiceConnection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: interaction.guildId,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    })
    voiceConnection.
    //getVoiceConnections()

    console.log(getVoiceConnections())
  },
};
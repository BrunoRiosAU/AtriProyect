const { Client, Events, EmbedBuilder } = require("discord.js");
const JSONData = require("./JSONData");

const config = JSONData.readData("./config.json");

const test = {
    "id": 4,
    "name": "Chamd",
    "active": true
};


if (JSONData.writeData("./test.json", test)) { console.log("tetas") } else { console.log("destetas") }



const client = new Client({
    intents: 3276799
})

function presence() {
    client.user.setPresence({
        status: "online"
    });
}

client.on(Events.ClientReady, async () => {
    presence();
    console.log("Locuraaaaaa");
});

client.on(Events.MessageCreate, async (message) => {
    if (message.content === "sexo?") {
        message.channel.send("opa?")
    }

    if (message.content == "c!test") {
        const helpEmbed = new EmbedBuilder()
            .setTitle("se viene")
        message.channel.send({ embeds: [helpEmbed] })
    }

    if (message.content.toLowerCase() == "c!help") {
        const helpEmbed = new EmbedBuilder()
            .setColor("0FFF00")
            .setTitle('CapBotV2')
            .setAuthor({ name: 'capwinter36', iconURL: 'https://media.discordapp.net/attachments/1039393474014892043/1249917469339029666/eb0ef21003eaf7175a2472fd32e870d5.png?ex=66690bdb&is=6667ba5b&hm=52735f7b44dd7edbd08ec8a12c059ff0c618729b768160047165ce3fc390511c&=&format=webp&quality=lossless&width=115&height=115' })
            .setDescription('**Comandos de CapBotV2**')
            .setThumbnail('https://cdn.discordapp.com/attachments/1012094281206464592/1022562863782580274/4195cf77071f1f52bf48233790471949.png?size=4096')
            .addFields(
                { name: 'Todos los comandos del CapBotV2', value: 'Aqui encontraras todos los comandos que posee el CapBotV2' },
                { name: '\u200B', value: '\u200B' },
                { name: 'c!help', value: 'Ver la lista de comandos de CapBotV2.' },
                { name: 'c!ping', value: 'Comprueba el ping del bot.' },
                { name: 'c!8ball (pregunta)', value: 'Un juego de aleatoriedad donde se pregunta algo y el bot da una respuesta.' },
                { name: 'c!nick (apodo)', value: 'Permite cambiar tu apodo y tambien borrarlo.' },
                { name: 'c!ruleta', value: 'Juega una partida de ruleta con otros jugadores.' },
                { name: 'Mas comandos proximamente!', value: 'Mas comandos proximamente!' },
                { name: '\u200B', value: '\u200B' }
            )
            .setTimestamp()
            .setFooter({ text: `Comando ejecutado por ${message.author.username}`, iconURL: message.author.avatarURL() });
        message.channel.send({ embeds: [helpEmbed] })
    }

    if (!message.author.bot) {
        message.channel.send("Que era")
    }
})

client.login(config.token)
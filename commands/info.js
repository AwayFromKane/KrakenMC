const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setDescription("Bot Info")
        .setColor("#ff2020")
        .setThumbnail(botIcon)
        .addField("Bot Name", bot.user.username)
        .addField("Made on", bot.user.createdAt);


    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "info"
}
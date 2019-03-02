const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("Server Info")
        .setColor("#ff2020")
        .setThumbnail(icon)
        .addField("Bot Name", bot.user.username)
        .addField("You joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}
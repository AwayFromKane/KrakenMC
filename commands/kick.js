const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!kickUser) return message.channel.send("⚠ERROR⚠: Cannot find user.");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("📛No Permission.📛");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("⚠ERROR⚠: This user cannot get kicked.");

    var kick = new discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#ff2020")
        .addField("Kicked User", kickUser)
        .addField("kicked By", message.author)
        .addField("Reason", reason);

    var kickChannel = message.guild.channels.find(`name`, "punishments");
    if (!kickChannel) return message.guild.send("⚠ERROR⚠: Cannot find channel.");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

    return;

}

module.exports.help = {
    name: "kick"
}
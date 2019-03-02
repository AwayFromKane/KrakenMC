const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("⚠ERROR⚠: Cannot find this user.");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("📛No Permission.📛");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("⚠ERROR⚠: Cannot ban this User.");

    var ban = new discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff2020")
        .addField("Banned User", banUser)
        .addField("Banned By", message.author)
        .addField("Reason", reason);

    var banChannel = message.guild.channels.find(`name`, "punishments");
    if (!banChannel) return message.guild.send("ERROR: Can't find channel.");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    } catch (error) {

    return message.channel.send("⚠ERROR⚠: Please give up a Name.");
}

    return;


}

module.exports.help = {
    name: "ban"
}
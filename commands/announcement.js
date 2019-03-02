const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("📛No Permission.📛");

    var splitser = "//";

    if (args[0] == null) {
        var useMessage = new discord.RichEmbed()
            .setTitle("Use")
            .setColor ("#ff2020")
            .setDescription(`Make an announcement by using: \n !announcement Title ${splitser} Message ${splitser} Color ${splitser} Channel`);

        return message.channel.send(useMessage);    
    }

    args = args.join(" ").split(splitser);

    if(args[2] == undefined) args[2] = "#eeeeee";
    if(args[3] == undefined) args[3] = "chat";
    
    var options = {

        title: args[0] || "Announcement",
        message: args[1] || "Nothing here.",
        color: args[2].trim(),
        channel: args[3].trim()

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
    .setTitle("Announcement")
    .setColor(options.color)
    .setDescription(`Message of ${announcer} \n\n ${options.message} \n`)
    .setTimestamp();

    var announcementChannel = message.guild.channels.find(`name`, options.channel);
    if (!announcementChannel) return message.channel.send("⚠ERROR⚠: Cannot find channel.");

    announcementChannel.send(announcementEmbed);
















}

module.exports.help = {
    name: "announcement"
}
const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("📛No Permission.📛");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("⚠ERROR⚠: Give a real user.");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("⚠ERROR⚠: You cannot warn this person.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("⚠ERROR⚠: Give a reason.");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("Warn")
        .setColor("#ff2020")
        .addField("Warned User", user)
        .addField("Warned By", message.author)
        .addField("Warns", warns[user.id].warns)
        .addField("Reason", reason);

    var warnChannel = message.guild.channels.find(`name`, "reports");
    if (!warnChannel) return message.guild.send("⚠ERROR⚠: Can't find channel.");

    warnChannel.send(warnEmbed);

    if (warns[user.id].warns == 3) {

        var warnbericht = new discord.RichEmbed()
            .setDescription("⚠WARNING⚠" + user)
            .setColor("#ff2020")
            .addField("Message", "Only 1 more warn and you will get banned!");

        message.channel.send(warnbericht)
    
    } else if (warns[user.id].warns == 4) {

      var warnban = new discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff2020")
        .addField("Banned User", user)
        .addField("Banned By", "@KrakenMC (Bot)#9062")
        .addField("Reason", "4 Warnings");

        var warnChannel = message.guild.channels.find(`name`, "punishments");
       
        message.guild.member(user).ban(reason);
        warnChannel.send(warnban);
      


    }


}

module.exports.help = {
    name: "warn"
}
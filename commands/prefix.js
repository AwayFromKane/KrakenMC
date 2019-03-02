const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("📛No Permission.📛");

    if(!args[0]) return message.reply("USE: ()prefix <PREFIX HERE>");

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));
 
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err);
    });

    var stringEmbed = new discord.RichEmbed()
    .setColor("#ff2020")
    .setTitle("Prefix")
    .setDescription(`**KRAKENMC**: Prefix changed to ${args[0]}`);

    message.channel.send(stringEmbed);

}

module.exports.help = {
    name: "prefix"
}

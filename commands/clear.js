const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {




    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("📛No Permission.📛");

    if (!args[0]) return message.reply("⚠ERROR⚠: Give up a Number.");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] == 0) {
                message.channel.send(`⚠ERROR⚠: You cannot delete 0 messages.`).then(msg.delete(3000));

            } else if (args[0] == 1) {

                message.channel.send(`Deleted 1 message.`).then(msg => msg.delete(3000));
            } else {

            message.channel.send(`Deleted ${args[0]} messages.`).then(msg => msg.delete(3000));
            
           }

        });


} else {
    return message.reply("⚠ERROR⚠: Give up a Number.");
}




}

module.exports.help = {
    name: "clear"
}
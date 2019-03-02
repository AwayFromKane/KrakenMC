const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Hello there Player! Go make fun on play.shadenetwork.ga! :smiley:");


}

module.exports.help = {
    name: "hello"
}
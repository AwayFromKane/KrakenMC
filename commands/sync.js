const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("**Instructions on syncing your account to Discord** \n \n 1) Login to any of our servers (not just the hubs) \n 2) Type the command /key once you're logged onto it. \n 3) Copy the code you receive (it should be a 6 digit code and your name) \n 4) Type !key <the 6 digit code and your name> under this channel! \n 5) Your account will then be successfully linked.");


}

module.exports.help = {
    name: "sync"
}
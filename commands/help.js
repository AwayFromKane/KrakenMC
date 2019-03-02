const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try{

       var text = "**SN BOT | HELP MENU** \n\n **__Commands__** \n **STAFF COMMANDS** \n !ban - Ban a user. \n !kick - Kick a user. \n **MEMBER COMMANDS** \n !help - Commands of bot. \n !info - Info about the Custom Bot. \n !hello - Say hello to the bot.";

       message.author.send(text);

       message.channel.send("**KRAKENMC**: We send you the *help menu* thru Private Message.")

    }catch (error){
       message.channel.send("⚠ERROR⚠: Something bad happened.");
    }
    


}

module.exports.help = {
    name: "help"
}
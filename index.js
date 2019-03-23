const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Couldn't find files.");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`File ${f} loaded.`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is online!`)
    
    bot.user.setStatus('Online')
    bot.user.setActivity("☁  KrakenMC", { type: "PLAYING" });
    

});

bot.on("guildMemberAdd", member => {

    var role = member.guild.roles.find("name", "Member");

    if (!role) return;

    member.addRole(role);

    const channel = member.guild.channels.find("name", "krakenmc");

    if(!channel) return;

    channel.send(`Welcome on the **KrakenMC Official Discord** *${member}*. \n IP: **krakenmc.cf**`);

});

bot.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botConfig.prefix
        };
    }


    var prefix = prefixes[message.guild.id].prefixes;

    // var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));

    if (commands) commands.run(bot, message, arguments)

});


bot.on("guildMemberAdd", member => {

    const channel = member.guild.channels.find("name", "welcome");
    if (!channel) console.log("ERROR: Can not find that channel!");

    var joinMessage = new discord.Richembed()
    .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
    .setTitle(`**→ Please welcome ${member.user.username}**, **On the Official KrakenMC Discord Server! ←**`)
    .setDescription(`⮩ Welcome ${member.user.tag}, Do you have any questions/problems? *Please contact our* **staffteam**`)
    .setColor("#ff2020")
    .setTimestamp()
    .setFooter("Joined");

    channel.send(joinMessage);
});

bot.login(botConfig.token);

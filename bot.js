const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require("./botconfigs.json")

console.log("Welcome Again !");

 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: Rust Legacy game has been revived by Fougerite !! new custom maps etc...!
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏if you want to join us and play RustBuster (revamped rust legacy) come to our official discord server for more info!


https://discord.gg/n6SngvK

Please don't mark that this is a spam ! this message will get sent once time ! Sorry if its annoy u (:

Invitation Special For ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: Rust Legacy game has been revived by Fougerite !! new custom maps etc...!
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

‏if you want to join us and play RustBuster (revamped rust legacy) come to our official discord server for more info!


https://discord.gg/n6SngvK

Please don't mark that this is a spam ! this message will get sent once time ! Sorry if its annoy u (:

Invitation Special For ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.on("message", async message => {
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
 
})
 
 
 
client.login(process.env.BOT_TOKEN);

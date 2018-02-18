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
client.login(process.env.BOT_TOKEN);

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";
const adminprefix = "-";


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : ! S `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : ! S ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`P A N D A , Ps`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});



cconst developers = ["525735438602731521", "586943733770223628", "650010405590269982"] 

client.on("message", message => {
  
    if (message.content.startsWith(prefix + "ps")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if(developers.include(message.author.id)) return message.reply(`you are not developer to use this`)
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
m.send(`${argresult}\n ${m}`);
})
message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` 📫  عدد المستلمين`); 
message.delete(); 
};     
});

client.on("message", async message => {
    if(message.content == prefix + "server") {
        if(!message.channel.guild) return;
            if(!message.member.hasPermission("MANAGE_GUILD")) {
                return message.channel.send("ليس لديك الصلآحية الكآفية . :broken_heart:");
            }

                let server = new Discord.RichEmbed()
                    .setAuthor(message.guild.name)
                    .setColor("RANDOM")
                    .setTitle("Server Info :hearts: :sparkles:")
                    .setDescription(`Members :bust_in_silhouette: : ${message.guild.memberCount}\nOwner :crown: : ${message.guild.owner.user.username}\nServer ID :id: : ${message.guild.id}\nRoles :lock: : ${message.guild.roles.size}\nRegion :earth_africa: : ${message.guild.region.toUpperCase()}`);

                    message.channel.sendEmbed(server);

    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "banned")) {
        if(!message.guild) return;
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**\`${b}\` | ${bb}**`);
        });
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "invite")) {
        let invite = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTitle("**Click Here To Invite The Bot To Your Server :sparkling_heart:**")
            .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
            message.channel.sendEmbed(invite);
    }
});
client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`** 
            دعوة البوت لسيرفرك : ${prefix}invite
            معلومات عن السيرفر : ${prefix}server
            يعرض لك عدد المتبندين من سيرفرك : ${prefix}banned
            يعرض لك عدد حالات الاعضاء في السيرفر : ${prefix}member
            **`);
            message.channel.sendEmbed(help); // رابط السيرفر يعود الى سيرفر CODES .
    }
});

const developers = ["525735438602731521" , "525735438602731521"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**  تـم تـغـيـيـر وضـع ألـلـعب للـبـوت    ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**  تـم تـغـيـيـر ألـمـشـاهـدةللـبـوت    ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**  تـم تـغـيـيـر وضـع سـتـريـم الـبـوت **`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.on('guildMemberAdd', member => {
    var channel = member.guild.channels.find('name', 'welcome');
        if(!channel) return;
    channel.send('**Welcome** ' + `${member}` + ' **To** ' + `__${member.guild.name}__` + ' **Server** 💕')          
     
    })


client.on('message', message => {
    if(message.content == '-member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**حالات الاعضاء🔋
:green_heart: اونلاين   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:مشغول       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: خامل      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: اوفلاين   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   الكل  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });


client.login(process.env.BOT_TOKEN);
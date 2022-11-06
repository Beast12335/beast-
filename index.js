const lib = require('lib')({token: process.env['token']});
const mySecret = process.env['dtoken']
const {Client, GatewayIntentBits} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
  console.log(`logged in!`)
})
client.on('messageCreate', (message) => {
  if (message.content == 'ping') {
    console.log(message)
    return lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `860512303233236995`,
  content: `pong!`,
   message_reference: {
     message_id: message.id
   }
}); 
  } else {
    return;
  }
})
const {Client:ClashClient} = require('clashofclans.js');
const beast = new ClashClient() 
beast.events.addPlayers(['#PV0G8V8V8','#LCRRVL2R']);
beast.events.setPlayerEvent({
    name: 'playerChange',
    filter: (oldPlayer, newPlayer) => {
        return oldPlayer.trophies !== newPlayer.trophies;
    }
});
beast.on('playerChange', (oldPlayer, newPlayer) => {
    console.log(oldPlayer.trophies, newPlayer.trophies);
return lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `860512303233236995`,
  content: `<@849123406477656086>`
})
});
let a = []
client.on('messageCreate',(message) =>{
  if(message.channelId === '1028321836666200185') {
    a.push(message.content)
    console.log(a)
}
  });
beast.events.addPlayers(a)
beast.events.on('playerChange',(oldPlayer,newPlayer) =>{
    console.log(newPlayer.tag) 
    console.log(oldPlayer.trophies,newPlayer.trophies) 
});
async function () {
  await beast.login({email:process.env.mail,password:process.env.pass,cache:true})
    await beast.events.init();
})();
client.login(mySecret)

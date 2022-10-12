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
beast.events.addPlayers(['#8P2QG08P']);
beast.events.setPlayerEvent({
    name: 'playerChange',
    filter: (oldPlayer, newPlayer) => {
        return oldPlayer.warOptedIn !== newPlayer.warOptedIn;
    }
});

beast.on('playerChange', async(oldPlayer, newPlayer) => {
    console.log(oldPlayer.warOptedIn, newPlayer.warOptedIn);
    await lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `860512303233236995`,
  content: `Beast `
});
});

(async function () {
    await beast.login({ email: process.env.mail, password: process.env.password });
    await beast.events.init();
})();
client.login(mySecret)

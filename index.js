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
beast.events.addPlayers(['#PV0G8V8V8']);
beast.events.setPlayerEvent({
    name: 'playerChange',
    filter: (oldPlayer, newPlayer) => {
        return oldPlayer.warOptedIn !== newPlayer.warOptedIn;
    }
});
beast.on('playerChange', (oldPlayer, newPlayer) => {
    console.log(oldPlayer.warOptedIn, newPlayer.warOptedIn);
return lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `860512303233236995`,
  content: `<@849123406477656086>`
})
});
(async function () {
  client.on('messageCreate', async(message) => {
    if (message.channelId == '1028321836666200185') {
      console.log(message)
      var clan = await beast.getClan(message.content)
      // var attacks = await clan.clan.attacks			
      
      for (let i=0;i<clan.members.length;i++) {
        let b = await lib.mysql.db['@0.2.1'].query({
          query: `insert into players values('${clan.members[i].name}','${clan.members[i].tag}','0','0','0','0','0','0');`, 
          charset: `UTF8MB4`});
          }
          }
      });
})();
(async function myTimer() {
  const date = new Date();
  console.log ('hemlo  '+ new Date()) 
  let a = await lib.mysql.db['@0.2.1'].query({
    query: `select * from master;`,
    charset: `UTF8MB4`
  });
  for (let i =0;i<a.result.length;i++) {
    var state = await beast.getClanWar(a.result[i].clan)
    if (state.state === a.result[i].state) {
      return }
    else {
      if (state.state = 'preparation') {
        await lib.mysql.db['@0.2.1'].query({
          query: `update master set state = 'inWar' where clan = '${a.result[i].clan}';`,
          charset: `UTF8MB4`
        });   }
      if (state.state === 'inWar') {
        await lib.mysql.db['@0.2.1'].query({
          query: `update master set state = 'warEnded' where clan = '${a.result[i].clan}';`,
          charset: `UTF8MB4`
        });  }
      else if (state.state === 'warEnded') {
        await lib.mysql.db['@0.2.1'].query({
          query: `update master set state = 'notInWar' where clan = '${a.result[i].clan}';`,
          charset: `UTF8MB4`
        });
        var clan = await beast.getClanWar(a.result[i].tag) 
        var attacks = await clan.clan.attacks
        for (let j=0;j<attacks.length;j++) {
          if (attacks[j].stars === '3'){
            await lib.mysql.db['@0.2.1'].query({
              query: `update players set triple = '${triple+1}' where tag = '${attacks[j].attackerTag}';`,
              charset: `UTF8MB4`
});
}
          else if (attacks[j].stars === '2'){
            await lib.mysql.db['@0.2.1'].query({
              query: `update players set two = '${two+1}' where tag = '${attacks[j].attackerTag}';`,
              charset: `UTF8MB4`
});
  }
          else if (attacks[j].stars === '1'){
            await lib.mysql.db['@0.2.1'].query({
              query: `update players set one = '${one+1}' where tag = '${attacks[j].attackerTag}';`,
              charset: `UTF8MB4`
});
    }
          else if (attacks[j].stars === '0'){
            await lib.mysql.db['@0.2.1'].query({
              query: `update players set zero = '${zero+1}' where tag = '${attacks[j].attackerTag}';`,
              charset: `UTF8MB4`
});
    }
    }
      return lib.discord.channels['@0.3.2'].messages.create({
         channel_id: `860512303233236995`,
         content: `<@849123406477656086>`
});
}}};
      setTimeout(myTimer,600000)
})();
(async function () {
  await beast.login({email:process.env.mail,password:process.env.pass,cache:true})
    await beast.events.init();
})();
client.login(mySecret)

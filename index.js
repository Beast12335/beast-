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
async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}; 
const {Client:ClashClient} = require('clashofclans.js');
const beast = new ClashClient() 
beast.events.addPlayers(['#PV0G8V8V8']);
beast.events.setPlayerEvent({
    name: 'playerChange',
    filter: (oldPlayer, newPlayer) => {
        return oldPlayer.warOptedIn !== newPlayer.warOptedIn;
    }
});
var cron = require('node-cron');
console.log('hello')
cron.schedule('*/2 * * * *', () => {
  console.log('running every minute to 1 from 5');
  return lib.discord.channels['@0.3.2'].messages.create({
  channel_id: `860512303233236995`,
  content: `<@849123406477656086>`
})
});
cron.schedule('6 * * Monday',() => {
  console.log('sending cc missers');
  (async function (){
    let test = await lib.mysql.db['@0.2.1'].query({
    query: `select * from master where channel  != '0';`,
    charset: `UTF8MB4`
  });
    for (let i =0;i<i.test.result.length;i++) {
      let b = await lib.discord.channels['@0.3.2'].messages.create({
        channel_id: `1047679692632768512`,
        content: `<@1024354105105334282> ${a.result[i].channel} ${a.result[i].clan}`
    });
    await sleep(500)
    }
})();
});

(async function () {
  client.on('messageCreate', async(message) => {
    if (message.channelId == '1028321836666200185') {
      console.log(message)
      var clan = await beast.getClan(message.content)
      // var attacks = await clan.clan.attacks			
      
      for (let i=0;i<clan.members.length;i++) {
        let c = await beast.getPlayer(clan.members[i].tag)
        let b = await lib.mysql.db['@0.2.1'].query({
          query: `insert into players values('${clan.members[i].name}','${clan.members[i].tag}','${clan.tag}','${c.trophies}','${c.attackWins}','${c.warStars}','${c.donations}','${c.clanCapitalContributions}','${c.warOptedIn}','${c.versusTrophies}','${c.versusBattleWins}','${c.achievements[3].value}','${c.achievements[31].value}','${c.achievements[c.achievements.length-2].value}','0');`, 
          charset: `UTF8MB4`});
          }
          }
      });
})();
(async function myTimer() {
  const date = new Date();
  console.log ('hemlo  ')
  console.log (new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}))
  let a = await lib.mysql.db['@0.2.1'].query({
    query: `select * from players;`,
    charset: `UTF8MB4`
  });
  for (let i =0;i<a.result.length;i++) {
    try{
      var player = await beast.getPlayer(a.result[i].tag)
      if (player.clan === null) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set clan = ' ' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else{
        if (!(player.clan.tag == a.result[i].clan)){
          await lib.mysql.db['@0.2.1'].query({
            query: `update players set clan = '${player.clan.tag}' where tag = '${player.tag}';`,
            charset: `UTF8MB4`
          });
          console.log('clan changes for '+player.name)
        }
        }
      if (!(player.name == a.result[i].name)){
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set name = '${player.name}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('name changes for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        }
      else if (!(player.attackWins == a.result[i].attacks)){
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set attacks = '${player.attackWins}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('attack changes for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if (!(player.warStars == a.result[i].wars)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set wars = '${player.warStars}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('warStars changed for '+player.name) 
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if (!(player.donations == a.result[i].donations)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set donations = '${player.donations}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('donations changed for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if (!(player.clanCapitalContributions == a.result[i].contributions)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set contributions = '${player.clanCapitalContributions}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('cc changed for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if(!(player.versusTrophies == a.result[i].bb)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set bb = '${player.versusTrophies}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('bb changed for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if(!(player.versusBattleWins == a.result[i].bbwin)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set bbwin = '${player.versusBattleWins}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('bTeophies changed for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if (!(player.achievements[3].value == a.result[i].obstacles)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set obstacles = '${player.achievements[3].value}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('obstacles changed for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if (!(player.achievements[31].value == a.result[i].games)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set games = '${player.achievements[31].value}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('games changed for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      else if (!(player.achievements[player.achievements.length-2].value == a.result[i].loot)) {
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set loot = '${player.achievements[player.achievements.length-2].value}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        });
        console.log('loot changed for '+player.name)
        await lib.mysql.db['@0.2.1'].query({
          query: `update players set last = '${date}' where tag = '${player.tag}';`,
          charset: `UTF8MB4`
        }); }
      }catch(e) {
        console.log(e) }
}
  setTimeout(myTimer,180000)
})();
(async function () {
  await beast.login({email:process.env.mail,password:process.env.pass,keyName:'test'})
    await beast.events.init();
})();
client.login(mySecret)

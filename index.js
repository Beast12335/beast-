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

beast.events.addWars(['#2YVLLLL28','#2QLCCPQUR']);
beast.events.setWarEvent({
    name: 'clanDescriptionChange',
    filter: (oldWar, newWar) => {
        return oldWar.state !== newWar.state;
    }
});

beast.on('clanDescriptionChange', (oldWar, newWar) => {
    console.log(oldWar.state, newWar.state);
});
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
beast.events.setWarEvent({
    name: 'attackChange',
    filter: (oldWar, newWar) => {
        return oldWar.clan.attackCount !== newWar.clan.attackCount;
    }
});
beast.on('attackChange', (oldWar, newWar) => {
    console.log(oldWar.clan.attackCount, newWar.clan.attackCount);
});
(async function () {
	await beast.login({email:process.env.mail,password:process.env.pass})
	client.on('messageCreate', async(message) => {
		if (message.channelId == '1028321836666200185') {
			console.log(message)
			var clan = await beast.getClan(message.content)
                        var attacks = await clan.clan.attacks
			beast.events.addWars(['message.content']);
			for (let i=0;i<clan.members.length;i++) {
				let b = await lib.mysql.db['@0.2.1'].query({
  query: `insert into players values('${clan.members[i].name}','${clan.members[i].tag}','0','0','0','0','0');`,
  charset: `UTF8MB4`
});
}
			}
		});
	         beast.on('attackChange',async(oldWar, newWar) => {
                        console.log(oldWar.clan.attackCount, newWar.clan.attackCount);
                        if (attacks[attacks.length-1].stars === '3'){
			       await lib.mysql.db['@0.2.1'].query({
                                      query: `update players set three = ${three+1} where tag = ${attacks[attacks.length-1].attackerTag};`,
                                      charset: `UTF8MB4`
});
		}
                       if (attacks[attacks.length-1].stars === '2'){
			        await lib.mysql.db['@0.2.1'].query({
                                       query: `update players set two = ${two+1} where tag = ${attacks[attacks.length-1].attackerTag};`,
                                       charset: `UTF8MB4`
});
					}
                       if (attacks[attacks.length-1].stars === '1'){
			        await lib.mysql.db['@0.2.1'].query({
                                       query: `update players set one = ${one+1} where tag = ${attacks[attacks.length-1].attackerTag};`,
                                       charset: `UTF8MB4`
});
		}
                       if (attacks[attacks.length-1].stars === '0'){
			        await lib.mysql.db['@0.2.1'].query({
                                       query: `update players set zero = ${zero+1} where tag = ${attacks[attacks.length-1].attackerTag};`,
                                       charset: `UTF8MB4`
});
		}
                       return lib.discord.channels['@0.3.2'].messages.create({
                               channel_id: `860512303233236995`,
                               content: `<@849123406477656086>`
})
});
    await beast.events.init();
})();

client.login(mySecret) 

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

cp_rand = Math.floor((Math.random() * 10) + 1);
console.log(cp_rand);
cp_count = 0;

msg_rand = Math.floor((Math.random() * 100) + 1);
msg_count = 0;

client.on('message', msg => {
    if (msg.content.toLowerCase().includes(' cp')) {
        if (cp_rand === cp_count) {
            msg.reply('no u');
            cp_count = 0;
            cp_rand = Math.floor((Math.random() * 10) + 1);
        } else {
            cp_count++;
            console.log(cp_count);
        }
    }
    if (msg.content === '!id') {
        msg.channel.send('no-bot');
    }
});

var games = {};
var bee = 'this';

client.on('presenceUpdate', (oldMember, newMember) => {
    const channel = newMember.guild.channels.find(ch => ch.name === 'bots');

    if (newMember.presence.game){
        console.log(newMember.presence.game);

        console.log(newMember.user.tag + ': ' + newMember.presence.game.name);
        if (newMember.user.tag in games){
            console.log('user already in games');
        } else {
            games[newMember.user.tag] = { [newMember.presence.game.name]: newMember.presence.game.timestamps.start};
            console.log('user added to games');
            console.log(games);
            //console.log(games['base#0525'][Spectacle]);
            console.log(games['base#0525']['Spectacle']);
        }
    } else {
        console.log(newMember.presence.status + ' no game');
    }
    
});

client.login(process.env.BOT_TOKEN);
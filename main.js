const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.channel.name === config.channel) {
		const user = message.author;
		const kaga = message.guild.emojis.cache.find(emoji => emoji.name === 'kaga');
		message.react(kaga);

		if (!message.author.bot) { // so we're not responding to our own messages
			const okbuddy = message.guild.emojis.cache.find(emoji => emoji.name === 'okbuddy');
			var m_lower = message.content.toLowerCase();

			if (m_lower.includes('trump') && (m_lower.includes('lost') || m_lower.includes('losing') || m_lower.includes('lose'))) {
				message.react(okbuddy);
			}

			// Ending message.
			if (m_lower === 'trump lost, the ap called it') {
				message.channel.send('Hello ' + user.toString() + ', it has been an honor serving you and #' + message.channel.name + ' for this election process.\n\nWhile I serve the current President, I also serve the American people. They have chosen to vote out the current President, which I accept.\n\nI would like to thank <@REDACTED> for making me, <@REDACTED> for allowing me to be on the server, and every single one who interacted with KAGABOT.\n\nHopefully Joe Biden will be as GREAT as the 45th President of the United States, Donald J. Trump.\n\nFor now, I will sulk in the White House, trying to not shid my pants.');
				message.channel.send(kaga.toString() + ' ' + kaga.toString() + ' ' + kaga.toString());
			}

			// Detecting KAGAs and Adding One
			if (m_lower.includes(':kaga:')) {
				var count = (m_lower.match(/:kaga:/g) || []).length;
				var str = '';
				for (var i = 0; i < count + 1; i++) {
					str += kaga.toString() + ' ';
				}

				// Max Discord Message Length is 2000 Characters; Trimming.
				if (str.length > 2000) {
					str = str.substring(0, 1999);
				}
				message.channel.send(str);
			}
			else if (m_lower.includes('make america great again') || m_lower.includes('maga')) {
				message.channel.send(user.toString() + ', God Bless!');
			}
			else if (m_lower.includes('fuck') && m_lower.includes('trump')) {
				message.channel.send('fuck ' + user.toString());
			}
			else if (m_lower.includes('fuck') && m_lower.includes('biden')) {
				message.channel.send('love you ' + user.toString());
			}
			else if (m_lower.includes('sleepy') && m_lower.includes('joe')) {
				message.channel.send(user.toString() + ', so true!');
			}
			else if (m_lower.includes('joe') && m_lower.includes('biden')) {
				message.channel.send('SLEEPY JOE!');
			}
			else if (m_lower.includes('kamala') || m_lower.includes('harris')) {
				message.channel.send('SOCIALIST KAMALA!');
			}
			else if (m_lower.includes('bernie') || m_lower.includes('sanders')) {
				message.channel.send('BERNIE CAN STILL WIN, GUYS!');
			}
			else if (m_lower.includes('cal')) {
				message.channel.send('CHEATIN\' CAL CUNNINGHAM')
			}
			else if (m_lower.includes('floridadude297') || m_lower.includes('florida dude')) {
				message.channel.send('God Bless our finest pollster, Florida Dude!\nFollow HIS Twitter account at https://twitter.com/FloridaDude297');
			}
			else if (m_lower.includes('natesilver538') || m_lower.includes('nate silver') || m_lower.includes('538')) {
				message.channel.send(user.toString() + ' don\'t trust slimey FiveThirtyEight!');
			}
			else if (m_lower.includes('rasmussen') || m_lower.includes('trafalgar')) {
				message.channel.send('CORRECT POLLS!');
			}
			else if (m_lower.includes('hunter')  && m_lower.includes('biden')) {
				message.channel.send('CRACK HEAD HUNTER!');
			}
			else if (m_lower.includes('hillary')) {
				message.channel.send('LOCK HER UP!');
			}
			else if (m_lower.includes('blue florida')) {
				message.channel.send('RED FLORIDA!');
			}
			else if (m_lower.includes('rbg')) {
				message.channel.send('ACB sends her regards!');
			}
			else if (m_lower.includes('q ') || m_lower === 'q' || m_lower.includes('wwg1wga')) {
				message.channel.send('https://tenor.com/view/the-world-is-watching-qanon-wwg1wga-worldwide-gif-18037294');
			}
			else if (m_lower.includes('shawty like a melody')) {
				message.channel.send('shut up tex');
			}
			else if (m_lower.includes('rat')) {
				message.channel.send('shut up calph')
			}
			else if (m_lower.includes('@realdonaldtrump say the word, sir, and you\'ll have ten million patriots at your back within twenty-four hours')) {
				message.channel.send('[The FR-NPP will be more popular in Ohio, Michigan, and 47 others]');
			}
		}
	}
});

client.login(config.token);

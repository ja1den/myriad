// Import
import Discord from 'discord.js';
import 'colors';

// Handle Exit
process.on('exit', () => console.log(''));

// Token
if (process.env.TOKEN === undefined) {
	console.log('TOKEN cannot be undefined.'.red);
	process.exit(1);
}

// Main
const client = new Discord.Client({
	presence: {
		activity: { type: 'LISTENING', name: 'm!help' }
	}
});

client.on('ready', () => {
	console.log('Logged in as', client.user?.username.cyan);
	console.log(`\u2728  Guilds: ${client.guilds.cache.size}`.green);
});

client.login(process.env.TOKEN);

// Handle Exit
['SIGINT', 'SIGTERM', 'SIGUSR2'].forEach(signal => 
	process.on(signal, () => client.destroy())
);

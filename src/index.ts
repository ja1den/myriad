// Import
import Discord from 'discord.js';
import 'colors';

// Handle Exit
process.on('exit', () => console.log());

// Token
const token = process.env.DISCORD_TOKEN;

if (token === undefined) {
	console.log('DISCORD_TOKEN cannot be undefined.'.red);
	process.exit(1);
}

// Main
const client = new Discord.Client({
	presence: {
		activity: { type: 'LISTENING', name: 'm!help' },
		status: 'online',
	},
});

client.on('ready', () => {
	console.log('Logged in as', client.user?.username.cyan);
	console.log(`\u2728  Guilds: ${client.guilds.cache.size}`.green);
});

client.login(token);

// Handle Exit
for (const signal of ['SIGINT', 'SIGTERM', 'SIGUSR2']) {
	process.on(signal, () => {
		client.destroy();
		process.exit();
	});
}

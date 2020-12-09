// Import
import Discord from 'discord.js';
import 'colors';

// Main
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Logged in as', client.user?.tag.cyan);
	console.log(`\u2728  Guilds: ${client.guilds.cache.size}`.green);

	client.user
		?.setPresence({
			activity: { type: 'LISTENING', name: 'm!help' },
			status: 'online',
		})
		.catch(console.error);
});

client.login(process.env.DISCORD_TOKEN);

// Handle Exit
for (const signal of ['SIGINT', 'SIGTERM', 'SIGUSR2']) {
	process.on(signal, () => {
		client?.destroy();
		process.exit();
	});
}

process.on('exit', () => console.log());

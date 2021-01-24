// Import
import Discord from 'discord.js';
import 'colors';

// Modules
import sequelize from './lib/sequelize';

// Main
async function main() {
	// Handle Exit
	process.on('exit', () => console.log(''));

	// Sequelize
	try {
		await sequelize.authenticate();
	} catch ({ message }) {
		console.error(('Database: ' + message).red);
		process.exit(1);
	}

	// Bot
	const client = new Discord.Client({
		presence: {
			activity: { type: 'LISTENING', name: 'm!help' }
		}
	});

	client.on('ready', () => {
		console.log('Logged in as', client.user?.username.cyan);
		console.log(`\u2728  Guilds: ${client.guilds.cache.size}`.green);
	});

	// Login
	client.login(process.env.BOT_TOKEN).catch(({ message }) => {
		console.error(('Discord: ' + message).red);
		process.exit(1);
	});

	// Handle Exit
	['SIGINT', 'SIGTERM', 'SIGUSR2'].forEach(signal => {
		process.on(signal, () => {
			client.destroy();
			sequelize.close();
		});
	});
}
main();

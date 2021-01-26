// Import
import { readdirSync } from 'fs';
import { join } from 'path';

import { Sequelize } from 'sequelize';

// Sequelize
const sequelize = new Sequelize({
	dialect: 'mysql',
	logging: false,
	
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT as string),

	database: process.env.DB_NAME,

	username: process.env.DB_USER,
	password: process.env.DB_PASS
});

export default sequelize;

// Models
const models = join(__dirname, '..', 'models');

for (const model of readdirSync(models)) {
	require(join(models, model));
}

sequelize.sync({ force: true });

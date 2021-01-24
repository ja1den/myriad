// Import
import { Sequelize } from 'sequelize';

// Sequelize
const sequelize = new Sequelize({
	dialect: 'mysql',
	logging: false,
	
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,

	username: process.env.DB_USER,
	password: process.env.DB_PASS
});

// Export
export default sequelize;

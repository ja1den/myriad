// Import
import { DataTypes, Model, Optional, Association } from 'sequelize';
import {
	BelongsToGetAssociationMixin,
	BelongsToCreateAssociationMixin
} from 'sequelize';

// Modules
import sequelize from '../lib/sequelize';

// Types
interface MessageAttributes {
	guild: string;
	channelId: string;
	id: string;
	content: string;
}

type MessageCreationAttributes = Optional<MessageAttributes, 'id'>;

// Model
export default class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
	guild!: string;
	channelId!: string;
	id!: string;
	content!: string;

	readonly createdAt!: Date;
	readonly updatedAt!: Date;

	getChannel!: BelongsToGetAssociationMixin<Channel>;
	createChannel!: BelongsToCreateAssociationMixin<Channel>;

	readonly channel?: Channel;

	static associations: {
		channel: Association<Message, Channel>
	}
}

Message.init({
	guild: {
		type: DataTypes.STRING,
		allowNull: false
	},
	channelId: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id: {
		type: DataTypes.STRING,
		primaryKey: true
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, { sequelize, modelName: 'message', underscored: true });

// Links
import Channel from './channel';
Message.belongsTo(Channel);

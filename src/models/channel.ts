// Import
import { DataTypes, Model, Optional, Association } from 'sequelize';
import {
	HasManyGetAssociationsMixin,
	HasManyAddAssociationMixin,
	HasManyHasAssociationMixin,
	HasManyCountAssociationsMixin,
	HasManyCreateAssociationMixin
} from 'sequelize';

// Modules
import sequelize from '../lib/sequelize';

// Types
interface ChannelAttributes {
	guild: string;
	id: string;
}

type UserCreationAttributes = Optional<ChannelAttributes, 'id'>;

// Model
export default class Channel extends Model<ChannelAttributes, UserCreationAttributes> implements ChannelAttributes {
	guild!: string;
	id!: string;

	readonly createdAt!: Date;
	readonly updatedAt!: Date;

	getMessages!: HasManyGetAssociationsMixin<Message>;
	addMessage!: HasManyAddAssociationMixin<Message, number>;
	hasMessage!: HasManyHasAssociationMixin<Message, number>;
	countMessages!: HasManyCountAssociationsMixin;
	createMessage!: HasManyCreateAssociationMixin<Message>;

	readonly messages?: Message[];

	static associations: {
		messages: Association<Channel, Message>
	}
}

Channel.init({
	guild: {
		type: DataTypes.STRING,
		allowNull: false
	},
	id: {
		type: DataTypes.STRING,
		primaryKey: true
	}
}, { sequelize, modelName: 'channel', underscored: true });

// Links
import Message from './message';
Channel.hasMany(Message);

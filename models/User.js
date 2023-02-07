const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usersSchema = new Schema({
	name: { type: String},
	email: { type: String},
	phone: { type: String},
	company_name: { type: String},
	company_website: { type: String},
	password: { type: String},
	confirm_password: { type: String},
	check_t_and_c: { type: String},
});

module.exports = mongoose.model('User', usersSchema, 'users')
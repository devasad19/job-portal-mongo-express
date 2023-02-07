const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobsCategorySchema = new Schema ({
	title: { type: String },
	type: { type: String },
}, {timestamps: true})

module.exports = mongoose.model('JobsCategory', jobsCategorySchema, 'jobsCategory')


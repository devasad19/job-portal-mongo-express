const JobsCategory = require('../models/JobsCategory');
const User = require('../models/User')

const index = (req, res, next) => {
	JobsCategory.find()
	.then(response => {
		res.json(response)
	})
	.catch(error => {
		res.json({
			message: 'An error occured'
		})
	})
}

const store = (req, res, next) => {
	let jobsCatData = new JobsCategory({
		title: req.body.title,
		type: req.body.type
	})
	jobsCatData.save()
	.then(response => {
		res.json({
			message: 'Jobs Category Added Successfully update'
		})
	})
	.catch(error => {
		res.json({
			message: 'JobsCategory NOT Added. Something went wrong.'
		})
	})
}

const empRegister = (req, res, next) => {
	var errors = []
	if(!req.body.name){
		errors.push('Name can not be empty')
	}

	var empRegisterData = new User ({
		name: req.body.name,
		email: req.body.email,
		phone: req.body.phone,
		company_name: req.body.company_name,
		company_website: req.body.company_website,
		password: req.body.password,
		confirm_password: req.body.confirm_password,
		check_t_and_c: req.body.check_t_and_c,
	});

	empRegisterData.save()
	.then(response => {
		res.json({
			message: 'Employee Data Stored Successfully ssss'
		})
	})
	.catch(error => {
		res.json({
			message: 'Employee Data NOT Stored.'
		})
	})



}




module.exports = {
	index, store, empRegister
}




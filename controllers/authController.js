const User = require('./../models/User')

const login = (req, res, next) => {

	 // const user = User.find(x=> x.username === req.body.username && x.password === req.body.password);
	 // if(!user){ 
	 // 	return throwError({ error: 'Username or password is incorrect' })
	 // 	.pipe(materialize(), delay(500), dematerialize());
	 // } 

	  
	 User.findOne({
	 	"email": req.body.username,
	 	"password": req.body.password,
	 })
	 .then(response => {
	 	res.json(response)
	 })
	 .catch(error => {
	 	res.json({
	 		message: 'Something went wrong. not login. Error: '+ error
	 	})
	 })
	 
}

 

module.exports = { login }




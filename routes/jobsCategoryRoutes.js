const express = require("express");
const router = express.Router()
const jobsCategoryController = require('../controllers/JobsCategoryController')
const authController = require('../controllers/authController');



router.get('/jobs-category', jobsCategoryController.index)
router.post('/jobs-category', jobsCategoryController.empRegister)
router.post('jobs-category/store', jobsCategoryController.store)


module.exports = router






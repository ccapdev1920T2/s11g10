const { check } = require('express-validator');

const validation = {
	signupValidation : function () {

		var validation = [
			check("name", "Please enter name").notEmpty(),
			check("username", "Please enter username").notEmpty(),
			check("pass", "Please enter password").notEmpty(),
			check("pass1", "Please confirm password").notEmpty(),
			check("email", "Please enter email").notEmpty()
		];

		return validation;
	}
}

module.exports = validation;
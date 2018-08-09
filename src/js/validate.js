window.validateEmail = function (email) {
	if (email.indexOf('@') < 0) {
		return false;
	}

	const tokens = email.split('@');
	if (tokens.length != 2) { //Verifica que el correo solo tenga 2 partes
		return false; //Si es distinto de 2, será false
	}

	if (tokens[1].indexOf('.') < 0) {
		return false;
	}

	const domTokens = tokens[1].split('.');
	if (domTokens.length != 2) {
		return false;
	}
	if (domTokens[0].length < 1) {
		return false
	}
	if (domTokens[1].length < 1) {
		return false
	}

	return true;
};


window.validatePassword = function (password) {
	if (password.length > 8) {
		return false;
	}
	
		if (typeof(password) != "number") {
			return false;
		}
	
	return true;

}

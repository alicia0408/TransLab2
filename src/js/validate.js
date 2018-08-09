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
	if (password.length > 8) {// si la contraseña es mayor de 8 caracteres
		return false;// retorname falso
	}
	
		if (typeof(password) != "number") {// si el tipo de contraseña es distinto a numero
			return false;// retorname falso
		}
	
	return true;

}

window.validateCard = (tarjeta) => {

	if (tarjeta.length <= 10) {
		return false;
	}
		if (isNaN(tarjeta) === false) {
			return false;
		}
			if (!tarjeta.trim() === ' ') {
				return false;
			} 
			
		
	return true;
};

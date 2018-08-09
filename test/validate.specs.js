const assert = require('chai').assert;
global.window = global;
require('../src/js/validate'); //Enlace de archivo

describe('Validar emails', () => { //Describe lo que habrá dentro de cada función
	describe('Debería verificar si existe el arroba', () => {
		it('Debería el correo tener solo un arroba', () => { 
			assert.equal(validateEmail("asdf@asdf.com"), true); 
			assert.equal(validateEmail("asdf@@asdf.com"), false);
			assert.equal(validateEmail("asdf.com"), false);
		});
		it('Debería el correo tener un arroba antes del dominio', () => {
			assert.equal(validateEmail(".com@asdf"), false);
			assert.equal(validateEmail("fabian@laboratoria.la"), true);
		});
	}); (
		describe('Debería verificar si tiene un dominio', () => {
			it('Tiene un punto y luego solo caracteres del alfabeto', () => {
				assert.equal(validateEmail('asdf@asdf'), false);
				assert.equal(validateEmail('asdf@asdf.'), false);
			});
		}));
	describe('Debería verificar que no tenga carácteres raros', () => {

	}); (
		describe('Debería verificar que tenga al menos 1 caracter antes del arroba', () => {

		}));
});

describe('Validar contraseña', () => { 
	describe('Debería verificar si existe números', () => {
		it('Debería la contraseña tener solo números', () => {
			assert.equal(validatePassword("12345678"), true);
			assert.equal(validatePassword("abcgjhbjjak"), false);
			assert.equal(validatePassword("ah2544gtab"), false);
		});
		it('Debería la contraseña tener solo 8 caracteres', () => {
			assert.equal(validateEmail("12345678910"), false);
			assert.equal(validateEmail("12345678"), true);
		});
	}); (
		describe('Debería verificar si tiene letras', () => {
			it('Tiene numeros y solo caracteres 8', () => {
				assert.equal(validateEmail('gagafaffssggs'), false);
				assert.equal(validateEmail('aavvaHGTY'), false);
			});
		}));
	describe('Debería verificar que no tenga carácteres raros', () => {

	});
});






	
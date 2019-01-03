class Mensagem {

	//es6 allows default values for arguments
	constructor(texto='') {
		this._texto = texto;
	}

	get texto() {
		
		return this._texto;
	}

	set texto(texto) {

		this._texto = texto;
	}
}
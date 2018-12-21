class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
	}

	adiciona(event) {
		event.preventDefault();

		let data = new Date(
			...this._inputData.value
				.split("-")
				.map((item, indice) => item - indice %2)
		);

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);

		console.log(negociacao);
	}

	_limpaFormulario() {

		this._inputData.value = "";
		this._inputQuantidade.value = 0;
		this._inputValor.value = 0;
		
		this._inputData.focus();
	}
}
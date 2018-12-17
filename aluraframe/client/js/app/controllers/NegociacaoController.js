class NegociacaoController {

	constructor() {
		let $ = document.querySelector.bind(document);
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
	}

	adiciona(event) {
		event.preventDefault();

		console.log("Entrou");

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

		//resetaFormulario();
		console.log(negociacao);

	}

	resetaFormulario() {
		let formulario = $(".form");
		formulario.reset();
		
		this._inputData.focus();
	}
}
class NegociacaoController {
    
	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._ordemAtual = "";

		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($("#negociacoes-view")),
			"adiciona", "esvazia", "ordena", "inverteOrdem"
		);
	
		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($("#mensagem-view")),
			"texto"
		);
	}
	
	adiciona(event) {
			
		event.preventDefault();		
		this._listaNegociacoes.adiciona(this._criaNegociacao());

		this._mensagem.texto = "Negociação adicionada com sucesso!";

		this._limpaFormulario();
	}

	apaga(event) {
		
		event.preventDefault();

		this._listaNegociacoes.esvazia();

		this._mensagem.texto = "Negociações apagadas com sucesso!";
	}
	
	_criaNegociacao() {
			
		return new Negociacao(
				DateHelper.textoParaData(this._inputData.value),
				this._inputQuantidade.value,
				this._inputValor.value);    
	}

	_limpaFormulario() {
	 
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;
		this._inputData.focus();   
	}

	importaNegociacoes() {

		let service = new NegociacaoService();

		service.obterNegociacoes()
		.then(negociacoes => {
				negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
				this._mensagem.texto = "Negociações importadas com sucesso";
			})
			.catch(erro => this._mensagem.texto = erro);
	}

	ordena(coluna) {
		
		if(this._ordemAtual == coluna) {
			this._listaNegociacoes.inverteOrdem();
		} else {
			this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
		}
		
		this._ordemAtual = coluna;
	}

	gravar(event) {

		event.preventDefault();
		
		console.log("Enviando post");

		let negociacao = {
			data: this._inputData.value,
			quantidade: this._inputQuantidade.value,
			valor: this._inputValor.value
		};

		console.log(negociacao);

		new NegociacaoService().gravarNegociacao(negociacao)
			.then(() => this._mensagem.texto = "Negociação gravada com sucesso")
			.catch(() => this._mensagem.texto = "Erro ao gravar a negociação")
	}
}
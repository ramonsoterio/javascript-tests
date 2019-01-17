class NegociacaoController {
    
	constructor() {

		let $ = document.querySelector.bind(document);
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');

		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($("#negociacoes-view")),
			"adiciona", "esvazia"
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

		//-- Callback Hell
		//-- error first convention for dealing with asynchronous request
		service.obterNegociacoesDaSemana((erro, negociacoes) => {
			if(erro) {
				this._mensagem.texto = erro;
				return;
			}

			negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
			this._mensagem.texto = "1. Negociações importadas com sucesso";
		});

		service.obterNegociacoesDaSemanaAnterior((erro, negociacoes) => {
			if(erro) {
				this._mensagem.texto = erro;
				return;
			}

			negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
			this._mensagem.texto = "2. Negociações da semana anterior importadas com sucesso";//teste
		});

		service.obterNegociacoesDaSemanaRetrasada((erro, negociacoes) => {
			if(erro) {
				this._mensagem.texto = erro;
				return;
			}

			negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
			this._mensagem.texto = "3. Negociações da semana retrasada importadas com sucesso";
		});
	}
}
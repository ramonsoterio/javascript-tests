class NegociacaoService {

	obterNegociacoesDaSemana(callbackFunction) {
		let xhr = new XMLHttpRequest();
		
		xhr.open("GET", "\\negociacoes\\semana");
		
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					callbackFunction(null, JSON.parse(xhr.responseText)
						.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
				} else {
					console.log(xhr.responseText);
					callbackFunction("Não foi possível obter as negociações");
				}
			};
		}

		xhr.send();
	}

	obterNegociacoesDaSemanaAnterior(callbackFunction) {
		let xhr = new XMLHttpRequest();
		
		xhr.open("GET", "\\negociacoes\\anterior");
		
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					callbackFunction(null, JSON.parse(xhr.responseText)
						.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
				} else {
					console.log(xhr.responseText);
					callbackFunction("Não foi possível obter as negociações");
				}
			};
		}

		xhr.send();
	}

	obterNegociacoesDaSemanaRetrasada(callbackFunction) {
		let xhr = new XMLHttpRequest();
		
		xhr.open("GET", "\\negociacoes\\retrasada");
		
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					callbackFunction(null, JSON.parse(xhr.responseText)
						.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
				} else {
					console.log(xhr.responseText);
					callbackFunction("Não foi possível obter as negociações");
				}
			};
		}

		xhr.send();
	}
}
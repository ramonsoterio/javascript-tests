
class ProxyFactory {

	static create(objeto, props, acao) {
		return new Proxy(objeto, {
			//-- Intercepta métodos
			get(target, prop, receiver) {
				if(props.includes(prop) && ProxyFactory._isFuncao(target[prop])) {
					return function() {

						console.log(`A propriedade "${prop}" foi interceptada`);
						//-- Retorno do método. Se não retornar o retorno, apenas executa o método
						let retornoApply = Reflect.apply(target[prop], target, arguments);
						acao(target);
						return retornoApply;
					}
			}
			return Reflect.get(target, prop, receiver);
			},

			set(target, prop, value, receiver) {

				let retorno = Reflect.set(target, prop, value, receiver);

				if(props.includes(prop)) {
					acao(target);
				}

				return retorno;
			}
		})
	}

	static _isFuncao(func) {
		return typeof(func) == typeof(Function);
	}
}
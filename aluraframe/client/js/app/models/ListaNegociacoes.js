class ListaNegociacoes {
    
    constructor(contexto, armadilha) {
        
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    }
    
    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        //--função que recebe a função, contexto, parâmetros a serem mandados na função
        Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);
    }

    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }

    esvazia() {

        this._negociacoes = [];
        Reflect.apply(this._armadilha, this._contexto, [this]);
        //this._armadilha(this);
    }
}
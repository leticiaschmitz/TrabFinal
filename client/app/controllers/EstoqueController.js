class EstoqueController {
    constructor(){
        const $ = document.querySelector.bind(document);
        
        this._inputData = $ ('#data');
        this._inputProduto =  $ ('#produto');
        this._inputQuantidade =  $ ('#quantidade');
        this._inputValor =  $ ('#valor');
        this._estoques = new Bind(
            new Estoques(), 
            new EstoquesView('#estoques'), 
            'adiciona', 
            'esvazia'
        );
        this._service = new EstoqueService();

        this._mensagem = new Bind(new Mensagem(), new MensagemView ('#mensagemView'), 'texto');

    }
    adiciona(event){
        try{
            event.preventDefault();         
            this._estoques.adiciona(this._criaEstoque());
            this._mensagem.texto = 'Negociação adicionado com sucesso!';
            this._limparFormulario();
        }catch(err){
            console.log(err);
            if (err instanceof DataInvalidaException) {
                this._mensagem.texto = err.message;
            }else{
                this._messagem.texto = 'Um erro inesperado aconteceu. Entre em contato com o suporte';
            }
            this._mensagem.texto = err.message;
        }
    }

    _limparFormulario(){
        this._inputData.value = '01/01/2020';
        this._inputProduto.value = 12345;
        this._inputQuantidade.value = 1;
        this._inputValor.value = 2.0;
        this._inputData.focus();
    }

    _criaEstoque() {
        return new Estoque(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputProduto.value), 
            parseInt(this._inputQuantidade.value), 
            parseFloat(this._inputValor.value)
        );
    }

    apaga(){
        this._estoques.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }    
}
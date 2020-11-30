class Estoques{
    constructor() {
        this._estoques = [];
        Object.freeze(this);
    }
    adiciona(estoque){
        console.log(this);
        this._estoques.push(estoque);
    }
    paraArray(){
        return [].concat(this._estoques);
    }

    esvazia(){
        this._estoques.length = 0;
    }
}
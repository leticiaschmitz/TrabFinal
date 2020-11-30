class Estoque{
    constructor(_data, _produto, _quantidade, _valor){

        Object.assign(this, {_produto, _quantidade, _valor});
        this._data = new Date(_data.getTime());

        Object.freeze(this);
    }

    get data(){
        //return this._data;
        return new Date(this._data.getTime())
    }

    get produto(){
        return this._produto;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
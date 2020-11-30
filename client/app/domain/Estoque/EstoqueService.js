class EstoqueService {
    obterEstoquesDaSemana(callback){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'estoques/semana');
        xhr.onreadystatechange = () => {
            if (xhr.readyState ==4){
                if (xhr.status == 200) {
                    const estoques = JSON.parse(xhr.responseText)
                        .map(
                            objeto => 
                            new Estoque(
                                new Date(objeto.data),
                                    objeto.produto, 
                                    objeto.quantidade, 
                                    objeto.valor
                                )
                        )
                    callback(null, estoques);
                }else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações da semana', null);
                }
            } 
        };
        xhr.send();
    }
}
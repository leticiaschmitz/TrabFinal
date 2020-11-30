class EstoquesView extends View{
    template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>PRODUTO</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>

                ${model
                    .paraArray()
                    .map(estoque =>
                        `<tr>
                            <td>${DateConverter.paraTexto(estoque.data)}</td>
                            <td>${estoque.produto}</td>
                            <td>${estoque.quantidade}</td>
                            <td>${estoque.valor}</td>
                        </tr>`
                    )
                    .join('')}
                
                </tbody>
            </table>`;
    }
}
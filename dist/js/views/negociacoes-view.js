export class NegociacoesView {
    constructor(seletorHTML) {
        //Faz com que a memória guarde o elemento do dom, em chace. Que é dado como propriedade no controller
        this.elemento = document.querySelector(seletorHTML);
    }
    template(modelo) {
        return `
            <table class="table table-hover table-bordered"
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th> 
                    </tr>
                <thead>
                <tbody>
                ${modelo.listagem().map(itemNegociado => {
            return `
                  <tr>
                  // Intl = um formatador de parâmetro globlais. DateTimeFormat('en-US'), padrão é da localização do navegador
                      <td>${new Intl.DateTimeFormat().format(itemNegociado.data)}</td>
                      <td>${itemNegociado.quantidade}</td>
                      <td>${itemNegociado.valor}</td>
                  </tr>
                  `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    atualizaTela(modelo) {
        const template = this.template(modelo);
        // console.log(template);
        this.elemento.innerHTML = template;
    }
}

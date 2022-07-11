export class NegociacoesView {
    constructor(seletorHTML) {
        //Faz com que a memória guarde o elemento do dom, em chace. Que é dado como propriedade no controller
        this.elemento = document.querySelector(seletorHTML);
    }
    template() {
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
                </tbody>
            </table>
        `;
    }
    atualizaTela() {
        this.elemento.innerHTML = this.template();
    }
}

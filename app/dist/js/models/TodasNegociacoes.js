export class TodasNegociacoes {
    constructor() {
        this.Todasnegociacoes = [];
    }
    adicionaTrade(trade) {
        this.Todasnegociacoes.push(trade);
    }
    listagem() {
        return this.Todasnegociacoes;
    }
}

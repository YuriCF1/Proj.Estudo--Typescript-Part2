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
    exibeConsole() {
        return (JSON.stringify(this.Todasnegociacoes, null, 2));
    }
    ehIgual(TodasNegociacoes) {
        return JSON.stringify(this.Todasnegociacoes) === JSON.stringify(TodasNegociacoes.listagem());
    }
}
//# sourceMappingURL=TodasNegociacoes.js.map
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaTrade(trade) {
        this.negociacoes.push(trade);
    }
    listagem() {
        return this.negociacoes;
    }
}
// const negociacoes = new Negociacoes();
// negociacoes.adiciona(new Negociacao())
// negociacoes.listagem().forEach(n => {
//     n.
// })

import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    adicionaTrade(trade: Negociacao) {
        this.negociacoes.push(trade)

    }

    listagem(): Array<Negociacao> {
        return this.negociacoes

    }
}

// const negociacoes = new Negociacoes();
// negociacoes.adiciona(new Negociacao())

// negociacoes.listagem().forEach(n => {
//     n.

// })
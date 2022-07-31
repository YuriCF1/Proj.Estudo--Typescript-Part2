import { Imprimivel } from "../utils/imprimivel.js";
export class TodasNegociacoes extends Imprimivel {
    constructor() {
        super(...arguments);
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
}

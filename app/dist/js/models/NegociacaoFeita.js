import { Imprimivel as Imprimivel } from "../utils/imprimivel.js";
export class NegociacaoFeita extends Imprimivel {
    constructor(_data, quantidade, valor) {
        super();
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static pegaString(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new NegociacaoFeita(date, quantidade, valor);
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const dataClone = new Date(this._data.getTime());
        return dataClone;
    }
    exibeConsole() {
        return (`
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor},
        `);
    }
}

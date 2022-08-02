export class NegociacaoFeita {
    constructor(_data, quantidade, valor) {
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
    ehIgual(negociacaoAceita) {
        return this.data.getDate() === negociacaoAceita.data.getDate()
            && this.data.getMonth() === negociacaoAceita.data.getMonth()
            && this.data.getFullYear() === negociacaoAceita.data.getFullYear();
    }
}
//# sourceMappingURL=NegociacaoFeita.js.map
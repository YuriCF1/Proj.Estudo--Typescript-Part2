// export class Negociacao {D
//     #data;
//     #quantidade;
//     #valor;

//     constructor(data, quantidade, valor) {
//         this.#data = data;
//         this.#quantidade = quantidade;
//         this.#valor = valor;
//     }

//     get data() {
//         return this.#data

//     }
//     get quantidade() {
//         return this.#quantidade

//     }
//     get valor() {
//         return this.#valor

//     }

//     get volume() {
//         return this.#quantidade * this.#valor;

//     }

// }

// Remover a hashtag, pois ela é syntax JS, a equipe TS recomenda usar
// private _data: Date;
// private _quantidade: number;
// private _valor: number;

// constructor(data: Date, quantidade: number, valor: number) {
//     this._data = data;
//     this._quantidade = quantidade;
//     this._valor = valor;
// }

export class NegociacaoFeita {
//     constructor(
//         private _data: Date,
//         private _quantidade: number,
//         private _valor: number
//     ) { }

//     get data(): Date {
//         return this._data

//     }
//     get quantidade(): number {
//         return this._quantidade

//     }
//     get valor(): number {
//         return this._valor

//     }

//     get volume(): number {
//         return this._quantidade * this._valor;

//     }

// }

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    // get data(): Date {
    //     return this._data

    // }
    // get quantidade(): number {
    //     return this._quantidade

    // }
    // get valor(): number {
    //     return this._valor

    // }

    //"getter fica, porque eu preciso do volume para calcular, porque eu quero que o getter se assemelhe a uma propriedade da classe.
    // Por debaixo dos panos ele faça o cálculo aqui para nós."
    get volume(): number {
        // return this._quantidade * this._valor;
        return this.quantidade * this.valor;

    }

    //Programação defensiva
    get data(): Date {
        const dataClone = new Date(this._data.getTime());
        console.log(this._data);
        return dataClone;
        // return this._data;

    }

}


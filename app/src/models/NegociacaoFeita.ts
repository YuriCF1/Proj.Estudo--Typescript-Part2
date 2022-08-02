// export class Negociacao {D
//     #data;
//     #quantidade;
//     #valor;

// import { Comparavel } from "../interfaces/comparavel.js";
import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel as Imprimivel } from "../utils/imprimivel.js";

import { interfaceModel } from "../interfaces/interfaceModel.js";
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


// export class NegociacaoFeita extends Imprimivel, x {

// ANTES EU PRECISAVA PASSAR 2 INTERFACES, MAS AGORA SÓ UMA QUE POSSUE AS DUAS ANTERIORES
// export class NegociacaoFeita implements Imprimivel, Comparavel<NegociacaoFeita> { //Mudando IMPRIMIVEL para o modo INTERFACE, eu uso o IMPLEMENTS
export class NegociacaoFeita implements interfaceModel<NegociacaoFeita> {
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
    ) {
        // Já que agora estou usando interface, não precisa de super(). Pois não estou extendendo uma classe

        // Tenho que garantir a chamada do construro da Imprimivel
        // super()
    }

    

    // Criando a negociação através de um arquivode texto. Strings
    public static pegaString(dataString: string, quantidadeString: string, valorString: string): NegociacaoFeita {
        //Tipando também o método para garantir que ele sempre volte negociacao
        //E não outro valor que eu coloque por acidente
        const exp = /-/g;

        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new NegociacaoFeita(date, quantidade, valor);
    }

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
        // console.log(this._data);
        return dataClone;
        // return this._data;

    }

    //________Parte 3_______
    public exibeConsole(): string {
        return (`
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor},
        `);
    }

    public ehIgual(negociacaoAceita: NegociacaoFeita): boolean {
        return this.data.getDate() === negociacaoAceita.data.getDate() 
        && this.data.getMonth() === negociacaoAceita.data.getMonth()
        && this.data.getFullYear() === negociacaoAceita.data.getFullYear()


    }


}


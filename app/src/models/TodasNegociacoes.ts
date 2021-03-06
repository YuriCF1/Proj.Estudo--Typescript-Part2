import { Comparavel } from "../interfaces/comparavel.js";
import { interfaceModel } from "../interfaces/interfaceModel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { NegociacaoFeita } from "./NegociacaoFeita.js";

// export class TodasNegociacoes extends Imprimivel {
    // ANTES EU PRECISAVA PASSAR 2 INTERFACES, MAS AGORA SÓ UMA QUE POSSUE AS DUAS ANTERIORES
    // export class TodasNegociacoes implements Imprimivel, Comparavel<TodasNegociacoes> { //Mudando IMPRIMIVEL para o modo INTERFACE, eu uso o IMPLEMENTS

    export class TodasNegociacoes implements interfaceModel<TodasNegociacoes> {

    //O tipo é array, e é bom dizer o tipo dele. Para que só aceite um tipo de dado.
    //Essa é a ferramente 'generics'
    //Por padrão, o tipo é 'any', mas com a config 'noimplicityany' ativada, tenho que fazer isso
    //Esse array agora só aceitará itens que correspondam a classe "Negociação"

    // private Todasnegociacoes: Array<NegociacaoFeita> = [];
    private Todasnegociacoes: NegociacaoFeita[] = [];
    public adicionaTrade(trade: NegociacaoFeita) {
        this.Todasnegociacoes.push(trade)

    }

    // listagem(): ReadonlyArray<NegociacaoFeita>{
    public listagem(): readonly NegociacaoFeita[] {
        //ReadonlyArray proibe qualquer modificação, inclusive chamar o '.pop'
        return this.Todasnegociacoes;

    }
    
    //Métodos antigos

    //     // return this.Todasnegociacoes

    //     //Cada item da lista, vai entrar em uma nova lista
    //     //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    //     //https://www.youtube.com/watch?v=Uft_UkXtqT0&ab_channel=DevPleno
    //     // return [...this.Todasnegociacoes]

    //________Parte 3_______
    public exibeConsole(): string {
        return (JSON.stringify(this.Todasnegociacoes, null, 2));
    }

    public ehIgual(TodasNegociacoes: TodasNegociacoes): boolean {
        return JSON.stringify(this.Todasnegociacoes) === JSON.stringify(TodasNegociacoes.listagem());
    }

}

// const Todasnegociacoes = new TodasNegociacoes();
// Todasnegociacoes.adiciona(new Negociacao())

// Todasnegociacoes.listagem().forEach(n => {
//     n.

// })
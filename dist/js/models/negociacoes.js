export class Negociacoes {
    constructor() {
        //O tipo é array, e é bom dizer o tipo dele. Para que só aceite um tipo de dado.
        //Essa é a ferramente 'generics'
        //Por padrão, o tipo é 'any', mas com a config 'noimplicityany' ativada, tenho que fazer isso
        //Esse array agora só aceitará itens que correspondam a classe "Negociação"
        this.negociacoes = [];
        //Métodos antigos
        //     // return this.negociacoes
        //     //Cada item da lista, vai entrar em uma nova lista
        //     //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        //     //https://www.youtube.com/watch?v=Uft_UkXtqT0&ab_channel=DevPleno
        //     // return [...this.negociacoes]
    }
    adicionaTrade(trade) {
        this.negociacoes.push(trade);
    }
    listagem() {
        //ReadonlyArray proibe qualquer modificação, inclusive chamar o '.pop'
        return this.negociacoes;
    }
}
// const negociacoes = new Negociacoes();
// negociacoes.adiciona(new Negociacao())
// negociacoes.listagem().forEach(n => {
//     n.
// })

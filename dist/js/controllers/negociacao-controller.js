import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
//Exporing the main class
export class NegociacaoController {
    //Pega os dados dos inputs do HTML
    constructor() {
        //Propriedade criada no módulo 4. Arquivo 'negocicoes.ts'
        // private negociacoes: Negociacoes = new Negociacoes()
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // adiciona() {
    //     const negociacao = new Negociacao(
    //         this.inputData.value,
    //         this.inputQuantidade.value,
    //         this.inputValor.value,
    //     );
    //     console.log(negociacao);
    // }
    // adiciona() {
    //     const exp = /-/g;
    //     const date = new Date(this.inputData.value.replace(exp, ','));
    //     const quantidade = parseInt(this.inputQuantidade.value);
    //     const valor = parseFloat(this.inputValor.value);
    //     const negociacao = new Negociacao(date, quantidade, valor);
    //     console.log(negociacao);
    // }
    //____________Organizing the code above, to make it more clear___________
    pegaValor() {
        //Tipando também o método para garantir que ele sempre volte negociacao
        //E não outro valor que eu coloque por acidente
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    adiciona() {
        const trader = this.pegaValor();
        // console.log(trader);
        this.negociacoes.adicionaTrade(trader);
        console.log(this.negociacoes.listagem());
        this.limparFormulario();
    }
    //Limpa o formulário e dá foco no primeiro valor
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

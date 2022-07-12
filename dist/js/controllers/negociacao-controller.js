import { NegociacaoFeita } from "../models/NegociacaoFeita.js";
import { TodasNegociacoes } from "../models/TodasNegociacoes.js";
//_________________________PARTE 2____________________
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
//Exporing the main class
export class NegociacaoController {
    //Pega os dados dos inputs do HTML
    //Não precisa de argumentos, já que a classe serve para chamar outras funções dentro dela
    //Se houver argumento, o TS vai pedir tais argumento na parte de app.ts
    //Argumento são necessários na hora de chamar a função/classe
    //Quando a classe NegociacaoController for chamada, ela usará o 'constructor' para pegar os dados
    constructor() {
        //Propriedade criada no módulo 4. Arquivo 'negocicoes.ts'
        // private negociacoes: Negociacoes = new Negociacoes()
        this.negociacoesTodas = new TodasNegociacoes();
        //_________________________PARTE 2____________________
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        //_________________________PARTE 2____________________
        // this.negociacoesView.template();
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
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
        return new NegociacaoFeita(date, quantidade, valor);
    }
    adiciona() {
        const trader = this.pegaValor();
        // console.log(trader);
        const novaData = trader.data.setTime(10);
        // console.log(novaData);
        this.negociacoesTodas.adicionaTrade(trader);
        // console.log(this.negociacoesTodas.listagem());
        // this.negociacoes.listagem().pop();
        this.limparFormulario();
        //______________________________________PARTE 2___________________
        //Atualizando a tela com a string da lista de negociações usando o template string
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
        this.mensagemView.atualizaTela('Negociação adicionada com sucesso');
    }
    //Limpa o formulário e dá foco no primeiro valor
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}

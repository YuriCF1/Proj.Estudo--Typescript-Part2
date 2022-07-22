import { NegociacaoFeita } from "../models/NegociacaoFeita.js";
import { TodasNegociacoes } from "../models/TodasNegociacoes.js";
//_________________________PARTE 2____________________
import { NegociacoesView } from "./views/negociacoes-view.js";
import { MensagemView } from "./views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";

//Exporing the main class
export class NegociacaoController {
    //Assim que ela for instanciado
    //ter o input da data, quantidade e valor

    //Eu preciso colocar o HTMLInputElement, pois o tipo da variável só é definida no construtor. 
    //Poderia ser feita assim === private inputData = 'nome';
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    //Propriedade criada no módulo 4. Arquivo 'negocicoes.ts'
    // private negociacoes: Negociacoes = new Negociacoes()
    private negociacoesTodas = new TodasNegociacoes()
    //_________________________PARTE 2____________________
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    //É melhor usar o enumeration para todar essas constancias de uso universais
    // private readonly SABADO = 6;
    // private readonly DOMINGO = 0

    //Pega os dados dos inputs do HTML
    //Não precisa de argumentos, já que a classe serve para chamar outras funções dentro dela
    //Se houver argumento, o TS vai pedir tais argumento na parte de app.ts

    //Argumento são necessários na hora de chamar a função/classe

    //Quando a classe NegociacaoController for chamada, ela usará o 'constructor' para pegar os dados
    constructor() {
        // A maaneira mais recomendada é a de baixo
        // this.inputData = <HTMLInputElement> document.querySelector('#data');
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
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

    private pegaValor(): NegociacaoFeita {
        //Tipando também o método para garantir que ele sempre volte negociacao
        //E não outro valor que eu coloque por acidente
        const exp = /-/g;

        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new NegociacaoFeita(date, quantidade, valor);
    
    }

    public adiciona(): void {
        // const trader = this.pegaValor();
        // const negociacaoString = new NegociacaoFeita(null, 0, 0);
        const trader = NegociacaoFeita.pegaString(
            this.inputData.value, 
            this.inputQuantidade.value,
            this.inputValor.value
        )

        //______________________________________PARTE 2___________________
        if (!this.ehDiautil(trader.data)) {
            this.mensagemView.atualizaTela('Apenas Negociações em dias úteis são aceitas')
            return
        }

        this.negociacoesTodas.adicionaTrade(trader)
        
        //Teste
        // const novaData = trader.data.setTime(10)
        // console.log(this.negociacoesTodas.listagem()); 
        // this.negociacoes.listagem().pop();

        this.limparFormulario()
        this.atualizaView();
        //______________________________________PARTE 2___________________
        //Atualizando a tela com a string da lista de negociações usando o template string
        //Separando a responsabilidade, centralizando as atualizações da view. Movi esses métodos para 'atualizaView'
        // this.negociacoesView.atualizaTela(this.negociacoesTodas);
        // this.mensagemView.atualizaTela('Negociação adicionada com sucesso');
        // this.negociacoesView.atualizaTela(this.negociacoesTodas);

        // if (trader.data.getDay() > 0 && trader.data.getDay() < 6 ) {
        // Constante se coloca em letra maíuscula
        // if (trader.data.getDay() > this.DOMINGO && trader.data.getDay() < this.SABADO ) {
        //     this.negociacoesTodas.adicionaTrade(trader)

        //     this.limparFormulario()
        //     this.atualizaView();

        // } else {
        //     this.mensagemView.atualizaTela('Apenas Negociações em dias úteis são aceitas')

        // }
        
        //_________________________PARTE 2 - Cap.3____________________
        //Fazendo a negociação ser inserida até se for por um arquivo de texto
       

    }

    // Parte 2
    private ehDiautil(data: Date) {
        // return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO
        return data.getDay() > DiasDaSemana.DOMINGO && 
                data.getDay() < DiasDaSemana.SABADO

    }

    //Limpa o formulário e dá foco no primeiro valor
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView() :void {
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
        this.mensagemView.atualizaTela('Negociação adicionada com sucesso');
    }

}

import { Negociacao } from "../models/negociacao.js";

//Exporing the main class
export class NegociacaoController {
    //Assim que ela for instanciado
    //ter o input da data, quantidade e valor

    //Eu preciso colocar o HTMLInputElement, pois o tipo da variável só é definida no construtor. 
    //Poderia ser feita assim === private inputData = 'nome';
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    
    constructor() {
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
    //Tipando também o método para garantir que ele sempre volte negociacao
    //E não outro valor que eu coloque por acidente
    criaNegociacao(): Negociacao {
        const exp = /-/g;

        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        
        return new Negociacao(date, quantidade, valor);

    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario()
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }
    
}
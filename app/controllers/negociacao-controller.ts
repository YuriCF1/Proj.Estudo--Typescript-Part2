import { Negociacao } from "../models/negociacao.js";

//Exporing the main class
export class NegociacaoController {
    //Assim que ela for instanciado
    //ter o input da data, quantidade e valor

    private inputData;
    private inputQuantidade;
    private inputValor;
    
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
 
    }

    adiciona() {
        const negociacao = new Negociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
        );
        console.log(negociacao);
    }
}
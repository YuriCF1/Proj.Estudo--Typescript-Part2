import { NegociacoesAPI } from "../interfaces/negociacao-do-dia.js";
import { NegociacaoFeita } from "../models/NegociacaoFeita.js";

export class NegociacoesService {

    public obterNegociacoesDaApi(): Promise<NegociacaoFeita[]> {
        return fetch('http://localhost:8080/dados')
            // .then(resposta => {
            //     return resposta.json();
            //Mesma coisa disso
            .then(resposta => resposta.json()) //Tenho certeza que o retorno eu posso transformar para JSON. E O RESULTADO DISSO, VAI DIRETO PARA A PRÓXIMA CHAMADA ENCADEADA DO .then
            // .then((dados: Array<any>) =>{
            //Sem interface
            // .then((dados: any[]) =>{
            //Com interface, para certificar que os nomes de 'vezes' e 'montante' da API serão chamados corretamente
            .then((dados: NegociacoesAPI[]) => {
                // O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
                // The Array.map() method creates a new array from the results of calling a function for every element.

                // A API não dá a data, é sempre a data de hoje. Então tenho que definir, e passar as vezes e o montante da API
                //Já que eu coloquei que é um array ali em cima, o TS me mostra os métodos de array (map)
                return dados.map(dadosDeHoje => {
                    ; //O map retorna dados convertidos para uma INSTANCIA DE NEGOCIAÇÃO do dia de hoje. E agora vem um forEach com outro .then
                    return new NegociacaoFeita(
                        new Date(), //Data
                        dadosDeHoje.vezes, //Quantidade 
                        dadosDeHoje.montante) //Valor

                    // Já que é um JSON, esse código já vai vim com valores tipo Number, então não precisa de uma função pegaString, no arquivo NegociacaoFeita.ts
                })

            })
    }

}
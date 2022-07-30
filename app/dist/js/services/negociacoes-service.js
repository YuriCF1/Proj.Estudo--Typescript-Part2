import { NegociacaoFeita } from "../models/NegociacaoFeita.js";
export class NegociacoesService {
    obterNegociacoesDaApi() {
        return fetch('http://localhost:8080/dados')
            .then(resposta => resposta.json())
            .then((dados) => {
            return dados.map(dadosDeHoje => {
                ;
                return new NegociacaoFeita(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante);
            });
        });
    }
}

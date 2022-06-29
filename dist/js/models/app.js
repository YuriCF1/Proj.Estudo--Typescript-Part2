import { Negociacao } from "./negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao);
console.log(negociacao.data);
console.log(negociacao.volume);

negociacao.quantidad = 12321312321;
console.log(negociacao.quantidad);

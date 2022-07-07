//Capítulo 1 e 2
// import { Negociacao } from "./models/negociacao.js";
// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao);
// console.log(negociacao.data);
// console.log(negociacao.volume);
// // negociacao.quantidad = 12321312321;
// // console.log(negociacao.quantidad);
// console.log(negociacao.quantidade);
//Capítulo 3
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    //(event: Event), por baixo dos panos. 
    //Mas automaticamente já é inferido que a função é baseada num evento do tipo submit
    //Por conta do addEventListenner
    event.preventDefault();
    controller.adiciona();
});

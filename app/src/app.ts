//Capítulo 1 e 2
// import { Negociacao } from "./models/negociacao.js";

// const negociacao = new Negociacao(new Date(), 10, 100);
// console.log(negociacao);
// console.log(negociacao.data);
// console.log(negociacao.volume);

// // negociacao.quantidad = 12321312321;
// // console.log(negociacao.quantidad);
// console.log(negociacao.quantidade);

//__________________Capítulo 3
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");

//__________________Capítulo 4
if (form) {
  form.addEventListener("submit", (event) => {
    //(event: Event), por baixo dos panos.
    //Mas automaticamente já é inferido que a função é baseada num evento do tipo submit
    //Por conta do addEventListenner
    event.preventDefault();
    controller.adiciona();
  });

} else {
  throw Error('Não foi possiível iniciar a aplicação, pois o form parece ser inexistente.')

}

const botaoImporta = document.querySelector('#botao-importa');

if (botaoImporta) {
  botaoImporta.addEventListener('click', () => {
    controller.importarDados();

  })

} else {
  throw Error(`Botão 'Importa' não foi encontrado`)

}
//______________________________________PARTE 2___________________

//Exemplo feito para aparecer o template no console. Após isso, foi feito pelo modo do template diretamente no controller
import { NegociacoesView } from "./views/negociacoes-view.js";
// const negociacoesView = new NegociacoesView();
// const template = negociacoesView.template();
// console.log(template)

// A view sendo 'abstract' não pode ser instanciada diretamente, apenas dentro de uma classe filha
// const view = new View ('algumseletor')
// view.atualizaTela('qualquer coisa')
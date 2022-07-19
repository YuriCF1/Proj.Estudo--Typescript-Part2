import { TodasNegociacoes } from "../models/TodasNegociacoes.js";

import { View } from "./view.js";

// Já que o tipo dos métodos varia nos arquivos views, uso de generics <> para definir o tipo quando a Classe View for extendida
//Declarando o tipo <> vindo do 'T' generics da classe view

// export class NegociacoesView extends View {
export class NegociacoesView extends View<TodasNegociacoes> {
    // Repetição de código, resolvida no arquivo view.ts, com método 'extends'

    // private elemento: HTMLElement;
    // constructor(seletorHTML: string) {
    //     //Faz com que a memória guarde o elemento do dom, em chace. Que é dado como propriedade no controller
    //     this.elemento = document.querySelector(seletorHTML)

    // }
    
    // Intl = um formatador de parâmetro globlais. DateTimeFormat('en-US'), padrão é da localização do navegador
    //Nao faz sentido esse método estar exposto na classe controller, já que é reponsabilidade da classe filha
    protected template(modelo: TodasNegociacoes): string {
        //Antes estava assim <td>${new Intl.DateTimeFormat().format(itemNegociado.data)}</td>
        return `
            <table class="table table-hover table-bordered"
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th> 
                    </tr>
                <thead>
                <tbody>
                ${modelo.listagem().map(itemNegociado => {
                  return `
                  <tr>
                    <td>${this.converterData(itemNegociado.data)}</td>
                    <td>${itemNegociado.quantidade}</td>
                    <td>${itemNegociado.valor}</td>
                  </tr>
                  `
              }).join('')}
                </tbody>
                <script>alert('oi')</script>
            </table>
        `
    }

    //Código repetido, foi parar em view.ts
    // atualizaTela(modelo: TodasNegociacoes): void {
    //     const template = this.template(modelo);
    //     this.elemento.innerHTML = template;
    //     // console.log(template);

    // }

    //Deixando o template mais limpo
    private converterData(data: Date): string {
        return new Intl.DateTimeFormat().format(data)

    }
}

import { View } from "./view.js";
// Já que o tipo dos métodos varia nos arquivos views, uso de generics <> para definir o tipo quando a Classe View for extendida
//Declarando o tipo <> vindo do 'T' generics da classe view
// export class NegociacoesView extends View {
export class NegociacoesView extends View {
    // Repetição de código, resolvida no arquivo view.ts, com método 'extends'
    // private elemento: HTMLElement;
    // constructor(seletorHTML: string) {
    //     //Faz com que a memória guarde o elemento do dom, em chace. Que é dado como propriedade no controller
    //     this.elemento = document.querySelector(seletorHTML)
    // }
    // Intl = um formatador de parâmetro globlais. DateTimeFormat('en-US'), padrão é da localização do navegador
    template(modelo) {
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
                      <td>${new Intl.DateTimeFormat().format(itemNegociado.data)}</td>
                      <td>${itemNegociado.quantidade}</td>
                      <td>${itemNegociado.valor}</td>
                  </tr>
                  `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
}

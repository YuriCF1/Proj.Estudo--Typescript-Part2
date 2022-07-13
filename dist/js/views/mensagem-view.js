import { View } from "./view.js";
// export class MensagemView extends View {
export class MensagemView extends View {
    // Repetição de código, resolvida no arquivo view.ts, com método 'extends'
    // private elemento: HTMLElement;
    // constructor(seletor: string) {
    //     this.elemento = document.querySelector(seletor)
    // }
    template(modelo) {
        return `
            <p class="alert alert-info">${modelo}</p>

        `;
    }
}
//     atualizaTela(modelo: string): void {
//         const template = this.template(modelo)
//         this.elemento.innerHTML = template;
//     }
// }

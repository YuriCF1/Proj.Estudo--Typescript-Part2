import { View } from "./view.js";

// export class MensagemView extends View {
export class MensagemView extends View<string> {
    // Repetição de código, resolvida no arquivo view.ts, com método 'extends'

    // private elemento: HTMLElement;
    // constructor(seletor: string) {
    //     this.elemento = document.querySelector(seletor)

    // }
    
    //Nao faz sentido esse método estar exposto na classe controller, já que é reponsabilidade da classe filha
    protected template(modelo: string): string {
        return `
            <p class="alert alert-info">${modelo}</p>

        `
    }
}

//     atualizaTela(modelo: string): void {
//         const template = this.template(modelo)
//         this.elemento.innerHTML = template;
//     }
// }

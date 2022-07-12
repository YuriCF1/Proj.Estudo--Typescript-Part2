export class MensagemView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(modelo) {
        return `
            <p class="alert alert-info">${modelo}</p>

        `;
    }
    atualizaTela(modelo) {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}

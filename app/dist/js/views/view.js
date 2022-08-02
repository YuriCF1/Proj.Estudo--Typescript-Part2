export class View {
    constructor(seletor) {
        const elementoVerificado = document.querySelector(seletor);
        if (elementoVerificado) {
            this.elemento = elementoVerificado;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
    }
    atualizaTela(modelo) {
        let template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map
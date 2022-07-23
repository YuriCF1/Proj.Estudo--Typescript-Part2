export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elementoVerificado = document.querySelector(seletor);
        if (elementoVerificado) {
            this.elemento = elementoVerificado;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    atualizaTela(modelo) {
        const t1 = performance.now();
        let template = this.template(modelo);
        if (this.escapar === true) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método atualizaTela: ${(t2 - t1) / 1000} segundos`);
    }
}

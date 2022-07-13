// export class View {
// Já que o tipo dos métodos varia nos arquivos views, uso de generics<> para definir o tipo quando a Classe View for extendida
//O 'T' funciona como uma variável de tipo a ser declarada no extends
export class View {
    // constructor(seletor: string) {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    atualizaTela(modelo) {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
    // template(modelo: string): string {
    template(modelo) {
        throw Error('Classe filha precisa implementar o método Template');
    }
}

// export class View {
// Já que o tipo dos métodos varia nos arquivos views, uso de generics<> para definir o tipo quando a Classe View for extendida
//O 'T' funciona como uma variável de tipo a ser declarada no extends
// A view sendo 'abstract' não pode ser instanciada diretamente, apenas dentro de uma classe filha
export class View {
    // constructor(seletor: string) {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //Public é sempre o padrão, caso nada seja escrito
    atualizaTela(modelo) {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}
// template(modelo: string): string {
//     template(modelo: T): string {
//        throw Error('Classe filha precisa implementar o método Template')
//     }
// }

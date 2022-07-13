// export class View {
// Já que o tipo dos métodos varia nos arquivos views, uso de generics<> para definir o tipo quando a Classe View for extendida
//O 'T' funciona como uma variável de tipo a ser declarada no extends
export class View<T> {
        // private elemento: HTMLElement;
    protected elemento: HTMLElement;

    // constructor(seletor: string) {
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)

    }

    atualizaTela(modelo: T): void {
        const template = this.template(modelo)
        this.elemento.innerHTML = template;
    }

    // template(modelo: string): string {
    template(modelo: T): string {
       throw Error('Classe filha precisa implementar o método Template')
    }
}

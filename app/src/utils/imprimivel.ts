// Classe abstrata: Não posso criar instância. Toda classe abstrata obriga você a implementar o método dela
export abstract class Imprimivel {
    // Fica implícito que o construtor daqui existe assim
    constructor() {}
    public abstract exibeConsole(): string;
}

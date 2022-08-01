// ______FAZENDO DESSA MANEIRA, EU POSSO ATÉ GARANTIR O COMPORTAMENTO. MAS EU NÃO PASSO MAIS USAR EXTENDS EM CLASSE ALGUMA DEPOIS QUE EU USAR COM ESSA

// Classe abstrata: Não posso criar instância. Toda classe abstrata obriga você a implementar o método dela
// export abstract class Imprimivel {
//     // Fica implícito que o construtor daqui existe assim
//     constructor() {}
//     public abstract exibeConsole(): string;
// }

// ______POR ISSO, TODA VEZ QUE EU QUISER GARANTIR UM COMPORTAMENTE SEM TER QUE FICAR EXTENDEDNO CÓDIGO, EU USO UMA INTERFACE__________
// Por padrão, toda interface é PUBLIC e todo método dela é ABSTRACT
export interface Imprimivel {
        exibeConsole(): string;
    }
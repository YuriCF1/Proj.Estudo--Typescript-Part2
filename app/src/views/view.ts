// export class View {
// Já que o tipo dos métodos varia nos arquivos views, uso de generics<> para definir o tipo quando a Classe View for extendida
//O 'T' funciona como uma variável de tipo a ser declarada no extends
// A view sendo 'abstract' não pode ser instanciada diretamente, apenas dentro de uma classe filha

//_________PART 3_________
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucacao } from "../decorators/logar-tempo-de-execucao.js";

//Classe abstrata: Não se pode criar uma instância diretamente dela. Só se o filho herdar essa classe, e eu criar uma instância dele
export abstract class View<T> {
    // export class View<T> {
    // private elemento: HTMLElement;
    protected elemento: HTMLElement;

    // private escapar: boolean = false;
    private escapar = false;

    // constructor(seletor: string) {
    constructor(seletor: string, escapar?: boolean) {
        const elementoVerificado = document.querySelector(seletor);
        // this.elemento = document.querySelector(seletor)

        if(elementoVerificado) {
            this.elemento = elementoVerificado as HTMLElement

        } else {
            throw Error (`Seletor ${seletor} não existe no DOM. Verifique.`)

        }

        if(escapar) {
            this.escapar = escapar;

        }


    }

    @logarTempoDeExecucacao(true)
    @inspect()
    //Public é sempre o padrão, caso nada seja escrito
    public atualizaTela(modelo: T): void {
        // _________PART 3_________
        // const t1 = performance.now();
        
        // const template = this.template(modelo)
        let template = this.template(modelo);

        if (this.escapar === true) {
            //Dentro do template. Pegar qualquer <script> quem venha com caractéries com e sem espaço, zero ou mais vezes, mas o menor número de vezes possível. 
            // Seguidos de </script> e substituir por nada
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this.elemento.innerHTML = template;
        
        // const t2 = performance.now();
        // console.log(`Tempo de execução do método atualizaTela: ${(t2-t1)/1000} segundos` );

    }

    //Nao faz sentido esse método estar exposto na classe controller, já que é reponsabilidade da classe filha
    //__________O método abstract exige que seja definido quando ele for chamado em outra classe
    //__________O protected diz que só a classe pai e filhas podem ter acesso ao método
    protected abstract template(modelo: T): string;
}
// template(modelo: string): string {
//     template(modelo: T): string {
//        throw Error('Classe filha precisa implementar o método Template')
//     }
// }

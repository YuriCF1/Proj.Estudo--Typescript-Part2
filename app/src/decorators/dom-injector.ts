export function domInjector(seletor: string) {
    //propertyKey É o atrbuto que será colocado sob o decorator. Por exemplo o 'inputData'
    return function(target: any, propertyKey: string) {
        console.log(`Modificando o prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}` );

        //Ele não pode receber null, mas com | null eu digo que ele pode. Por conta do StricNullChecks, que previne o erro caso devolva null por acidente
        let elemento: HTMLElement | null = null;
        //Também posso fazer com que ela seja undefined
        // let elemento: HTMLElement;
        const getter = function() {

            // Por escopo de funções, o código faz o cache. Toda vez que chamar o elemento com id pela primeira vez, ele vai fazer o que está no if
            // Já se o elemento já existir, já foi feito, o return vai executar
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}`);

            } 
                return elemento;
        }

        //Substitui a propriedade original da classe, por um getter
        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        )
    }

    //O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto.
    //Object.defineProperty(obj, prop, descriptor)
    //obj = O objeto no qual será definida a propriedade.
    //prop = O nome da propriedade que será definida ou modificada.
    //descriptor = O descritor para a propriedade que será definida ou modificada.
}

//Será chamado
// @domInjector('#elemento');
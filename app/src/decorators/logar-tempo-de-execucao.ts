//Esqueleto principal de um decorator
export function logarTempoDeExecucacao(emSegundo: boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor) 
    {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]){
            console.log('Inicio');
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundo) {
                divisor = 1000;
                unidade = 'segundos'
            }

            //Aceita vários parâmetros, e transforma em uma array de qualquer tipo
            // descriptor.value = function(...args: Array<any>){
            const t1  = performance.now();

            //Chama o método original
            // const retorno = metodoOriginal()
            //O apply me passa um contexto e um array de parâmetros
            //This vai ser onde o decorator foi chamados, no caso, negociacoes-controller.ts
            
            //Desse modo, foi como o vs code sugeriu, não funcionou
            // const retorno = metodoOriginal.method.apply(this, [args]);;
            const retorno = metodoOriginal.apply(this, args);

            const t2  = performance.now();
            console.log(`${propertyKey}, tempo de execucação: ${(t2-t1)/1000} ${unidade}`);
            
            retorno
        }
        return descriptor;

    }

} 
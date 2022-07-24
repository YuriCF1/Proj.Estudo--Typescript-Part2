//Esqueleto principal de um decorator
export function logarTempoDeExecucacao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor) 
    {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(){
            const t1  = performance.now();

            //Chama o método original
            const retorno = metodoOriginal()

            const t2  = performance.now();
            console.log(`${propertyKey}, tempo de execucação: ${(t2-t1)/1000}`);
            
            retorno
        }
        return descriptor;

    }

}
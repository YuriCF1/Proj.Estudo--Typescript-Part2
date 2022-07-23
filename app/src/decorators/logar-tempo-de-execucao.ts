//Esqueleto principal de um decorator
export function logarTempoDeExecucacao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor) 
    {
        return descriptor;

    }

}
export function inspect() {
    return function(
        target: any,
        propertyKey: string, //Nome do método
        descriptor: PropertyDescriptor, //Onde tem a referência do método
        
        ) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: any[]) {
                console.log(`--- Método ${propertyKey}`);
                console.log(`--- Parâmetros ${JSON.stringify(args)}`);
                const retorno = metodoOriginal.apply(this, args)
                console.log(`------ retorno= ${JSON.stringify(retorno)}`);
                return retorno;
            }
            return descriptor;
    }
}


// TEMPLATE PADRÃO PARA DECORATORS
// export function inspect() {
//     return function(
//         target: any,
//         propertyKey: string, //Nome do método
//         descriptor: PropertyDescriptor, //Onde tem a referência do método
        
//         ) {
//             const metodoOriginal = descriptor.value;
//             descriptor.value = function(...args: any[]) {
//                 const retorno = metodoOriginal.apply(this, args)
//                 return retorno;
//             }
//             return descriptor;
//     }
// }
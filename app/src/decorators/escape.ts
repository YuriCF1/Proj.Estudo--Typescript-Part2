export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);
        
        // Constructor.name dá o nome da classe
        // console.log(`@escape em ação na classe 
            // ${this.constructor.name} para o método ${propertyKey}`);
       
        // Verificar se é uma string, pois se retornar um objeto, vai dar problema
        if(typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '')

        }
        return retorno

    }
    return descriptor;
}
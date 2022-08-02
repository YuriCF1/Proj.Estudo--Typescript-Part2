export function logarTempoDeExecucacao(emSegundo = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log('Inicio dos decorators');
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundo) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucação: ${(t2 - t1) / 1000} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logar-tempo-de-execucao.js.map
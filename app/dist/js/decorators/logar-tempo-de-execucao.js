export function logarTempoDeExecucacao() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}

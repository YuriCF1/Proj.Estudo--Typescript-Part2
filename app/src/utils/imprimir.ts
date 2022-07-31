import { NegociacaoFeita } from "../models/NegociacaoFeita";
import { Imprimivel } from "./imprimivel.js";

//...objetos = parâmetros infinitos
// export function Imprimir(...objetos: any[]) { //Para adequar mais classes, eu não posso passar o any, pois não tem autocomplete, aceita várias coisas, e dá erro caso não tenha o método internamente
// A classe NegociacaoFEita e TodasNegociacoes estão sendo referenciadas aqui como Imrprimivel. ISSO SE CHAMA POLIMORFISMO
export function Imprimir(...objetos: Imprimivel[]) {
    for (let objeto of objetos) {
        console.log(objeto.exibeConsole());

    }


}
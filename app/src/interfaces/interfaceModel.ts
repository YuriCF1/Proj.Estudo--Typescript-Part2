import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

// UMA CLASSE NÃO PODE EXTENDER MAIS DE UMA, PORÉM UMA INTERFACE PODE
export interface interfaceModel<T> extends Imprimivel, Comparavel<T> {


}
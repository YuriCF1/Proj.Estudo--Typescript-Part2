var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NegociacaoFeita } from "../models/NegociacaoFeita.js";
import { TodasNegociacoes } from "../models/TodasNegociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { logarTempoDeExecucacao } from "../decorators/logar-tempo-de-execucao.js";
import { inspect } from "../decorators/inspect.js";
import { domInjector } from "../decorators/dom-injector.js";
export class NegociacaoController {
    constructor() {
        this.negociacoesTodas = new TodasNegociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
    }
    pegaValor() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new NegociacaoFeita(date, quantidade, valor);
    }
    adiciona() {
        const trader = NegociacaoFeita.pegaString(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiautil(trader.data)) {
            this.mensagemView.atualizaTela('Apenas Negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoesTodas.adicionaTrade(trader);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiautil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.atualizaTela(this.negociacoesTodas);
        this.mensagemView.atualizaTela('Negociação adicionada com sucesso');
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspect(),
    logarTempoDeExecucacao()
], NegociacaoController.prototype, "adiciona", null);
